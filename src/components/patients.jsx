import {
    Avatar,
    Box,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function Patients({ apiData }) {
    const arr = ["", "", "", "", "", "", "", "", "", "", "", ""];

    return (
        <>
            <Box
                sx={{
                    bgcolor: "#fff",
                    height: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    borderRadius: 5,
                    pb: 1,
                }}
            >
                <ListItem
                    secondaryAction={
                        <IconButton edge="end" sx={{ mr: 0 }}>
                            <SearchIcon />
                        </IconButton>
                    }
                    sx={{ px: 3 }}
                >
                    <ListItemText
                        primary="Patients"
                        primaryTypographyProps={{ variant: "h5" }}
                    />
                </ListItem>

                <List sx={{ width: 330, maxHeight: 835, overflow: "auto" }}>
                    {apiData.map((item, index) => (
                        <ListItem
                            key={index}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                    <MoreHorizIcon sx={{ mr: 2 }} />
                                </IconButton>
                            }
                            sx={{
                                px: 2,
                                "&:hover": {
                                    backgroundColor: "#D8FCF7",
                                },
                            }}
                        >
                            <ListItemAvatar>
                                <Avatar src={item.profile_picture} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.name}
                                secondary={`${item.gender}, ${item.age}`}
                                secondaryTypographyProps={{color:'#707070'}}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </>
    );
}
