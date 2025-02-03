import {
  AppBar,
  Container,
  MenuItem,
  Toolbar,
  Typography,
  Select,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const Header = () => {
  const { currency, setCurrency } = CryptoState();

  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Link to="/">
            <Typography variant="h3" className="title">
              Crypto Tracker
            </Typography>
          </Link>
          <Select
            variant="outlined"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            style={{
              color: "white",
              border: " 3px solid gold",
              width: "100px",
              marginLeft: "40%",
              height: "40px",
            }}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
          <button
            style={{
              border: " 3px solid gold",
              width: "100px",
              backgroundColor: "transparent",
              height: "40px",
              margin: "30px",
            }}
          >
            <Link to="/news" style={{ color: "white", fontSize: "1.2rem" }}>
              News
            </Link>
          </button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
