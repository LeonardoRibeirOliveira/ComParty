// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

//Components
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import Display from "layouts/room/components/Display";
import Chat from "./components/Chat";
import inicitalChat from"./components/Chat/chatbase";
import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

function Room() {
  const { id } = useParams();

  localStorage.setItem('messages', JSON.stringify(inicitalChat));

  return (
    <DashboardLayout>
      <SoftBox >
          <Grid container spacing={3}>
            <Grid item  md={7}>
              <Chat/>
            </Grid>
            <Grid item  md={5}>
              <Display roomId={id}/>
            </Grid>
          </Grid>
        </SoftBox>

    </DashboardLayout>
  );
}

Room.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Room;
