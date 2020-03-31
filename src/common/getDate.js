class GetDate {
    getDate(date) {
        const year = date.getFullYear();
        let month = (1 + date.getMonth());     
        let day = date.getDate();     //M
        month = month >= 10 ? month : '0' + month;
        day = day >= 10 ? day : '0' + day;
        return  year + '' + month + '' + day;
    }
}
export default new GetDate();