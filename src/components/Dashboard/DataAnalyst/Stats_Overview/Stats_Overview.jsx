import { LinearProgress } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
const Stats_Overview = () => {
  return (
    <div className="Stats_Overview" data-aos="fade-up">
      <div className="customersInfo">
        <div className="customers_contente">
          <h1>Stats Overview </h1>
          <p>Information about store visits</p>
        </div>
        <FilterAltIcon className="customer_icone" />
      </div>
      <div className="genderInfo">
        <div className="women">
          <p>Women</p>
          <LinearProgress
            variant="determinate"
            value={63}
            color="warning"
            sx={{ color: "#FFC029 !important" }}
          />

          <p style={{ width: "100%", textAlign: "right" }}>63%</p>
        </div>
        <div className="women">
          <p>Men</p>
          <LinearProgress variant="determinate" value={88} color="primary" />

          <p style={{ width: "100%", textAlign: "right" }}>88%</p>
        </div>
        <div className="women">
          <p>Kids</p>
          <LinearProgress variant="determinate" value={38} color="success" />

          <p style={{ width: "100%", textAlign: "right" }}>38%</p>
        </div>
      </div>
    </div>
  );
};

export default Stats_Overview;
