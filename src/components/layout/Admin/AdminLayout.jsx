import {
    Close as CloseIcon,
    Menu as MenuIcon,
    Dashboard as DashboardIcon,
    ManageAccounts as ManageAccountsIcon,
    Group as GroupIcon,
    Message as MessageIcon,
    ExitToApp as ExitToAppIcon
} from '@mui/icons-material'
import { Box, Container, Drawer, Grid, IconButton, Stack, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, Link as LinkComponents, Navigate } from 'react-router-dom'
import { Link } from '../../style/StyleComponents'






const Sidebar = ({ w = "100%" }) => {


    const Link = styled(LinkComponents)`
    text-decoration:none;
    border-radius:2rem;

    color:black;
    padding:1rem 2rem;
    &:hover{
     background-color:rgba(0,0,0,0.1);
    }`

    const logouHandler = () => {
        console.log("logout")
    }

    const admintabs = [{
        name: "DashBoard",
        path: "/admin/dashboard",
        icon: <DashboardIcon />
    },

    {
        name: "users",
        path: "/admin/users-managment",
        icon: <ManageAccountsIcon />
    }, {
        name: "chats",
        path: "/admin/chats-managment",
        icon: <GroupIcon />
    }, {
        name: "messages",
        path: "/admin/messages",
        icon: <MessageIcon />
    },


    ]



    const location = useLocation()
    return <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"}>
        <Typography variant='h5' textTransform={"uppercase"}>
            Admin
        </Typography>
        <Stack spacing={"1rem"} >
            {
                admintabs.map((tab) => {
                    return <Link key={tab.path} to={tab.path} sx={
                        location.pathname === tab.path && {
                            bgcolor: "rgba(0,0,0,0.9)",
                            color: "white",
                            ":hover": {
                                bgcolor: "rgba(0,0,0,0.8)"
                            }

                        }

                    }>

                        <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                            {tab.icon}
                            <Typography>
                                {tab.name}
                            </Typography>

                        </Stack>
                    </Link>
                })
            }




            <Link onClick={logouHandler} >

                <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                    <ExitToAppIcon />
                    <Typography>
                        logout
                    </Typography>

                </Stack>
            </Link>

        </Stack>
    </Stack>
}


const isadmin=true
const AdminLayout = ({ children }) => {


    const [ismobile, setIsmobile] = useState(false)






    const handleMobile = () => {
        setIsmobile(!ismobile)
    }
    const handleClose = () => {
        setIsmobile(false)
    }
if(!isadmin){
    return <Navigate to={"/admin"} />
}

    return (

        <>
            <Grid container minHeight={"100vh"}>

                <Box sx={{
                    display: {
                        xs: "block",
                        md: "none"
                    },
                    position: "fixed",
                    right: "1rem",
                    top: "1rem"
                }}>
                    <IconButton onClick={handleMobile}>
                        {
                            ismobile ? <CloseIcon /> : <MenuIcon />
                        }
                    </IconButton>
                </Box>



                <Grid item md={4} lg={3} sx={{
                    display: {
                        xs: "none", md: "block"
                    }
                }}>
                    <Sidebar />
                </Grid>


                <Grid item xs={12} md={8} lg={9} sx={{
                    bgcolor: "#f5f5f5"
                }}>
                    {children}
                </Grid>

                <Drawer open={ismobile} onClose={handleClose}>
                    <Sidebar w={"50vw"} />
                </Drawer>
            </Grid>
        </>
    )
}

export default AdminLayout