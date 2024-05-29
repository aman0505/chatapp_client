import React from 'react'
import { Grid, Skeleton, Stack } from "@mui/material"

export const Layoutloader = () => {
  return (

    <Grid container height={"calc(100vh - 4rem)"} >
      <Grid item sm={4} md={3} sx={{
        display: {
          xs: "none",
          sm: "block",
          padding: "4px"
        }
      }} height={"100%"} >
        <Skeleton variant='rectangular' height={"100vh"} />
      </Grid>
      <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} >
        <Skeleton variant='rectangular' />
        <Stack spacing={"1rem"}>
          {
            Array.from({ length: 100 }).map((_, index) => (
              <Skeleton variant='rounded' height={"5rem"} />))
          }
        </Stack>

      </Grid>
      <Grid item md={4} lg={3} height={"100%"} sx={{
        display: {
          xs: "none",
          md: "block",
          padding: "4px"


        }
      }}  >
        <Skeleton margin="1px" variant='rectangular' height={"100vh"} />

      </Grid>

    </Grid>
  )
}