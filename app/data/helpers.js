import moment from 'moment';

export default {
  formatDate: (date) => moment(new Date(date)).format('MMMM Do')
}
