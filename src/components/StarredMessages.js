import { Box, IconButton, Stack, Typography, Tabs, Tab, Grid } from '@mui/material'
import {useTheme } from '@mui/material/styles'
import { faker } from '@faker-js/faker';
import React from 'react'
import { useDispatch } from 'react-redux';
import { UpdateSidebarType } from '../redux/slices/app';
import { CaretLeft, X } from 'phosphor-react';
import { SHARED_DOCS, SHARED_LINKS } from "../data";
import { DocMsg, LinkMsg } from './Conversation/MsgTypes';
import Message from './Conversation/Message';

const StarredMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  
  return (
    <Box sx={{
      width:320,
      height: "100vh"
  }}>
    <Stack sx={{
      height: "100%"
    }}>
      {/* Header? */}
      <Box sx={{
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        width: "100%",
        backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background
      }}>
        <Stack sx={{
          height: "100%",
          p: 2,
        }} 
        direction={"row"}
        spacing={3}
        alignItems={"center"}
        >
    
          <IconButton onClick={()=>{
            dispatch(UpdateSidebarType("CONTACT"))
          }}>
            <CaretLeft />
          </IconButton>
          <Typography variant='subtitle2'>Sharred Messages</Typography>
        </Stack>
      </Box>
        {/* body */}
      <Stack sx={{
          height:"100%",
          position: "relative",
          flexGrow:1,
          overflowY: "scroll",
        }}
        p={3}
        spacing={3}
        >
        <Message />
      </Stack>
    </Stack>
  </Box>
  )
}

export default StarredMessages
