import dayjs from 'dayjs';
import _ from 'lodash';

export const formatDate = (date) => {
  return dayjs(date).format('YYYY年MM月DD日');
};

export const formatTime = (time) => {
  return time.slice(0, 5);
};

export const findMasterById = (collection, id) => {
  return _.find(collection, { value: Number(id) });
};
