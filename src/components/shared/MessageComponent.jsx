import { Box, Typography } from '@mui/material'
import React, { memo } from 'react'
import { LightBlue } from '../../constant/color'
import moment from 'moment'
import { fileformate } from '../../lib/Features'
import RenderAttachment from './RenderAttachment'

const MessageComponent = ({ message, users }) => {

  const { sender, content, attachment, createdadd } = message

  const timeAgo = moment(createdadd).fromNow()
  const sameSender = users?._id === sender._id ? true : false

  return (
    <div style={{
      alignSelf: sameSender ? "flex-end" : "flex-start",
      backgroundColor: "white",
      color: "black",
      borderRadius: "5px",
      padding: "0.5rem",
      width: "fit-content",
    }}>

      {
        !sameSender && <Typography color={LightBlue} fontWeight={"600"}>
          {sender.name}
        </Typography>
      }
      {
        content &&
        <Typography>
          {content}
        </Typography>
      }

      {



        attachment.length > 0 && attachment.map((attachment, index) => {
          const url = attachment.url;
          const file = fileformate(url)
          return <Box key={index}>
            <a href={url} target='_blank' rel="noreferrer" download style={{
              color: "black"
            }}>
              <RenderAttachment file={file} url={url}/>
            </a>

          </Box>
        })

      }
      <Typography variant='caption' color={"text.secondary"}>{timeAgo}</Typography>

    </div>
  )
}

export default memo(MessageComponent)