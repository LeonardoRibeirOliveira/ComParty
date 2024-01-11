// react-router components
import { Routes, Route, Navigate } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Soft UI Dashboard React examples
import Sidenav from "examples/Sidenav";

// Soft UI Dashboard React themes
import theme from "assets/theme";

// Soft UI Dashboard React routes
import routes from "routes";

// Images
import LogoIcon from "imgs/Logo.png";

export default function App() {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });


  const code = new URLSearchParams(window.location.search).get("code")

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Sidenav
          brand={LogoIcon}
          brandName="ComParty"
          routes={routes}
        />
     <Routes>
        {getRoutes(routes)}
        {code !== null ? (
          <Route path="*" element={<Navigate to="/Room" />} />
        ) : (
          <Route path="*" element={<Navigate to="/Home" />} />
        )}
      </Routes>
    </ThemeProvider>
  );
}
