// @mui material components
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";

function Display() {
  return (
    <Card sx={{ height: "85vh", background:"#D5CEA3", width:"50vh", justifyContent:"space-between" }}>
        <SoftTypography
          variant="robot"
          color="text"
          fontWeight="bold"
          textTransform="uppercase"
      >
        Aqui vai ficar o Display de músicas
      </SoftTypography>
    </Card>
  );
}

export default Display;
