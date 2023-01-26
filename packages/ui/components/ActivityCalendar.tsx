import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const ActivityCalendar: React.FC<{}> = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar value={value} onChange={onChange} />
    </div>
  );
};
