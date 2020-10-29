const mastersReducer = (state = {}, action) => {
  switch (action.type) {
  //  MasterData
  case 'SET_MASTERS':
    return {
      ...state,
      facilityTypes: formatSelectValue(action.facilityTypes),
      budgets: formatSelectValue(action.budgets),
      scales: formatSelectValue(action.scales),
      prefectures: formatPrefecture(action.prefectures),
      services: formatService(action.services),
      resolved: true
    };
  default:
    return state;
  }
};

const formatSelectValue = (selectValueArr) => {
  return selectValueArr.map(v => {
    return { value: v.id, label: v.detail };
  });
};
const formatPrefecture = (prefectureArr) => {
  return prefectureArr.map(v => {
    return { value: v.id, label: v.name};
  });
};
const formatService = (serviceArr) => {
  return serviceArr.map(v => {
    return { value: v.id, label: v.detail, iconUrl: v.icon_url };
  });
};

export default mastersReducer;