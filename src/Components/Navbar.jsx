import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/Constants';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{ position: "sticky", background: "#000", justifyContent: "space-between" }}>

        <Link to="/" style={{ display: "flex", alignItems: "center"}}>
          <img src={logo} alt="logo" height={45} sx={{backgroundColor: "#ff7043" }}/>
          <Typography variant="h4" color="#ff7043">
            Chitram
          </Typography>
        </Link>
        <SearchBar />
      </Stack>
    </div>
  )
}

export default Navbar
