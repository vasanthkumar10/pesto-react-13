import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import React from "react";

function HotelCard({ hotel }) {
  return (
    <Card sx={{ cursor: "pointer" }}>
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
