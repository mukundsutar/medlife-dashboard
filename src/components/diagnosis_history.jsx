import { Typography, Box, Divider, Grid } from "@mui/material";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ReferenceDot,
    ReferenceArea,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Jan, 2024",
        uv: 400,
        pv: 240,
        amt: 240,
    },
    {
        name: "Jan, 2024",
        uv: 300,
        pv: 139,
        amt: 221,
    },
    {
        name: "Jan, 2024",
        uv: 200,
        pv: 480,
        amt: 229,
    },
    {
        name: "Jan, 2024",
        uv: 278,
        pv: 390,
        amt: 200,
    },
    {
        name: "Jan, 2024",
        uv: 189,
        pv: 480,
        amt: 218,
    },
    {
        name: "Jan, 2024",
        uv: 239,
        pv: 380,
        amt: 250,
    },
];

export default function DiagnosisHistory() {
    return (
        <>
            <Box
                sx={{
                    bgcolor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    py: 2,
                }}
            >
                <Typography variant="h5" sx={{ px: 3, mb: 4 }}>
                    Diagnosis History
                </Typography>

                <Box
                    sx={{
                        bgcolor: "#f4f0fe",
                        maxwidth: "95%",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-evenly",
                        mx: 2,
                        py: 2,
                        borderRadius: 5,
                    }}
                >
                    <Box>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            Blood Pressure
                        </Typography>
                        <ResponsiveContainer height={200} width={"100%"}>
                            <LineChart
                                margin={{ left: -25, right: 13 }}
                                data={data}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="name"
                                    fontSize={15}
                                    tickLine={false}
                                />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="pv"
                                    stroke="#8884d8"
                                    strokeWidth={3}
                                    dot={{
                                        strokeWidth: 7,
                                        stroke: "#8884d8",
                                    }}
                                    legendType="none"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="uv"
                                    stroke="#82ca9d"
                                    strokeWidth={3}
                                    dot={{
                                        strokeWidth: 7,
                                        stroke: "#82ca9d",
                                    }}
                                    legendType="none"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </Box>

                    <Box
                        sx={{
                            width: "20%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                        }}
                    >
                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                            Systolic
                        </Typography>
                        <Typography variant="h5">160</Typography>
                        <Typography variant="body2">
                            Higher than Average
                        </Typography>

                        <Divider flexItem sx={{ my: 2, width: 1 }} />

                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                            Diastolic
                        </Typography>
                        <Typography variant="h5">78</Typography>
                        <Typography variant="body2">
                            Lower than Average
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
