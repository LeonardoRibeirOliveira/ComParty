// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
//Components
import { Link } from "react-router-dom";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SoftTypography from "components/SoftTypography";

function RoomList() {

  const rooms = [
    { id: 1, name: "Sertanejo" },
    { id: 2, name: "Rock" },
    { id: 3, name: "MPB" },
    { id: 4, name: "Pop" },
    { id: 5, name: "Eletrofunk" },
    // Adicione mais salas conforme necessário
  ];

  return (
    <DashboardLayout>
      <SoftBox>
        <Grid container spacing={3}>
          {rooms.map((room) => (
            <Grid item key={room.id} md={4}>
              
              <SoftTypography
              component={Link}
              to={`/room/${room.id}`}  // Adicione o id da sala à URL
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              <h3>{room.name}</h3>
            </SoftTypography>
            </Grid>
          ))}
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default RoomList;