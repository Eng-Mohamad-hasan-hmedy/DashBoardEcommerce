import { Box, CircularProgress, Typography } from "@mui/material";
import { chartItems, progressData } from "../ArrayData/ArrayData";

export const progressItemMapping = progressData.map((pro) => (
  <div className="progress_item" key={pro.key}>
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        sx={{
          width: "90px !important",
          marginRight: "50px",
          color: pro.colorValue,
        }}
        variant="determinate"
        value={pro.valueSet}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "20px", color: pro.colorValue }}>
          {`${pro.valueSet}%`}
        </Typography>
      </Box>
    </Box>
    <p>{pro.textValue}</p>
  </div>
));

export const ChartMapping = chartItems.map((chart) => (
  <div key={chart.key} className="chart_info">
    {chart.key === 1 ? (
      <div className={`one onemedia ${chart.classChart}`}></div>
    ) : (
      <div className="chartLight">
        <div className={`light ${chart.classChartLight}`}></div>
        <div className={`one ${chart.classChart}`}></div>
      </div>
    )}
    <p>{chart.month}</p>
  </div>
));

const Helpers = () => {
  return <></>;
};

export default Helpers;
