import React, { useState } from 'react';
import CalendarGrid from './components/CalendarGrid';
import EventModal from './components/EventModal';
import './styles/calendar.css';

function App() {
    const [events, setEvents] = useState(() => JSON.parse(localStorage.getItem('events')) || {});
    const [selectedDate, setSelectedDate] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setShowModal(true);
    };

    const handleSaveEvent = (updatedEvents) => {
        const [year, month, day] = [
            new Date().getFullYear(),
            new Date().getMonth(),
            selectedDate
        ];

        setEvents((prev) => {
            const updated = { ...prev };
            if (!updated[year]) updated[year] = {};
            if (!updated[year][month]) updated[year][month] = {};
            updated[year][month][day] = updatedEvents;

            localStorage.setItem('events', JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <div className="App">
            <CalendarGrid events={events} onSelectDate={handleDateSelect} selectedDate={selectedDate} />
            {showModal && (
                <EventModal
                    date={selectedDate}
                    events={
                        events[new Date().getFullYear()]?.[new Date().getMonth()]?.[selectedDate] || []
                    }
                    onSave={handleSaveEvent}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
}

export default App;
