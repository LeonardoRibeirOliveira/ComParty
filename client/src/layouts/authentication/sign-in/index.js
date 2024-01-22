import { useState } from "react";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import curved9 from "assets/images/curved-images/curved14.jpg";

import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  

  return (
    <CoverLayout
      title="Bem vindo de volta!"
      description="INSIRA SEU NOME PARA CONTINUAR"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Nickname
            </SoftTypography>
          </SoftBox>
          <SoftInput type="email" placeholder="Nickname" />
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          {/* Utilize o componente Link para direcionar para a rota desejada */}
          <Link to="/Home">
            <SoftButton variant="gradient" color="info" fullWidth>
              sign in
            </SoftButton>
          </Link>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
