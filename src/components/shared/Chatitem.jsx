import React, { memo, } from 'react'
import { Link } from "../style/StyleComponents"
import { Avatar, Stack, Typography, Box } from '@mui/material'
import Avtarcard from './Avtarcard'
const Chatitem = ({
  sameSender,
  _id,
  name,
  groupChat = false,
  isOnline,
  index = 0,
  handleDeleteChat,
  newmessagesAlert,
  avatar
}) => {


  console.log(handleDeleteChat)
  
  return (
    <Link sx={{
      padding: "0"
    }} to={`/chats/${_id}`}
      onContextMenu={(e) => {
        handleDeleteChat(e, _id, groupChat)
      }}    >
      <div style={{
        display: "flex",

        alignItems: "center",
        padding: "1rem",
        backgroundColor: sameSender ? "black" : "unset",
        color: sameSender ? "wheat" : "unset",
        justifyContent: "left",
        position: "relative",
        overflow:"hidden"
        
      }}>

        <Avtarcard avatar={avatar}/>



        <Stack>
          <Typography>
            {name}

            {
              newmessagesAlert && (
                <Typography>{newmessagesAlert.count}New Message</Typography>
              )
            }
          </Typography>
        </Stack>

        {isOnline && <Box sx={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "green",
          position: "absolute",
          top: "50%",
          right: "1rem",
          transform: "translateY(-50%)",

        }} />

        }
      </div>
    </Link>
  )
}

export default Chatitem