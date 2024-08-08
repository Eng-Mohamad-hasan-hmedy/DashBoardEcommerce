import "./notification.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, Badge, IconButton } from "@mui/material";
// import notificationsLabel  from "../../../../Helpers/Helpers";
const Notification = () => {
  return (
    <div className="notification">
      <MoreVertIcon className="dotes_icone" />
      <IconButton >
        <Badge badgeContent={1} color="warning">
          <NotificationsIcon fontSize="large" />
        </Badge>
      </IconButton>
      <Avatar
        src="https://randomuser.me/api/portraits/men/43.jpg"
        sx={{
          width: "65px",
          height: "65px",
          border: "2px solid white",
        }}
      />
    </div>
  );
};

export default Notification;
