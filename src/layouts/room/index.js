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
import Display from "layouts/room/components/Display";

function Room() {
  return (
    <DashboardLayout>
      <SoftBox >
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Transactions />
            </Grid>
            <Grid item xs={12} md={5}>
              <Display />
            </Grid>
          </Grid>
        </SoftBox>

    </DashboardLayout>
  );
}

export default Room;
