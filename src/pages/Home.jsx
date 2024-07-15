import React from 'react'
import Applayout from '../components/layout/Applayout';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      <Box bgcolor={"rgba(0,0,0,0.1)"} height={"100%"}>

        <Typography variant='h5' p={'2rem'} textAlign={"center"}>
          select a friend to chat
        </Typography>
      </Box >
    </>

  )
}
export default Applayout()(Home);
