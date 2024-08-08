import DataAnalyst from "./DataAnalyst/DataAnalyst";
import TopSideBar from "./TopSideBar/TopSideBar";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <div className="mainDashboard">
      <div className="conatiner">
        <div className="content_dashboard">
          {/*------------- Top SideBar dashboard start -------------*/}
          <TopSideBar />

          {/*------------- Top SideBa dashboardr End -------------*/}

          {/*------------- Data analyst start -------------*/}
          <DataAnalyst />
          {/*------------- Data analyst End -------------*/}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
