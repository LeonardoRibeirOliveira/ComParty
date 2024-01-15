import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SoftTypography from "components/SoftTypography";
import Button from '@mui/material/Button';


function RoomList() {
  const rooms = [
    { id: 1, name: "Sertanejo", descricao: "Sertanejo mais bão que tem!", img: require(".//imgs/sertanejo.jpg").default },
{ id: 2, name: "Rock", descricao: "Rockzao paulera.", img: require(".//imgs/rock.jpg").default },
{ id: 3, name: "MPB", descricao: "Aquele MPB sem igual.", img: require(".//imgs/mpb.png").default },
{ id: 4, name: "Pop", descricao: "Bora dancar, galera!", img: require(".//imgs/pop-music.jpg").default },
{ id: 5, name: "Eletrofunk", descricao: "Batidão tuts tuts tuts tuts!", img: require(".//imgs/eletro.jpg").default },
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
            <Grid item key={room.id} xs={20}>
              <Button 
                variant="contained"
                color="dark"
                style={{ marginBottom: '16px', height: '100%', width: '100%'}}
              >
                <Card>
                  {/* Substitua 'url_da_sua_imagem' pela URL real da sua imagem */}
                  <CardMedia
                    component="img"
                    height="100%"
                    image={room.img}
                    alt={room.name}
                  />
                  <CardContent>
                    <Typography
                      component={Link}
                      to={`/room/${room.id}`}
                      variant="button"
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
