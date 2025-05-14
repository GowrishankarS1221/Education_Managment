import React from 'react';
import './Academics.css';


const Academics = () => {
  const academicCalendar = {
    quarter1: {
      start: "August 1, 2023",
      end: "October 15, 2023",
      events: [
        { date: "August 1", event: "First Day of School" },
        { date: "September 5", event: "Sports Day" },
        { date: "October 10-15", event: "Quarter 1 Exams" }
      ]
    },
    quarter2: {
      start: "October 25, 2023",
      end: "December 20, 2023",
      events: [
        { date: "November 15", event: "Annual Day" },
        { date: "December 15-20", event: "Quarter 2 Exams" }
      ]
    },
    quarter3: {
      start: "January 5, 2024",
      end: "March 20, 2024",
      events: [
        { date: "January 26", event: "Republic Day Celebration" },
        { date: "February 15", event: "Educational Trip" },
        { date: "March 15-20", event: "Quarter 3 Exams" }
      ]
    },
    holidays: [
      { date: "October 16-24", occasion: "Dussehra Break" },
      { date: "December 21 - January 4", occasion: "Winter Break" },
      { date: "March 21-31", occasion: "Spring Break" }
    ]
  };

  return (
    <div className="academics-container">
      <h2>Academic Calendar 2023-24</h2>
      
      <div className="row mt-4">
        <div className="col-md-8">
          {/* Quarters */}
          {Object.entries(academicCalendar).map(([quarter, data]) => {
            if (quarter !== 'holidays') {
              return (
                <div key={quarter} className="quarter-section mb-4">
                  <h3 className="quarter-title">
                    {quarter.charAt(0).toUpperCase() + quarter.slice(1)}
                    <span className="quarter-dates">({data.start} - {data.end})</span>
                  </h3>
                  <div className="events-list">
                    {data.events.map((event, index) => (
                      <div key={index} className="event-item">
                        <span className="event-date">{event.date}</span>
                        <span className="event-name">{event.event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        
        <div className="col-md-4">
          {/* Holidays */}
          <div className="holidays-section">
            <h3>Holidays</h3>
            <div className="holidays-list">
              {academicCalendar.holidays.map((holiday, index) => (
                <div key={index} className="holiday-item">
                  <span className="holiday-date">{holiday.date}</span>
                  <span className="holiday-occasion">{holiday.occasion}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;