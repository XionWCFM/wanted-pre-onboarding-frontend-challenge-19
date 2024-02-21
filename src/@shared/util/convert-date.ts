import { format, parseISO } from 'date-fns';

type DateConverterVariant = 'yyyy.MM.dd';

export const convertDate = (
  date: IsoDate,
  dateFormat: DateConverterVariant = 'yyyy.MM.dd',
) => {
  return format(parseISO(date), dateFormat);
};
