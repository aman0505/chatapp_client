import React, { memo, useState, useEffect, lazy, Suspense } from 'react'
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { Backdrop, Box, Button, Drawer, Grid, IconButton, Menu, Stack, TextField, Tooltip, Typography } from "@mui/material"
import {
  Add as AddIcon, Delete as DeleteICon,
  KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon, Edit as EditIcon, Done as DoneIcon
} from "@mui/icons-material"
import { mateblack } from "../constant/color"
import Avatarcard from "../components/shared/Avtarcard"
import { samplechat, sampleuser } from "../constant/sampledata"
import Useritem from '../components/shared/Useritem'
import { Link as LinkUrl } from "../components/style/StyleComponents"
const Group = () => {

  const [ismobileMenu, setIsmobileMenu] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const chatId = useSearchParams()[0].get("group")
  const [groupname, setGroupName] = useState("")
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState()
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false)
  const ConfirmDeleteDialog = lazy(() => import("../components/dialogs/ConfirmDeleteDialog"))

  const AddMemberDialog = lazy(() => import("../components/dialogs/AddMember"))


  const isaddmemeber = false
  const navigate = useNavigate()

  const handleMobile = () => {
    setIsmobileMenu((prev) => !prev)
  }
  const navigateback = () => {
    navigate("/")
  }
  const openconfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true)
  }

  const closeconfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false)
  }

  const openAddMemberHandler = () => {

  }
  const handleMobileClose = () => {
    setIsmobileMenu(false)
  }


  const deleteHandler = () => {
    closeconfirmDeleteHandler()

  }
  const removeMemberHandler = (id) => {
    console.log("remove member ", id)

  }


  const updateGroupName = () => {
    setIsEdit(false)
    console.log(groupNameUpdatedValue)
  }


  const Iconbutton = <>


    <Box sx={{
      display: {
        xs: "block",
        sm: "none",
        position: "fixed",
        right: "1rem",
        top: "1rem"
      }
    }}>
      <IconButton onClick={handleMobile} >
        <MenuIcon />
      </IconButton>

    </Box>

    <Tooltip title="back">
      <IconButton sx={{
        position: "absolute",
        top: "2rem",
        left: "2rem",
        bgcolor: mateblack,
        color: "white",
        ":hover": {
          bgcolor: "rgba(0,0,0,0.7)"
        }
      }} onClick={navigateback}>
        <KeyboardBackspaceIcon />
      </IconButton>
    </Tooltip>
  </>

  const GroupName = <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={"1rem"} padding={"3rem"}>
    {isEdit ? <>
      <TextField value={groupNameUpdatedValue} onChange={(e) => {
        setGroupNameUpdatedValue(e.target.value)
      }} />
      <IconButton onClick={updateGroupName} >
        <DoneIcon />

      </IconButton>
    </> : <>


      <Typography variant='h4'>
        {groupname}
      </Typography>
      <IconButton onClick={() => setIsEdit(true)}>
        <EditIcon />
      </IconButton>
    </>}
  </Stack>
  const ButtonGroup = <>
    <Stack direction={{
      sm: "row",
      xs: "column-reverse"
    }}
      spacing={"1rem"} p={{
        sm: "1rem",
        xs: "0",
        md: "1rem 4rem"
      }} >
      <Button
        onClick={openconfirmDeleteHandler}
        size={"large"} variant="outlined" color='error' startIcon={<DeleteICon />}>
        Delete Group
      </Button>
      <Button onClick={openAddMemberHandler} size={"large"} variant="contained" startIcon={<AddIcon />}>
        Add member
      </Button>
    </Stack>

  </>

  console.log(groupname)
  console.log(groupNameUpdatedValue)



  useEffect(() => {
    if (chatId) {

      setGroupName(`Group name ${chatId}`)
      setGroupNameUpdatedValue(`Group name ${chatId}`)
    }
    return (() => {
      setIsEdit(false)
      setGroupName("")
      setGroupNameUpdatedValue("")
      console.log("this is clearnup function ")
    })
  }, [chatId]);



  return (
    <Grid container height={"100vh"}>

      <Grid item sm={4} sx={{
        overflow:"auto",
      
        display: {
          xs: "none",
          sm: "block"
        }
      }} height={"100vh"} bgcolor={"#f5f5ff"}>

        <GroupList myGroup={samplechat} chatId={chatId} />
      </Grid>
      <Grid item xs={12} sm={8} sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "center",
        padding: "1rem 3rem"
      }} >
        Group details
        {Iconbutton}


        {
          groupname && <>
            {GroupName}
            <Typography margin={"2rem"} alignSelf={"flex-start"} variant='body1'>
              members
            </Typography>
            <Stack maxWidth={"45rem"} width={"100%"} boxSizing={"border-box"}
              padding={
                {
                  sm: "1rem",
                  xs: "0",
                  md: "1rem 4rem"
                }
              }
              spacing={"2rem"}
              height={"50vh"}
              overflow={"auto"}
            >
              {/* members */}
              {
                sampleuser.map((i) => (
                  <Useritem user={i}
                    key={i._id}
                    handler={removeMemberHandler}
                    isadded styling={{
                      boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                      padding: "1rem 2rem",
                      borderRadius: "1rem"
                    }} />
                ))
              }
            </Stack>
            {ButtonGroup}


          </>
        }
      </Grid>
      {
        isaddmemeber && <Suspense Suspense fallback={<Backdrop open />}>
          <AddMemberDialog />
        </Suspense>
      }

      {
        confirmDeleteDialog && <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog open={confirmDeleteDialog}
            deleteHandler={deleteHandler}
            handleClose={closeconfirmDeleteHandler} />
        </Suspense>
      }
      <Drawer sx={{
        display: {
          xs: "block",
          sm: "none"
        }
      }}
        open={ismobileMenu}
        onClose={handleMobileClose}>
        <GroupList w={"50vw"} myGroup={samplechat} chatId={chatId} />

      </Drawer>
    </Grid>
  )
}


const GroupList = ({ w = "100%", myGroup = [], chatId }) => (

  <Stack w={w} sx={{
   
  }} >
    {
      myGroup.length > 0 ? (
        myGroup.map((group) => 
        
        <GroupListItem key={group._id} group={group} chatId={chatId} />)
      ) :
        <Typography textAlign={"center"} padding={"1rem"}>
          No group
        </Typography>
    }
  </Stack>

)

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id, } = group

  return <LinkUrl to={`?group=${_id}`} onClick={(e) => {
    if (chatId === _id) {
      e.preventDefault()
    }
  }}>
    <Stack  direction={"row"} spacing={"1rem"} alignItems={"center"}>
      <Avatarcard avatar={avatar} />
      <Typography>
        {name}
      </Typography>
    </Stack>
  </LinkUrl>
})
export default Group