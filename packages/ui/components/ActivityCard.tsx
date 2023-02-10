import * as React from "react";
import * as MUI from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import moment from "moment-timezone";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

interface CardProps {
  date: string;
  numberOfPages: number;
  goal: number;
}

export const ActivityCard: React.FC<CardProps> = ({
  date,
  numberOfPages,
  goal,
}) => {
  const month = moment(date).format("MMM");
  const day = moment(date).format("DD");
  return (
    <MUI.Card
      sx={{
        width: "100%",
        color: "white",
        marginY: "3%",
        minHeight: "100px",
        maxHeight: "200px",
        "--tw-bg-opacity": 1,
        backgroundColor: "rgb(31 41 55 / var(--tw-bg-opacity))",
      }}
    >
      <MUI.CardHeader title={`${month} ${day}`} />
      <MUI.CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <MUI.Typography>Pages read: {numberOfPages}</MUI.Typography>
        {numberOfPages > goal ? (
          <CheckCircleIcon sx={{ color: "green" }} />
        ) : (
          <RadioButtonUncheckedIcon sx={{ color: "green" }} />
        )}
      </MUI.CardContent>
    </MUI.Card>
  );
};
