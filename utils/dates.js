import moment from 'moment';
moment.locale('nl');

export function formatDate(date) {
  let Formatdate = moment(date).format('DD-MM-YYYY');
  return Formatdate;
}

export function formatDay(date) {
  let formatDay = moment(date).format('dddd');
  return formatDay;
}
