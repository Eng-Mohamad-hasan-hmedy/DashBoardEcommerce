import "./dataanalyst.css";
import TotalRevenue from "./TotalRevenue/TotalRevenue";
import CustomersDashboard from "./CustomersDashboard/CustomersDashboard";
import TopProducts from "./TopProducts/TopProducts";
import Stats_Overview from "./Stats_Overview/Stats_Overview";
const DataAnalyst = () => {
  return (
    <div className="data_analyst">
      {/*------------- Total Revenue Dashboard start -------------*/}
      <TotalRevenue />
      {/*------------- Total Revenue Dashboard End -------------*/}
      {/*------------- Customers Dashboard start -------------*/}
      <CustomersDashboard />
      {/*------------- Customers Dashboard End -------------*/}
      {/*------------- Top Products Dashboard start -------------*/}
      <TopProducts />
      {/*------------- Top Products Dashboard end -------------*/}
      {/*------------- Stats Overview Dashboard start -------------*/}
      <Stats_Overview />
      {/*------------- Stats Overview Dashboard end -------------*/}
      {/*------------- Data analyst End -------------*/}
    </div>
  );
};

export default DataAnalyst;
