import { React, lazy, Suspense } from 'react'
import { useNavigate } from "react-router-dom"
import { orange } from '../../constant/color'
import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material"


import {
  Menu as MenuIcon,
  Search, Add as AddIcon
  , Group as GroupIcon,
  Logout as Logouticon,
  Notifications as NotificationIcon
} from "@mui/icons-material"

const SearchDialog = lazy(() => import("../specific/Search"))
const NotificatioDialog = lazy(() => import("../specific/Notification"))
const NewGroupsDialog = lazy(() => import("../specific/NewGroups"))

const Header = () => {
  const navigate = useNavigate()

  const handlemobile = () => {
    console.log("mobile")
  }
  const opeansearchdialog = () => {
    issearch = true
    console.log("opeansearchdialog")
  }
  const opennewgroup = () => {
    console.log("opennewgroup")
  }
  const navigateTOGroup = () => {
    navigate("/groups")
  }
  const logout = () => {
    console.log("logout")
  }


  let issearch = false
  const isNewgroupdialog = false
  const isnotification = false
  return (
    <>
      <Box sx={{ flexFlow: 1 }} height={"4rem"}>
        <AppBar position='static' sx={
          {
            bgcolor: orange
          }
        }>

          <Toolbar>
            <Typography variant='h6' sx={{
              display: {
                xs: "none",
                sm: "block"
              }
            }}>
              Chatapp
            </Typography>
            <Box sx={{
              display: {
                xs: "block",
                sm: "none"
              }
            }} >
              <IconButton color='inherit' onClick={handlemobile}>

                <MenuIcon></MenuIcon>
              </IconButton>

            </Box >

            <Box sx={{
              flexGrow: 1
            }} />


            <Box>

              <IconBnt title="search" func={opeansearchdialog} icon={<Search />} />

              <IconBnt title="New group" func={opennewgroup} icon={<AddIcon />} />
              <IconBnt title="manage Group" func={navigateTOGroup} icon={<GroupIcon />} />
              <IconBnt title="logout" func={logout} icon={<Logouticon />} />

              <IconBnt title="notification" func={NotificationIcon} icon={<NotificationIcon />} />

            </Box>

          </Toolbar>
        </AppBar>
      </Box>
      {
        issearch && (
          <Suspense fallback={<Backdrop open />}>
            <SearchDialog />
          </Suspense>
        )
      }
      {
        isnotification && (
          <Suspense fallback={<Backdrop open />}>
            <NotificatioDialog />
          </Suspense>
        )
      }

      {
        isNewgroupdialog && (
          <Suspense fallback={<Backdrop open />}>
            <NewGroupsDialog />
          </Suspense>
        )
      }

    </>
  )
}

const IconBnt = ({ title, func, icon }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={func} >

        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default Header