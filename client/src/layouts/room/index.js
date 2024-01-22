// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

//Components
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import routes from "routes";
import LogoIcon from "imgs/Logo.png";
import Sidenav from "examples/Sidenav";

import Display from "layouts/room/components/Display";
import Chat from "./components/Chat";
import inicitalChat from"./components/Chat/chatbase";
import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

function Room() {
  const { id} = useParams();
  const rooms = [
    { id: 1, name: "Sertanejo"},
    { id: 2, name: "Rock"},
    { id: 3, name: "MPB"},
    { id: 4, name: "Pop"},
    { id: 5, name: "Eletrofunk"}
  ];
  rooms.forEach(el =>{
    if(el.id == id){
      localStorage.setItem('nameRoom', el.name);
    }
  });

  localStorage.setItem('messages', JSON.stringify(inicitalChat));

  return (
    <DashboardLayout>
      <Sidenav
            brand={LogoIcon}
            brandName="ComParty"
            routes={routes}
          />
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
