import dayjs from 'dayjs';

const dateFormat = {
  full: 'YYYY/MM/DD',
  year: 'YYYY',
} as const;

type Props = keyof typeof dateFormat;

const getDateNow = (props: Props) => {
  const date = dayjs(new Date()).format(dateFormat[props]);

  return date;
};

export default getDateNow;
