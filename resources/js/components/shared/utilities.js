import dayjs from 'dayjs';

export const formatDate = (date) => {
  return dayjs(date).format('YYYY年MM月DD日');
};

export const formatTime = (time) => {
  return time.slice(0, 5);
}