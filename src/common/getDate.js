import moment from 'moment';

class GetDate {
    getDate(date) {
        return moment(date).format('YYYY.MM.DD');
    }
}
export default new GetDate();