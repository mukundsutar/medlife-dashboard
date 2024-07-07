import { Box, MenuItem, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

export default function ChartDisplay({ chartData }) {
    const [sortedData, setSortedData] = useState([]);

    const currencies = [
        {
            value: "6",
            label: "Last 6 months",
        },
        {
            value: "12",
            label: "Last 1 year",
        },
        {
            value: "24",
            label: "All Data",
        },
    ];

    function sortData(duration) {
        let appendedData = [];

        if (duration !== 24) {
            for (let i = 0; i < duration; i++) {
                appendedData.push(chartData[i]);
            }
            setSortedData(appendedData);
        } else {
            setSortedData(chartData);
        }
    }

    useEffect(() => {
        sortData(6); // Default to the last 6 months
    }, [chartData]);

    return (
        <>
            <Box sx={{ width: '80%', mx: 2 }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        Blood Pressure
                    </Typography>

                    <TextField
                        select
                        variant="standard"
                        defaultValue="6"
                        sx={{
                            "& .MuiInput-underline:before": {
                                borderBottom: "none",
                            },
                            "& .MuiInput-underline:hover:before": {
                                borderBottom: "none",
                            },
                            "& .MuiInput-underline:after": {
                                borderBottom: "none",
                            },
                            "& .MuiSelect-select:focus": {
                                backgroundColor: "transparent",
                            },
                        }}
                        onChange={(e) => sortData(parseInt(e.target.value))}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>

                {sortedData && (
                    <ResponsiveContainer height={200} width={"100%"}>
                        <LineChart
                            margin={{ left: -25, right: 30, top: 10 }}
                            data={sortedData}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="name"
                                fontSize={10}
                                tickLine={false}
                                reversed
                                interval="equidistantPreserveStart"
                            />
                            <YAxis
                                type="number"
                                tickCount={7}
                                domain={["dataMin", "auto"]}
                                tickLine={false}
                                interval={0}
                                fontSize={10}
                            />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="systolic"
                                stroke="#E66FD2"
                                strokeWidth={3}
                                dot={{
                                    strokeWidth: 7,
                                    stroke: "#E66FD2",
                                }}
                                legendType="none"
                            />
                            <Line
                                type="monotone"
                                dataKey="diastolic"
                                stroke="#8C6FE6"
                                strokeWidth={3}
                                dot={{
                                    strokeWidth: 7,
                                    stroke: "#8C6FE6",
                                }}
                                legendType="none"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                )}
            </Box>
        </>
    );
}
