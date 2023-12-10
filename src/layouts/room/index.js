// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Billing page components
import Transactions from "layouts/room/components/Transactions";

function Room() {
  return (
    <DashboardLayout>
      <SoftBox >
        <Grid>
          <Transactions />
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Room;
