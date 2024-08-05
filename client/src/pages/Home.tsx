import * as React from "react";
import { Box, Button, Grid, PaletteMode, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar";
import getLPTheme from "../utils/getLPTheme";
import Layout from "./Layout";
import bg from "../assets/bg.jpg";
import logo from "../assets/eksubot.png";
import logo2 from "../assets/logo.png";
import { Link } from "react-router-dom";
import Answer from "../components/Answer";
import { getUser } from "../utils/auth";

interface ToggleCustomThemeProps {
  showCustomTheme: Boolean;
  toggleCustomTheme: () => void;
}

export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const LPtheme = createTheme(getLPTheme(mode));
  const { user } = getUser()!;

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Layout mode={mode}>
      <Box
        position="fixed"
        sx={{
          inset: 0,
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPositionY: "50%",
          backgroundPositionX: "30%",
          px: { xs: 2, md: 5 },
          overflow: "auto",
        }}
      >
        <Box display="flex" sx={{ justifyContent: "flex-end", gap: 2, alignItems: "center" }}>
          <img
            src={logo2}
            alt="MYHEALTHBOT"
            style={{
              display: "block",
              marginTop: "10px",
              height: "50px",
            }}
          />
          <img
            src={logo}
            alt="MYHEALTHBOT"
            style={{
              display: "block",
              marginTop: "10px",
              height: "35px",
            }}
          />
        </Box>
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "45px", md: "60px" },
            mt: { xs: 8, md: 10 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Welcome {user.first_name} {user.last_name}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "32px", md: "42px" },
            maxWidth: { xs: "400px", md: "600px" },
            textAlign: { xs: "center", md: "left" },
            mx: { xs: "auto", md: "initial" },
          }}
        >
          To eksu chatbot
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontSize: { xs: "32px", md: "42px" }, textAlign: { xs: "center", md: "left" } }}
        >
          I am ready to help
        </Typography>
        <Button
          LinkComponent={Link}
          to="chat"
          size="large"
          variant="outlined"
          sx={{
            borderRadius: 2,
            borderWidth: "2px",
            mt: 3,
            width: "200px",
            maxWidth: "100%",
            display: "block",
            textAlign: "center",
            mx: { xs: "auto", md: "initial" },
            color: "#fff",
            outlineColor: "#fff",
            borderColor: "#fff",
          }}
        >
          Get Started
        </Button>
      </Box>
    </Layout>
  );
}
