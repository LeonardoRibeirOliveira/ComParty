import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <Card>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          
          account
        </SoftTypography>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              
              
              notificaçao
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox mt={3}>
          <SoftTypography
            variant="caption"
            fontWeight="bold"
            color="text"
            textTransform="uppercase"
          >
            selenciar
          </SoftTypography>
        </SoftBox>
        <SoftBox display="flex" py={1} mb={0.25}>
          <SoftBox mt={0.25}>
            <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} />
          </SoftBox>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              
              
              sim
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default PlatformSettings;
