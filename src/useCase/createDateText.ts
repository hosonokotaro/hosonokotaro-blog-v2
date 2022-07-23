import dayjs from 'dayjs';

export const getYearNow = () => {
  return dayjs(new Date()).format('YYYY');
};

const dateFormat = {
  full: 'YYYY/MM/DD HH:mm',
  day: 'YYYY/MM/DD',
} as const;

export const formatDate = (
  unixTime: number,
  dateFormatProps: keyof typeof dateFormat = 'full'
) => {
  return dayjs(unixTime).format(dateFormat[dateFormatProps]);
};
