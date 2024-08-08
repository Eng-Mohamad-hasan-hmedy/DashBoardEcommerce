import { useEffect } from "react";
import Notification from "./Notification/Notification";
import "./topsidebar.css";
import Aos from "aos";
import "aos/dist/aos.css";
const TopSideBar = () => {
    useEffect(() => {
      Aos.init({ duration:800 });
    }, []);
  return (
    <div className="top_side" data-aos='fade-up'>
      <h1>Overview</h1>
      <input type="search" className="searchBar" placeholder="🔍 Search..." />
      <Notification />
    </div>
  );
};

export default TopSideBar;
