import Charts from "./Charts/Charts";
import "./totalrevenue.css";
import TotalRevenueTop from "./TotalRevenueTop/TotalRevenueTop";
const TotalRevenue = () => {
  return (
    <div className="Total_Revenue" data-aos="fade-up">
      {/* Start Totatl Revenue Top */}
      <TotalRevenueTop />
      {/* end Totatl Revenue Top */}
      {/* Start Totatl Revenue Charts */}
      <Charts />
      {/* end Totatl Revenue Charts */}
    </div>
  );
};

export default TotalRevenue;
