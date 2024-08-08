import { Button } from "@mui/material";
import "./totalrevenuetop.css";
const TotalRevenueTop = () => {
  return (
    <div className="content_Total_Revenue" >
      <div className="info">
        <h4>Total Revenue</h4>
        <p>$980,273.00</p>
      </div>
      <Button variant="contained" color="warning">
        by Year
      </Button>
    </div>
  );
}

export default TotalRevenueTop