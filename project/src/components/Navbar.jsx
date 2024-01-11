import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar({ hotels, setFilteredHotels, isSearch = true }) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    const filteredHotels = hotels.filter(
      (hotel) =>
        hotel.address.toLowerCase().includes(searchValue.toLowerCase()) ||
        hotel.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    // console.log(filteredHotels);
    setFilteredHotels(filteredHotels);
  };

  return (
    <>
      <AppBar position="static" color="inherit">
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                cursor: "pointer",
              }}
              variant="h6"
              fontWeight={"bold"}
              onClick={() => navigate("/")}
            >
              Bookstay
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              {isSearch && (
                <TextField
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  variant="outlined"
                  label="Search"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <IconButton position="start" onClick={handleSearch}>
                        <SearchIcon />
                      </IconButton>
                    ),
                  }}
                />
              )}
              <Typography
                sx={{
                  cursor: "pointer",
                }}
                variant="h6"
                fontWeight={"bold"}
                onClick={() => navigate("/")}
              >
                Home
              </Typography>
              <IconButton>
                <Avatar src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
