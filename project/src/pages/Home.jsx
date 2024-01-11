import { Container, Grid, Pagination } from "@mui/material";
import React, { useState } from "react";

import HotelCard from "../components/HotelCard";
import Navbar from "../components/Navbar";
import { getHotels } from "../api/request";
import { useQuery } from "react-query";

function Home() {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [page, setPage] = useState(1);
  const HOTELS_PER_PAGE = 5;

  const fetchHotels = async () => {
    const { data } = await getHotels();
    setHotels(data);
    setFilteredHotels(data);
    return data;
  };

  const { isLoading } = useQuery("hotels", fetchHotels);
  const startIndex = (page - 1) * HOTELS_PER_PAGE;
  const endIndex = page * HOTELS_PER_PAGE - 1;
  const paginatedHotels = filteredHotels.slice(startIndex, endIndex + 1);
  const totalHotels = filteredHotels.length;
  const totalPages = Math.ceil(totalHotels / HOTELS_PER_PAGE);

  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <>
      <Navbar hotels={hotels} setFilteredHotels={setFilteredHotels} />
      <Container maxWidth="lg">
        <Grid container spacing={3} marginTop={2}>
          {paginatedHotels.length > 0 &&
            paginatedHotels.map((hotel) => (
              <Grid item key={hotel.id} xs={12} sm={6} md={4} lg={4}>
                <HotelCard hotel={hotel} />
              </Grid>
            ))}
        </Grid>
        <Pagination
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
          onChange={(e, value) => setPage(value)}
          page={page}
          count={totalPages}
        />
      </Container>
    </>
  );
}

export default Home;

// Pagination
// total hotels = 12
// limit = 5
// page number = 1
// total pages = total hotels / limit = Math.ceil(12/ 5) = 3 pages

// 1 -> 0 to 4
// 2 -> 5 to 9
// 3 -> 10 to 11
// console.log('start', (page - 1) * limit)
// console.log('end', page * limit - 1)
