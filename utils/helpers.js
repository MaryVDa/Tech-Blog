module.exports = {
    format_time: (date) => {
        //format date as MM/DD/YYYY
        return date.toLocaleDateString();
    },
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
};