import React from 'react'
import AdminLayout from '../../components/layout/Admin/AdminLayout'
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Group as GroupIcon,
  Message as MessageIcon,
  Notifications as NotificationIcon,
  Person as PersonIcon,
  Title
} from '@mui/icons-material'
import moment from 'moment'
import { Curvebutton, SearchField } from '../../components/style/StyleComponents'
import { DoughnutChart, LineChart } from '../../components/specific/Chart'

const AdminDashboard = () => {

  const Appbar = <Paper elevation={3} sx={{
    padding: "2rem",
    margin: "2rem 0",
    borderRadius: "1rem"
  }}>
    <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} >
      <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
      <SearchField placeholder='search' />
      <Curvebutton>search</Curvebutton>

      <Box flexGrow={1} />
      <Typography sx={{
        display: {
          xs: "none",
          lg: "block"
        }
      }}>
        {moment().format("MMMM D YYYY ")}
      </Typography>

      <NotificationIcon />
    </Stack>
  </Paper>

  const wigets = <Stack direction={{
    xs: "column",
    sm: "row"

  }}
    spacing="2rem"
    justifyContent="space-between"
    alignItems="center"
    margin={"2rem 0"}
  >
    <Widet title={"Users"} value={35} icon={<PersonIcon />} />
    <Widet title={"chats"} value={3} icon={<GroupIcon />} />

    <Widet title={"Messages"} value={45} icon={<MessageIcon />} />

  </Stack>
  return (
    <AdminLayout>
      <Container component={"main"}>
        {
          Appbar
        }
        <Stack direction={"row"} spacing={"2rem"} flexWrap={"wrap"}>
          <Paper elevation={3} sx={{
            padding: "2rem 3.5rem",
            borderRadius: "1rem",
            width: "100%",
            maxWidth: "45rem",
            
          }} >
            <Typography variant='h5'>Last Messages</Typography>
            <LineChart value={[121, 4132, 452, 3, 44, 56, 5673, 2, 23, 56, 56,]} />

          </Paper>
          <Paper elevation={3} sx={{
            padding: "1rem",
            borderRadius: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: {
              xs: "100%", sm: "50%"
            },
            position: "relative",
            width: "100%",
            maxWidth: "25rem",
            height: "25rem"
          }}>
            <DoughnutChart labelsdata={["single chat","group chat"]}  value={[23,66]}/>

            <Stack position={"absolute"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={"0.5rem"}
              width={"100%"}
              height={"100%"}
            >
              <GroupIcon />
              <Typography>
                Vs
              </Typography>
              <PersonIcon />
            </Stack>
          </Paper>
        </Stack>
        {wigets}
      </Container>
    </AdminLayout>
  )
}

const Widet = ({ title, value, icon }) => {
  return <Paper sx={{
    padding: "2rem",
    margin: "2rem 0",
    borderRadius: "1rem",
    width: "20rem"
  }}>
    <Stack alignContent={"center"} spacing={"1rem"}>
      <Typography sx={{
        color: "rgba(0,0,0,0.7)",
        borderRadius: "50%",
        border: "5px solid rgba(0,0,0,0.7)",
        width: "5rem",
        height: "5rem",

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        {value}
      </Typography>
      <Stack>
        {icon}
        <Typography>
          {title}
        </Typography>
      </Stack>

    </Stack>
  </Paper>
}

export default AdminDashboard