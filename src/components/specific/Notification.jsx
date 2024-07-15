import {
  Dialog,
  DialogTitle,

  Stack,
  TextField,
  List,
  ListItem,
  ListItemText,
  Typography,
  Avatar,
  IconButton,
  Button
} from '@mui/material';
import React, { memo } from 'react'
import { samplenotification } from '../../constant/sampledata';
const Notification = () => {

  const friendRequestHandler = ({ _id, accept }) => {
    console.log("friendRequestHandler")
  }


  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"30rem"}>
        <DialogTitle>Notification</DialogTitle>

        {
          samplenotification.length > 0 ? (
            samplenotification.map((i) => {
              return <NotificationItem
                key={i._id}
                sender={i.sender}
                _id={i._id}
                handler={friendRequestHandler} />
            })
          )


            : (
              <Typography textAlign={"center"}>
                O notification
              </Typography>
            )
        }
      </Stack>
    </Dialog>
  )
}

const NotificationItem = memo(({ sender, _id, handler }) => {

  const { name, avtar } = sender
  return (
    <ListItem  >
      <Stack direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >


        <Avatar src={avtar}/>
        <Typography
          variant='body'
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%"

          }}

        >
          {`${name} Send you a friend request`}
        </Typography>
        <Stack direction={{
          xs: "column",
          sm: "row"

        }} s>
          <Button onClick={() => {
            const accept = true
            handler(_id, accept)

          }}>Accept</Button>
          <Button color='error' onClick={() => {
            const accept = false
            handler(_id, accept)

          }}>Reject</Button>

        </Stack>
      </Stack >
    </ListItem >
  )
})
export default Notification