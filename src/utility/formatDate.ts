import dayjs from 'dayjs';

const dateFormat = {
  full: 'YYYY/MM/DD HH:mm',
  day: 'YYYY/MM/DD',
} as const;

type DateFormat = keyof typeof dateFormat;

const formatDate = (
  createDate: string,
  dateFormatProps: DateFormat = 'full'
) => {
  return dayjs(parseInt(createDate)).format(dateFormat[dateFormatProps]);
};

export default formatDate;
