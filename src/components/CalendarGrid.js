import React, { useEffect, useState } from 'react';
import '../styles/calendar.css';
import { generateCalendar } from '../utils/dateHelpers';

export default function CalendarGrid({ events, onSelectDate, selectedDate }) {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [calendar, setCalendar] = useState([]);

    useEffect(() => {
        setCalendar(generateCalendar(currentMonth, currentYear));
    }, [currentMonth, currentYear]);

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    return (
        <>
            <center>
                <h1>Digital Caleder By Kedarnath Rothe</h1>
            </center>
            <div className="calendar">
                <header>
                    <button onClick={prevMonth}>Previous</button>
                    <h2>{`${currentMonth + 1}-${currentYear}`}</h2>
                    <button onClick={nextMonth}>Next</button>
                </header>
                <div className="calendar-grid">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <div key={day} className="day-label">
                            {day}
                        </div>
                    ))}
                    {calendar.flat().map((date, index) => (
                        <div
                            key={index}
                            className={`calendar-day ${date
                                    ? selectedDate === date
                                        ? 'selected-day'
                                        : new Date().getDate() === date && new Date().getMonth() === currentMonth && new Date().getFullYear() === currentYear
                                            ? 'current-day'
                                            : index % 7 === 0 // Sunday (index divisible by 7)
                                                ? 'weekend'
                                                : 'active'
                                    : 'inactive'
                                }`}
                            onClick={() => date && onSelectDate(date)}
                        >
                            {date}
                            <div className="event-indicator">
                                {(events[currentYear]?.[currentMonth]?.[date] || []).length > 0 && '•'}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ul className='ul'>
                <li>Current Day - <span className='curr'></span></li>
                <li>Selected Day - <span className='sel'></span></li>
                <li>Weekend Day - <span className='we'></span></li>
            </ul>
        </>
    );
}