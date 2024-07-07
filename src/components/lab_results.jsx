import {
    Avatar,
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";
import Download from "../assets/download.png";

export default function LabResults() {
    const labResults = [
        "Blood Tests",
        "CT Scans",
        "Radiology Reports",
        "X-Rays",
        "Urine Test",
    ];

    return (
        <>
            <Box sx={{ bgcolor: "#fff", p: 2 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Lab Results
                </Typography>

                <List sx={{ maxHeight: 135, overflow: "auto" }}>
                    {labResults.map((test, index) => (
                        <ListItem
                            key={index}
                            secondaryAction={
                                <Avatar
                                    variant="square"
                                    src={Download}
                                    sx={{ width: 17, height: 17 }}
                                />
                            }
                            sx={{
                                px: 1,
                                "&:hover": {
                                    backgroundColor: "#f0f0f0",
                                },
                            }}
                        >
                            <ListItemText>{test}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </>
    );
}
