// As month index starts from 0, we are adding 1 to it.
const formatDate = (date) =>  {
    const d = new Date(date);
    let month = `${d.getMonth() + 1}`;
    let day = `${d.getDate()}`;
    const year = d.getFullYear();

    // Month can be 1-9 (Jan-Sept)
    // We want to show 1 as 01
    // 2 as 02, 4 as 04 ...
    if(month.length < 2) {
        month = `0${month}`;
    }

    // Day can be 1-7 (Sun-Sat)
    // We want to show 1 as 01
    // 2 as 02, 4 as 04 ...
    if(day.length < 2) {
        day = `0${day}`;
    }

    return [year, month, day].join('-');
}

export default formatDate;