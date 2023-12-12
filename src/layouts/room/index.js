// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

//Components
import SoftBox from "components/SoftBox";


import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Display from "layouts/room/components/Display";
import Chat from "./components/Chat";
import inicitalChat from"./components/Chat/chatbase";

function Room() {

  localStorage.setItem('messages', JSON.stringify(inicitalChat));

  return (
    <DashboardLayout>
      <SoftBox >
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Chat/>
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
