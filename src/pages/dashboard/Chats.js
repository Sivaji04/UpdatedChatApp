import {Avatar, Box, Button, Divider, IconButton, InputBase, Stack, Typography, Badge,} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from 'react';
import {styled, alpha, useTheme} from "@mui/material/styles";
import { faker } from "@faker-js/faker";

import {ChatList} from "../../data"


const ScrollContainer = styled(Stack)({
    flexGrow: 1,
    overflow: "auto",
    height: "100%",
    scrollbarWidth: "thin", // Firefox support
    scrollbarColor: "rgba(160, 160, 160, 0.7) transparent",
    "&::-webkit-scrollbar": {
      width: "6px",
      transition: "opacity 0.3s ease-in-out",
      opacity: 0, // Initially hidden
    },
    "&:hover::-webkit-scrollbar, &:focus-within::-webkit-scrollbar": {
      opacity: 1, // Show scrollbar on hover/scroll
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#a0a0a0",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
  });

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));


const ChatElement = ({id, name, img, msg, time, unread, online}) => {
    const theme = useTheme();
    return (
        <Box sx={{
            width: "100%",
            borderRadius: 1,
            backgroundColor: theme.palette.mode ==="light" ? "#fff" : theme.palette.background.paper,
        }}
        p={2}
        >
           <Stack 
            direction="row" 
            alignItems={"center"} 
            justifyContent={"space-between"}
            >
            <Stack direction={"row"} spacing={2}>
                {online ? (
                    <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    >
                    <Avatar src={faker.image.avatar()} />
                </StyledBadge>
                ): <Avatar src={faker.image.avatar()} /> 
                }
                <Stack spacing={0.3}>
                    <Typography variant="subtitle2">{name}</Typography>
                    <Typography variant="subtitle2">{msg}</Typography>
                </Stack>
            </Stack>
            <Stack spacing={2} alignItems={"center"}>
                <Typography sx={{fontWeight: 500}} variant="caption">
                    {time}
                </Typography>
                <Badge color="primary" badgeContent={unread}>

                </Badge>
            </Stack>
           </Stack>
            
        </Box>
    )
}

const Search = styled("div")(({theme}) => ({
    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.paper, 1),
    marginRight: theme.spacing(2),
    width: "100%",
}));

const SearchIconWrapper = styled("div")(({theme}) => ({
    padding: theme.spacing(0, 2),
    position: "absolute",
    height: "100%",
    PointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1,1,1,0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: "100%",
    },
}));

const Chats = () => {
    const theme = useTheme();
    return (
        <Box 
         sx={{
            position:"relative",
            width: 320,
            backgroundColor: theme.palette.mode ==="light" ? "#F8FAFF" : theme.palette.background.default,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
         }}
        >
            <Stack p={3} spacing={2} sx={{height: "100%"}} >
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} >
                    <Typography variant="h5">
                        Chats
                    </Typography>
                    <IconButton>
                        <CircleDashed />
                    </IconButton>
                </Stack>
                <Stack sx={{width: "100%"}}>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color="#709CE6" />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="seach..." inputProps={{"aria-label": "search"}} />
                    </Search>
                </Stack>
                <Stack spacing={1}>
                    <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
                        <ArchiveBox size={24}/>
                        <Button>Archieve</Button>
                    </Stack>
                    <Divider />
                </Stack>
                <Stack 
                  spacing={2.4} 
                  direction={"column"} 
                  sx={{flexGrow: 1, overflow: "scroll", height: "100%" }}>
                        <ScrollContainer spacing={2.4} direction="column">
                            <Stack spacing={2.4}>
                                <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                                Pinned
                                </Typography>
                                {ChatList.filter((el) => el.pinned).map((el) => (
                                <ChatElement key={el.id} {...el} />
                                ))}
                            </Stack>

                            <Stack spacing={2.4}>
                                <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                                All Chats
                                </Typography>
                                {ChatList.filter((el) => !el.pinned).map((el) => (
                                <ChatElement key={el.id} {...el} />
                                ))}
                            </Stack>
                        </ScrollContainer>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Chats;