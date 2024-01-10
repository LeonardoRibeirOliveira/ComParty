// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Projects from "layouts/dashboard/components/Projects";


// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";


function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid >
            <Grid >
              <ReportsBarChart
                title="Músicas mais ouvidas"
                chart={chart}
                items={items}
              />
            </Grid>

          </Grid>
        </SoftBox>
        <Grid container spacing={120}>
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Dashboard;
