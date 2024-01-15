import React from 'react';
import { Link } from 'react-router-dom';
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SoftTypography from "components/SoftTypography";
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

import eletro from "./imgs/eletro.jpg";
import mpb from "./imgs/mpb.png";
import pop from "./imgs/pop-music.jpg";
import rock from "./imgs/rock.jpg";
import sertanejo from "./imgs/sertanejo.jpg";


function RoomList() {
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
      <SoftBox>
        <Button
          variant="contained"
          color="dark"
          style={{ marginBottom: '16px' }}
        >
          Adicionar Sala
        </Button>
  
        <Grid container spacing={3} style={{ marginLeft: '-3px' }}> {/* Adiciona um espaçamento à esquerda */}
          {rooms.map((room) => (
            <Grid item key={room.id} xs={12} md={6} lg={4}>
              <Button
                component={Link}
                to={`/room/${room.id}`}
                variant="contained"
                color="dark"
                style={{ marginBottom: '16px', height: '100%', width: '100%'}}
              >
                <Card>
                  {room.img}
                  <CardMedia
                    alt={room.name}
                  />
                  <CardContent>
                    <Typography
                      color="info"
                      fontWeight="medium"
                      textGradient
                    >
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
