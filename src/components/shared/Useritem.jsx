import { Avatar, IconButton, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import React, { memo } from 'react'
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material'
const Useritem = ({ user, handler, handlerIsLoading, isadded ,styling={}}) => {

    const { name, _id, avtar } = user
    return (
        <ListItem  >
            <Stack direction={"row"}
                alignItems={"center"}
                spacing={"1rem"}
                width={"100%"}
                {...styling}
            >


                <Avatar />
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
                    {name}
                </Typography>
                {console.log(isadded, "&&&&&", name)}
                <IconButton size='small' sx={{
                    bgcolor: isadded ? "error.dark" : "primary.main",
                    color: "wheat",
                    "&:hover": {
                        bgcolor: isadded ? "error.dark" : "primary.dark"
                    }
                }} disabled={handlerIsLoading} onClick={() => handler(_id)}>
                    {isadded ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
            </Stack>
        </ListItem>
    )
}

export default memo(Useritem)