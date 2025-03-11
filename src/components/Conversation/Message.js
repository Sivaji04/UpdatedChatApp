import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, Timeline, TxtMsg } from './MsgTypes'

const Message = ({menu}) => {
  return (
    <Box p={3}>
        <Stack spacing={3} >
            {Chat_History.map((el) => {
                switch (el.type) {
                    case "divider":
                        //Timeline
                        return <Timeline el={el} />
                
                    case "msg":
                        switch (el.subtype) {
                            case "img":
                                return <MediaMsg menu={menu} el={el}/>
                            case "doc":
                                return <DocMsg menu={menu} el={el} />
                            case "link":
                                return <LinkMsg menu={menu} el={el} />
                            case "reply":
                                return <ReplyMsg menu={menu} el={el} />
                            default:
                                return <TxtMsg menu={menu} el={el} />
                            
                                
                        }
                        
                    default:
                        return <></>
                }
            })}
        </Stack>
    </Box>
  )
}

export default Message


