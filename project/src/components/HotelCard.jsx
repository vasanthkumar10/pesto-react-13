import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import React from "react";
import { useNavigate } from "react-router-dom";

function HotelCard({ hotel }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ cursor: "pointer" }}
      onClick={() => navigate(`/hotel/${hotel.slug}`)}
    >
      <CardMedia
        sx={{ height: 300 }}
        alt="hotel-img"
        title={hotel.name}
        component={"img"}
        image={hotel.thumbnail}
      />
      <CardContent>
        <Typography fontWeight={"bold"} component="h5">
          {hotel.address}
        </Typography>
        <Typography fontWeight={"bold"} component="div">
          ${hotel.pricePerNight} per night
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HotelCard;
