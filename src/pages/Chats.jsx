import React, { useRef } from 'react'
import Applayout from '../components/layout/Applayout';
import { IconButton, Stack } from '@mui/material';
import { AttachFile, Send as SendIcon } from '@mui/icons-material';
import { InputBoxstyled } from '../components/style/StyleComponents';
import { orange } from "../constant/color";
import FileMenu from '../components/dialogs/FileMenu';
import { SampleMessage } from '../constant/sampledata';
import MessageComponent from '../components/shared/MessageComponent';

const Chat = () => {

  const containerRef = useRef(null)
  const FileMenuref = useRef(null)

  const users={
    _id:"sdfsdf",
    name:"name"
  }

  return (
    <>
      <Stack ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={"rgba(0,0,0,0.1)"}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto"
        }} 
        
        >


          {SampleMessage.map((i)=>(
            <MessageComponent  message={i} users={users}/>
          ))}
          


      </Stack>
      <form style={{
        height: "10%"
      }}>

        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}>

          <IconButton 
         

          sx={{
            position: "absolute",
            left: "1.5rem",
            rotate: "30deg",
            backgroundColor:"red"


          }}
            ref={FileMenuref}
          >
            
            <AttachFile />
          </IconButton>
         
          <InputBoxstyled placeholder='Type message here' />

          <IconButton type='submit' sx={{
            rotate: "-30deg",
            backgroundColor: orange,
            color: "white",
            marginLeft: "1rem",
            padding: "0.5rem",
            "&:hover": {
              backgroundColor: "error.dark"
            }
          }}>
            <SendIcon />
          </IconButton>

        </Stack>
      </form>
      

      <FileMenu anchorE1={FileMenuref.current} />
      
    </>
  )
}

export default Applayout()(Chat)