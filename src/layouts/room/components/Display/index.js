// @mui material components
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import Login from "./Login";

function Display() {
  return (
    <Card sx={{ height: "85vh", background:"#D5CEA3", width:"45vh", justifyContent:"space-between", marginLeft: 'auto' }}>
      <SoftTypography
        variant="robot"
        color="text"
        fontWeight="bold"
        textTransform="uppercase"
      >
        Display de músicas
      </SoftTypography>
      <Login />
    </Card>
  );
}

export default Display;

