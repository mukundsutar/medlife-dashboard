import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function LatestDiagnosis({apiData}) {
    return (
        <>
            <Box
                sx={{
                    width: "30%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <CircleIcon sx={{ width: 18, mr: 0.5, color: "#E66FD2" }} />{" "}
                    Systolic
                </Typography>
                <Typography variant="h5">
                    {apiData[0].blood_pressure.systolic.value}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    {apiData[0].blood_pressure.systolic.levels ==
                    "Lower than Average" ? (
                        <ArrowDropDownIcon sx={{ width: 30, ml: -1 }} />
                    ) : (
                        ""
                    )}
                    {apiData[0].blood_pressure.systolic.levels ==
                    "Higher than Average" ? (
                        <ArrowDropUpIcon sx={{ width: 30, ml: -1 }} />
                    ) : (
                        ""
                    )}
                    {apiData[0].blood_pressure.systolic.levels}
                </Typography>

                <Divider
                    flexItem
                    sx={{ my: 2, width: "90%", color: "#CBC8D4" }}
                />

                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <CircleIcon sx={{ width: 18, mr: 0.5, color: "#8C6FE6" }} />
                    Diastolic
                </Typography>
                <Typography variant="h5">
                    {apiData[0].blood_pressure.diastolic.value}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    {apiData[0].blood_pressure.diastolic.levels ==
                    "Lower than Average" ? (
                        <ArrowDropDownIcon sx={{ width: 30, ml: -1 }} />
                    ) : (
                        ""
                    )}
                    {apiData[0].blood_pressure.diastolic.levels ==
                    "Higher than Average" ? (
                        <ArrowDropUpIcon sx={{ width: 30, ml: -1 }} />
                    ) : (
                        ""
                    )}
                    {apiData[0].blood_pressure.diastolic.levels}
                </Typography>
            </Box>
        </>
    );
}
