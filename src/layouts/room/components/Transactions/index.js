// @mui material components
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";


function Transactions() {
  return (
    <Card sx={{ height: "85vh", background:"#D5CEA3", width:"110vh" }}>
        <SoftBox >  
          <SoftTypography
            variant="robot"
            fontWeight="bold"
          >
            Aqui vai ficar o texto do chat
          </SoftTypography>
          <SoftInput/>
        </SoftBox>
    </Card>
  );
}

export default Transactions;
