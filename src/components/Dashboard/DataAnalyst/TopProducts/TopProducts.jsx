import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
const TopProducts = () => {
  const Values = [
    {
      key: 1,
      titleValue: "Total Visits",
      timeValue: "10.8m",
      IconeValue: <PersonOutlineIcon className="visit_icon" />,
    },
    {
      key: 2,
      titleValue: "Total Sales",
      timeValue: "100,345",
      IconeValue: (
        <ProductionQuantityLimitsIcon className="visit_icon cartIcone" />
      ),
    },
    {
      key: 3,
      titleValue: "Total Made",
      timeValue: "$200k",
      IconeValue: <BusinessCenterIcon className="visit_icon busn" />,
    },
    {
      key: 4,
      titleValue: "Orders Completed",
      timeValue: "98,771",
      IconeValue: <SubscriptionsIcon color="error" className="visit_icon" />,
    },
  ];

  const ValuesMapping = Values.map((val) => (
    <div className="Total_visits" key={val.key}>
      {val.IconeValue}
      <div className="ttt">
        <p>{val.timeValue}</p>
        <span>{val.timeValue}</span>
      </div>
    </div>
  ));
  return (
    <div className="Top_Products" data-aos="fade-up">
      <div className="values">{ValuesMapping}</div>

      <div className="top_product_items">
        <h1>Top Products</h1>
        <div className="top_product_item">
          <div className="product_Detail">
            <img
              src="https://randomuser.me/api/portraits/men/43.jpg"
              alt="sda"
              className="imgProduct"
            />
            <div className="ttpp">
              <p>Samsung S20 128 GB</p>
              <span>Pink - 50 orders</span>
            </div>
          </div>
          <div className="contentProducts">
            <div className="qwer">
              <p>Inventory</p>
              <span>700</span>
            </div>
            <div className="qwer">
              <p>Sale</p>
              <span>$1,000.60</span>
            </div>
            <div className="qwer">
              <p>Price</p>
              <span>$1,300.92</span>
            </div>
            <div className="qwer">
              <p>Today</p>
              <span>$17,000.92</span>
            </div>
          </div>
        </div>
        <div className="top_product_item">
          <div className="product_Detail">
            <img
              src="https://randomuser.me/api/portraits/women/43.jpg"
              alt="sda"
              className="imgProduct"
            />
            <div className="ttpp">
              <p>Samsung S21 256 GB</p>
              <span>Black - 25 orders</span>
            </div>
          </div>
          <div className="contentProducts">
            <div className="qwer">
              <p>Inventory</p>
              <span>200</span>
            </div>
            <div className="qwer">
              <p>Sale</p>
              <span>$1,200.60</span>
            </div>
            <div className="qwer">
              <p></p>
              <span></span>
            </div>
            <div className="qwer">
              <p>Price</p>
              <span>$1,500.92</span>
            </div>
            <div className="qwer">
              <p>Today</p>
              <span>$12,000.82</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
