import "./customersdashboard.css";
import CustomersInfoData from "./customersInfo/CustomersInfoData";
import Progress from "./Progress/Progress";

const CustomersDashboard = () => {
  return (
    <div className="Customers" data-aos="fade-up">
      {/* start Customers Info */}
      <CustomersInfoData />
      {/* End Customers Info */}
      {/* start Progress Info */}
      <Progress />
      {/* end Progress Info */}
    </div>
  );
};

export default CustomersDashboard;
