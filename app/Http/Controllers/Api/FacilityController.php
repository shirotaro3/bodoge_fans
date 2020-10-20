<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\Models\Facility;

class FacilityController extends Controller
{   
    // index

    public function index() {
        Log::info('[API_FACILITIES_INDEX_QUERY_START]');

        // APIを叩く回数を減らすため、できる限りまとめてデータを渡す
        $facilities = Facility::with([
            'm_prefecture',
            'm_scale',
            'm_budget',
            'm_facility_type',
            'm_services',
            'facility_time',
            'events',
            'reviews.user',
            'likes'
            ])->paginate(5);

        Log::info('[API_FACILITIES_INDEX_QUERY_SUCCESS]');
        return response()->json($facilities);
    }

    // store

    public function store(Request $request) {
        Log::info('[API_FACILITIES_STORE_POST_START]');

        $facility = DB::transaction(function () use ($request) {
            $facility = new Facility();
            $facility->fill($request->all());
            $facility->user_id = Auth::user()->id;

            // ヘッダー画像の保存
            if ($request->file('header_image')){
                $path = Storage::disk('s3')->putFile('facilities/header', $request->file('header_image'), 'public');
                $facility->header_image_url = Storage::disk('s3')->url($path);
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

        Log::info('[API_FACILITIES_STORE_POST_SUCCESS]');
        return response()->json($facility);
    }
    
    // show

    public function show($id) {
        Log::info('[API_FACILITIES_SHOW_GET_START]');

        $facility = Facility::with([
            'm_prefecture',
            'm_scale',
            'm_budget',
            'm_facility_type',
            'm_services',
            'facility_time',
            'events',
            'reviews.user',
            'likes'
            ])->find($id);
        if (!$facility) {
            Log::info('[API_FACILITIES_SHOW_GET_FAILURE]');
            abort(404, 'Not found');
        }
        
        Log::info('[API_FACILITIES_SHOW_GET_SUCCESS]');
        return response()->json($facility);
    }

    // update

    public function update(Request $request, $id) {
        Log::info('[API_FACILITIES_UPDATE_START]');

        $facility = DB::transaction(function () use ($request, $id) {
            $facility = Facility::find($id);
            if (!$facility) {
                Log::info('[API_FACILITIES_UPDATE_FAILURE]');
                abort(400, 'Invalid param');
            }
            if ($facility->user_id !== Auth::user()->id) {
                Log::info('[API_FACILITIES_UPDATE_FAILURE]');
                abort(403, 'Forbidden');
            }
            $services = $request->input('m_service_ids');
            if ($services) {
                $facility->m_services()->sync($services);
            }
            $facility->update($request->all());

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

        Log::info('[API_FACILITIES_UPDATE_SUCCESS]');
        return response()->json($facility);
    }

    // destroy

    public function destroy($id) {
        Log::info('[API_FACILITIES_DESTROY_DELETE_START]');

        $facility = Facility::find($id);
        if ($facility->user_id !== Auth::user()->id) {
            abort(403, 'Forbidden');
            Log::info('[API_FACILITIES_DESTROY_DELETE_FAILURE]');
        }
        $facility->delete();

        Log::info('[API_FACILITIES_DESTROY_DELETE_SUCCESS]');
        return response()->json($facility);
    }

    // search

    public function search(Request $request) {
        Log::info('[API_FACILITIES_SEARCH_QUERY_START]');
        
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
            $query->where('name', 'like', "%$name%");
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

        Log::info('[API_FACILITIES_SEARCH_QUERY_SUCCESS]');
        return response()->json($facilities);
    }

    public function random_pick() {
        Log::info('[API_FACILITIES_RANDOM_PICK_QUERY_START]');
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
        Log::info('[API_FACILITIES_RANDOM_PICK_QUERY_SUCCESS]');
        return response()->json($facilities);
    }
}
