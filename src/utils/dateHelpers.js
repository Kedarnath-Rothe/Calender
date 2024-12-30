export const generateCalendar = (month, year) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();

    let calendar = [];
    let week = [];

    for (let i = 0; i < startDay; i++) week.push(null);

    for (let day = 1; day <= daysInMonth; day++) {
        week.push(day);
        if (week.length === 7) {
            calendar.push(week);
            week = [];
        }
    }

    if (week.length > 0) {
        while (week.length < 7) week.push(null);
        calendar.push(week);
    }

    return calendar;
};