import React, { memo } from 'react'
import { Stack } from '@mui/material'
import Chatitem from '../shared/Chatitem'
const ChatList = ({ w = "100%",
    chats = [],
    chatId,
    onlineUsers = [],
    newMessageAlert = [],
    handleDeleteChat
}) => {

    console.log(handleDeleteChat)
    return (

        <Stack width={w} direction={"column"}>
            {
                chats?.map((data, index) => {
                    const { avtar, _id, name, groupchat, members } = data


                    const newmessagesAlert = newMessageAlert.find(({ chatId }) => chatId === _id)

                    const isOnline = members?.some((member) => onlineUsers.includes(_id))

                    return <Chatitem
                        index={index}
                        avtar={avtar}
                        key={_id}
                        newmessagesAlert={newmessagesAlert}
                        sameSender={chatId === _id}
                        isOnline={isOnline}
                        data={data}
                        handleDeleteChat={handleDeleteChat}
                        _id={_id}
                        name={name}
                        groupchat={groupchat} />
                })
            }

        </Stack>
    )
}

export default memo(ChatList)


