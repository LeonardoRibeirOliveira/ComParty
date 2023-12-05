// @mui material components
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Billing page components
import Transaction from "layouts/room/components/Transaction";

function Transactions() {
  return (
    <Card sx={{ height: "100%" }}>

      <SoftBox pt={3} pb={2} px={2}>
        <SoftBox mb={2}>
          <SoftTypography
            variant="robot"
            color="text"
            fontWeight="bold"
            textTransform="uppercase"
          >
            Aqui vai ficar o texto do chat
          </SoftTypography>
        </SoftBox>

        <SoftBox mt={1} mb={2}>
          <SoftTypography
            variant="caption"
            color="text"
            fontWeight="bold"
            align-itens="center"
          >
            Aqui vai ser o teclado do chat
          
          </SoftTypography>
        </SoftBox>
        
      </SoftBox>
    </Card>
  );
}

export default Transactions;
