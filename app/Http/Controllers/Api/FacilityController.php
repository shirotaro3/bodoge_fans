<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateFacilityRequest;
use App\Http\Requests\UpdateFacilityRequest;
use App\Models\Facility;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class FacilityController extends Controller
{
    // index

    public function index()
    {
        Log::info('[FACILITIES_API_INDEX_QUERY_START]');

        $facilities = Facility::with([
            'm_prefecture',
            'm_scale',
            'm_budget',
            'm_facility_type',
            'm_services',
            'facility_time',
            'events',
            'reviews.user',
            'likes',
            ])->paginate(5);

        Log::info('[FACILITIES_API_INDEX_QUERY_SUCCESS]');
        return response()->json($facilities);
    }

    // store

    public function store(CreateFacilityRequest $request)
    {
        Log::info('[FACILITIES_API_STORE_POST_START]');

        $facility = DB::transaction(function () use ($request) {
            $facility = new Facility();
            $facility->fill($request->all());
            $facility->user_id = Auth::user()->id;

            // ヘッダー画像の保存
            if ($request->file('header_image')) {
                $facility->header_image_path = Storage::disk('s3')->putFile('facilities/header', $request->file('header_image'), 'public');
            }
            $facility->save();

            $services = $request->input('m_service_ids');
            $facility->m_services()->sync($services);

            $facility_time = $facility->facility_time()->create();
            return $facility;
        });
        $facility->refresh();
        $facility->load(
            'm_services',
            'facility_time',
            'likes',
            'reviews.user',
            'events',
            'm_budget',
            'm_prefecture',
            'm_scale',
            'm_facility_type'
        );

        Log::info('[FACILITIES_API_STORE_POST_SUCCESS]');
        return response()->json($facility);
    }

    // show

    public function show($id)
    {
        Log::info('[FACILITIES_API_SHOW_GET_START]');

        $facility = Facility::with([
            'm_prefecture',
            'm_scale',
            'm_budget',
            'm_facility_type',
            'm_services',
            'facility_time',
            'events',
            'reviews.user',
            'likes',
            ])->find($id);

        if (!$facility) {
            Log::info('[FACILITIES_API_SHOW_GET_FAILURE]');
            abort(404, 'Not found');
        }

        Log::info('[FACILITIES_API_SHOW_GET_SUCCESS]');
        return response()->json($facility);
    }

    // update

    public function update(UpdateFacilityRequest $request, $id)
    {
        Log::info('[FACILITIES_API_UPDATE_START]');

        $facility = DB::transaction(function () use ($request, $id) {
            $facility = Facility::find($id);

            if (!$facility) {
                Log::info('[FACILITIES_API_UPDATE_FAILURE]');
                abort(400, 'Invalid param');
            }

            if ($facility->user_id !== Auth::user()->id) {
                Log::info('[FACILITIES_API_UPDATE_FAILURE]');
                abort(403, 'Forbidden');
            }
            $services = $request->input('m_service_ids');

            if ($services) {
                $facility->m_services()->sync($services);
            }
            $facility->fill($request->all());
            // ヘッダー画像の保存
            if ($request->file('header_image')) {
                // 新しいファイルを保存
                $facility->header_image_path = Storage::disk('s3')->putFile('facilities/header', $request->file('header_image'), 'public');
                // 古いファイルを削除
                $old_file_path = $facility->getOriginal('header_image_path');

                if ($old_file_path) {
                    Storage::disk('s3')->delete($old_file_path);
                }
            }
            $facility->save();
            return $facility;
        });
        $facility->load(
            'm_services',
            'facility_time',
            'likes',
            'reviews.user',
            'events',
            'm_budget',
            'm_prefecture',
            'm_scale',
            'm_facility_type'
        );

        Log::info('[FACILITIES_API_UPDATE_SUCCESS]');
        return response()->json($facility);
    }

    // destroy

    public function destroy($id)
    {
        Log::info('[FACILITIES_API_DESTROY_DELETE_START]');

        $facility = Facility::find($id);

        if ($facility->user_id !== Auth::user()->id) {
            Log::info('[FACILITIES_API_DESTROY_DELETE_FAILURE]');
            abort(403, 'Forbidden');
        }

        if (!$facility) {
            Log::info('[FACILITIES_API_DESTROY_DELETE_FAILURE]');
            abort(400, 'Invalid param');
        }
        $old_file_path = $facility->header_image_path;

        if ($old_file_path) {
            Storage::disk('s3')->delete($old_file_path);
        }
        $facility->delete();

        Log::info('[FACILITIES_API_DESTROY_DELETE_SUCCESS]');
        return response()->json($facility);
    }

    // search

    public function search(Request $request)
    {
        Log::info('[FACILITIES_API_SEARCH_QUERY_START]');

        $name = $request->query('name');
        $m_facility_type_id = $request->query('m_facility_type_id');
        $m_budget_id = $request->query('m_budget_id');
        $m_scale_id = $request->query('m_scale_id');
        $m_prefecture_id = $request->query('m_prefecture_id');
        // 検索では使用しないがIDの配列からデータを取得するために使用する
        $id = $request->query('id');

        $query = Facility::query();
        // 検索条件を追加していく
        if ($name) {
            $query->where('name', 'like', "%${name}%");
        }

        if ($m_budget_id) {
            $query->where('m_budget_id', $m_budget_id);
        }

        if ($m_scale_id) {
            $query->where('m_scale_id', $m_scale_id);
        }

        if ($m_prefecture_id) {
            $query->where('m_prefecture_id', $m_prefecture_id);
        }

        if ($m_facility_type_id) {
            $query->where('m_facility_type_id', $m_facility_type_id);
        }

        if ($id) {
            $query->whereIn('id', $id);
        }
        // データを取得
        $facilities = $query->with(
            'm_services',
            'facility_time',
            'likes',
            'reviews.user',
            'events',
            'm_budget',
            'm_prefecture',
            'm_scale',
            'm_facility_type'
        )->paginate(5);

        Log::info('[FACILITIES_API_SEARCH_QUERY_SUCCESS]');
        return response()->json($facilities);
    }

    public function random_pick()
    {
        Log::info('[FACILITIES_API_RANDOM_PICK_QUERY_START]');
        $facilities = Facility::with(
            'm_services',
            'facility_time',
            'likes',
            'reviews.user',
            'events',
            'm_budget',
            'm_prefecture',
            'm_scale',
            'm_facility_type'
        )->inRandomOrder()->take(5)->get();
        Log::info('[FACILITIES_API_RANDOM_PICK_QUERY_SUCCESS]');
        return response()->json($facilities);
    }
}
