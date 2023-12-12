// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <PlatformSettings />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="desciçao "
              description="sou o Gabriel e curto musicas"
              info={{
                fullName: "Gabriel b. Garcia",
                mobile: "(62) xxxxx-xxxx",
                email: "gbggames@mail.com",
                location: "Goiânia",
              }}
              social={[
                {
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  icon: <InstagramIcon />,
                  color: "instagram",
                },

              ]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
          <Grid item xs={12} xl={4}>
            <ProfilesList title="amigos" profiles={profilesListData} />
          </Grid>
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Overview;
