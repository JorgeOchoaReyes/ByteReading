import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const ActivityCalendar: React.FC = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Calendar value={value} onChange={onChange} />
    </div>
  );
};
