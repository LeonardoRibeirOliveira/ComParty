import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Importe o useHistory
import routes from "routes";
import LogoIcon from "imgs/Logo.png";
import Sidenav from "examples/Sidenav";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SoftTypography from "components/SoftTypography";
import { Grid, Card, CardMedia, CardContent, Typography, Button, TextField } from '@mui/material';
import { useState } from "react";
import eletro from "./imgs/eletro.jpg";
import mpb from "./imgs/mpb.png";
import pop from "./imgs/pop-music.jpg";
import rock from "./imgs/rock.jpg";
import sertanejo from "./imgs/sertanejo.jpg";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function RoomList() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = (selectedRoom) => {
    const selectedUsername = username || "Anonymous"; 
    socket.emit("join_room", { room: selectedRoom.id, username: selectedUsername, roomName: selectedRoom.name });
  };

  const [yourName, setYourName] = useState("");

  const rooms = [
    { id: 1, name: "Sertanejo", descricao: "Sertanejo mais bão que tem!", img: <img width="300" height="300" src={sertanejo}/> },
    { id: 2, name: "Rock", descricao: "Rockzao paulera.", img: <img width="300" height="300" src={rock}/>},
    { id: 3, name: "MPB", descricao: "Aquele MPB sem igual.", img: <img width="300" height="300" src={mpb}/> },
    { id: 4, name: "Pop", descricao: "Bora dancar, galera!", img: <img width="300" height="300" src={pop}/> },
    { id: 5, name: "Eletrofunk", descricao: "Batidão tuts tuts tuts tuts!", img: <img width="300" height="300" src={eletro}/> },
    // Adicione mais salas conforme necessário
  ];

  return (
    <DashboardLayout>
      <Sidenav
        brand={LogoIcon}
        brandName="ComParty"
        routes={routes}
      />
      <SoftBox>
        <TextField
          placeholder="SEU NICKNAME"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          variant="outlined"
          fullWidth
          margin="normal"
          style={{ display: 'flex', alignItems: 'center', maxWidth: '450px', display: 'flex' }}
        />

        <Grid container spacing={3} style={{ marginLeft: '-3px' }}>
          {rooms.map((room) => (
            <Grid item key={room.id} xs={12} md={6} lg={4}>
              <Button
                onClick={() => joinRoom(room)}
                component={Link}
                to={`/room/${room.id}`}
                variant="contained"
                color="dark"
                style={{ marginBottom: '16px', height: '100%', width: '100%'}}
              >
                <Card>
                  {room.img}
                  <CardMedia alt={room.name} />
                  <CardContent>
                    <Typography color="info" fontWeight="medium" textGradient>
                      <h3>{room.name}</h3>
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {room.descricao}
                    </Typography>
                  </CardContent>
                </Card>
              </Button>
            </Grid>
          ))}
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
  
}

export default RoomList;
