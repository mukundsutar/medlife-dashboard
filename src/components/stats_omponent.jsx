import React from "react";
import {
    Typography,
    Box,
    CardContent,
    Avatar,
    Card,
    CardActionArea,
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function StatsComponent({ stats }) {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                    mx: "auto",
                    mt: 2,
                }}
            >
                {stats.map((item, index) => (
                    <Card
                        key={index}
                        elevation={0}
                        sx={{ width: 200, borderRadius: 3 }}
                    >
                        <CardActionArea>
                            <CardContent
                                sx={{
                                    bgcolor: `${item.color}`,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    pl: 2,
                                }}
                            >
                                <Avatar
                                    src={item.icon}
                                    sx={{ width: 80, height: 80 }}
                                />

                                <Typography variant="subtitle2" sx={{ mt: 1 }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="h5">
                                    {item.value}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        mt: 1,
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    {" "}
                                    {item.subtitle == "Lower than Average" ? (
                                        <ArrowDropDownIcon
                                            sx={{ width: 30, ml: -1 }}
                                        />
                                    ) : (
                                        ""
                                    )}
                                    {item.subtitle == "Higher than Average" ? (
                                        <ArrowDropUpIcon
                                            sx={{ width: 30, ml: -1 }}
                                        />
                                    ) : (
                                        ""
                                    )}
                                    {item.subtitle}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </>
    );
}
