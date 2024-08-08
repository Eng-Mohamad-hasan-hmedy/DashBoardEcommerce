import FilterAltIcon from "@mui/icons-material/FilterAlt";
import "./customersinfo.css";
const CustomersInfoData = () => {
  return (
    <div className="customersInfo">
      <div className="customers_contente">
        <h1>Customers </h1>
        <p>Information About your Customers</p>
      </div>
      <FilterAltIcon className="customer_icone" />
    </div>
  );
};

export default CustomersInfoData;
