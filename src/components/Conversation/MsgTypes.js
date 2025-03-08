import { useTheme } from '@emotion/react'
import { Box, Divider, Stack, Typography, Link, IconButton, Menu, MenuItem} from '@mui/material'
import { DotsThreeVertical, DownloadSimple, Image } from 'phosphor-react';
import React, { useState } from 'react'
import { Message_options } from '../../data';

const DocMsg = ({el}) => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
            <Box p={1.5} sx={{
                backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                borderRadius:1.5,
                width: "max-content",
                }}>
                <Stack spacing={1} >
                    <Stack p={2}
                      spacing={3}
                      direction={"row"}
                      alignItems={"center"}
                      sx={{
                        backgroundColor:theme.palette.background.paper,
                        borderRadius: 1,
                    }}
                    >
                        <Image size={48} />
                        <Typography variant='caption'>Abstract.png</Typography>
                        <IconButton>
                            <DownloadSimple />
                        </IconButton>
                    </Stack>
                    <Typography variant='body2' sx={{color: el.incoming ? theme.palette.text : '#fff'}} >{el.message}</Typography>
                </Stack>
            </Box>
            <MessageOptions />
        </Stack>
    )
}

const LinkMsg = ({el}) => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
            <Box p={1.5} sx={{
                backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                borderRadius:1.5,
                width: "max-content",
                }}>
                <Stack spacing={2}>
                    <Stack p={2} 
                      spacing={3}
                      direction={"column"} 
                      alignItems={"start"}
                    sx={{
                        backgroundColor:theme.palette.background.paper,
                        borderRadius: 1,
                    }}>
                        <img src={el.preview} alt={el.message} style={{maxHeight:210, borderRadius:"10px"}} />
                        <Stack spacing={2}>
                            <Typography variant='subtitle2'>sivaji</Typography>
                            <Typography 
                            variant='subtitle2' 
                            sx={{color: theme.palette.primary.main}} 
                            component={Link}
                            to="//https://ww.youtube.com"
                            >www.youtube.com</Typography>
                        
                        </Stack>
                        <Typography 
                        variant='body2'
                        color={el.incoming ? theme.palette.text : "#fff"}
                        >{el.message}</Typography>
                    </Stack>
                </Stack>
            </Box>
            <MessageOptions />
        </Stack>
    )
}

const ReplyMsg = ({el}) => {
    const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
            <Box p={1.5} sx={{
                backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                borderRadius:1.5,
                width: "max-content",
                }}>
                <Stack spacing={2}>
                    <Stack 
                      p={2} 
                      direction={"column"}
                      spacing={3}
                      alignItems={"center"}
                      sx={{
                        backgroundColor:theme.palette.background.paper,
                        borderRadius: 1,
                    }}
                    >
                        <Typography variant="body2" color={theme.palette.text}>
                        {el.message}
                        </Typography>
                    </Stack>
                </Stack>
                <Typography variant="body2" color={el.incoming ? theme.palette.text : "#fff"}>
                    {el.reply}
                </Typography>
            </Box>
            <MessageOptions />
        </Stack>
  )
}



const MediaMsg = ({el}) => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
            <Box p={1.5} sx={{
                backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                borderRadius:1.5,
                width: "max-content",
                }}>
                <Stack spacing={1}>
                    <img src={el.img} alt={el.message} style={{maxHeight:210, borderRadius:"10px"}} />
                    <Typography variant='body2' color={el.incoming ? theme.palette.text : "#fff"}>
                        {el.message}
                    </Typography>
                </Stack>
            </Box>
            <MessageOptions />
        </Stack>
    )

}

const TxtMsg = ({el}) => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
            <Box p={1.5} sx={{
                backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                borderRadius:1.5,
                width: "max-content",
                }}>
                    <Typography variant='body2' color={el.incoming ? theme.palette.text : "#fff"}>
                        {el.message}
                    </Typography>
            </Box>
            <MessageOptions />
        </Stack>
    )

}

const Timeline = ({el}) => {
    const theme = useTheme();
  return (
    <Stack 
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
    <Divider width="46%" />
    <Typography variant="caption" sx={{color: theme.palette.text}}>
        {el.text}
    </Typography>
    <Divider width="46%" />
    </Stack>
  )
}


const MessageOptions = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <>
        <DotsThreeVertical 
        size={20}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} 
        />
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Stack spacing={1} px={1} >
            {Message_options.map((el) => (
                <MenuItem onClick={handleClose}>{el.title}</MenuItem>
            ))}
        </Stack>
      </Menu>
        </>
    )
}

export  {Timeline, TxtMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg}
