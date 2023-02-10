import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

const actions = [
  { icon: <MenuBookIcon />, name: "Books" },
  { icon: <BookmarkAddIcon />, name: "Activity" },
  { icon: <MilitaryTechIcon />, name: "Goal" },
];

export const ActivityActions = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
        }}
        icon={
          <SpeedDialIcon
            sx={{
              color: "white",
            }}
          />
        }
        FabProps={{
          sx: {
            "--tw-bg-opacity": 1,
            backgroundColor: "rgb(31 41 55 / var(--tw-bg-opacity)) !important",
          },
        }}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </>
  );
};
