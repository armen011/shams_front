import moment from 'moment';
import 'moment/locale/ru';
import 'moment/locale/hy-am';

export const formatDate = (
  date: string | number | Date,
  format: string,
  locale: string
) => {
  return moment(date).locale(locale).format(format);
};
