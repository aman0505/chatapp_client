import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import Title from '../shared/Title'
import { Grid } from '@mui/material'
import ChatList from '../specific/ChatList'
import { samplechat } from '../../constant/sampledata'
import Profile from '../specific/Profile'



const Applayout = () => (WrapperComponent) => {





    return (props) => {

        const chati = useParams;
        const chatId = chati().chatid

        const handleDeleteChat = (e, _id, groupChat) => {
            console.log("delete chat ", _id, groupChat)

        }

        return (

            <>
                <Title />
                <Header />
                <Grid container height={"calc(100vh - 4rem)"} >
                    <Grid item sm={4} md={3} sx={{
                       
                        display: {
                            xs: "none",
                            sm: "block"
                        }
                    }} height={"100%"}   >

                        <ChatList
                            key={chatId}
                            handleDeleteChat={handleDeleteChat}
                            chatId={chatId}
                            chats={samplechat}
                            newMessageAlert={[
                                {
                                    chatId: chatId,
                                    count: 4
                                }
                            ]}
                            onlineUsers={
                                ["1", "2"]
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
                        <WrapperComponent {...props} />
                    </Grid>
                    <Grid item md={4} lg={3} height={"100%"} sx={{
                        display: {
                            xs: "none",
                            md: "block",
                            padding: "2rem",
                            backgroundColor: "black"

                        }
                    }}  >
                        <Profile />
                    </Grid>

                </Grid>



            </>
        )
    }
}

export default Applayout