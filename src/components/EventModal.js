import React, { useEffect, useState } from 'react';
import '../styles/calendar.css';

export default function EventModal({ date, events, onSave, onClose }) {
    const [eventName, setEventName] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [description, setDescription] = useState('');
    const [existingEvents, setExistingEvents] = useState([]);

    useEffect(() => {
        setExistingEvents(events);
    }, [events]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (existingEvents.some(event => (startTime < event.endTime && endTime > event.startTime))) {
            alert('Event times overlap. Please choose a different time.');
            return;
        }
        const newEvent = {
            eventName,
            startTime,
            endTime,
            description,
        };
        onSave([...existingEvents, newEvent]);
        onClose();
    };

    const handleDelete = (index) => {
        const updatedEvents = existingEvents.filter((_, i) => i !== index);
        onSave(updatedEvents);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Manage Events for {date}</h3>
                <div className="event-list">
                    {existingEvents.length > 0 ? (
                        existingEvents.map((event, index) => (
                            <div key={index} className="event-item">
                                <strong>{event.eventName}</strong> ({event.startTime} - {event.endTime})
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </div>
                        ))
                    ) : (
                        <p>No events for this day. Add an event below.</p>
                    )}
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Event Name"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        required
                    />
                    <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        required
                    />
                    <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Description (optional)"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <button type="submit">Save</button>
                    <button type="button" onClick={onClose}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}