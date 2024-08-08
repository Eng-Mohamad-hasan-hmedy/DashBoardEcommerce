import "./header.css";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import GridViewIcon from "@mui/icons-material/GridView";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { ToggleButton } from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
const Header = () => {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  const [active, setActive] = useState(false);
  return (
    <div className={active ? "main_header active" : "main_header"}>
      <div className="container">
        <ToggleButton
          value="left"
          aria-label="left aligned"
          className="toggle"
          onClick={() => setActive(!active)}
        >
          <FormatAlignLeftIcon />
        </ToggleButton>
        <div className="logo" data-aos="fade-down">
          <div className="divone">
            <div className="divTow"></div>
          </div>
          <h2>PixelShop</h2>
        </div>
        <ul className="list">
          <li data-aos="fade-left">
            <SpaceDashboardIcon className="icone_title" />
            <a href="#" className="title">
              Dashboard
            </a>
          </li>
          <li data-aos="fade-right">
            <GridViewIcon className="icone_title icone" />
            <a href="#">Products</a>
          </li>
          <li data-aos="fade-left">
            <PeopleAltIcon className="icone_title icone" />
            <a href="#">Customers</a>
          </li>
          <li data-aos="fade-right">
            <ProductionQuantityLimitsIcon className="icone_title icone" />
            <a href="#">Orders</a>
          </li>
          <li data-aos="fade-left">
            <LocalShippingIcon className="icone_title icone" />
            <a href="#">Shipments</a>
          </li>
          <li data-aos="fade-right">
            <ReceiptLongIcon className="icone_title icone" />
            <a href="#">Transactions</a>
          </li>
          <li data-aos="fade-left">
            <SettingsIcon className="icone_title icone" />
            <a href="#">Settings</a>
          </li>

          <li data-aos="fade-right">
            <LogoutIcon className="icone_title icone" />
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
