import {
    Typography,
    Box,
    Divider,
    Grid,
    CardContent,
    Avatar,
    Card,
    CardActionArea,
    CssBaseline,
} from "@mui/material";
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
import CircleIcon from "@mui/icons-material/Circle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { theme } from "../custom_themes";

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
    const arr = ["", "", ""];
    const stats = [
        {
            color: "#E0F3FA",
            title: "Respiratory Rate",
            value: "20 bpm",
            subtitle: "Normal",
        },
        {
            color: "#FFE6E9",
            title: "Temperature",
            value: "98.6°F",
            subtitle: "Normal",
        },
        {
            color: "##FFE6F1",
            title: "Heart Rate",
            value: "78 bpm",
            subtitle: "Lower than Average",
        },
    ];

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
                <CssBaseline />
                <Typography
                    variant="h5"
                    sx={{
                        px: 3,
                        mb: 4,
                    }}
                >
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
                        <Typography variant="body1" sx={{ mb: 1, width: 450 }}>
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
                                    dataKey="uv"
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
                                    dataKey="pv"
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
                    </Box>

                    <Box
                        sx={{
                            width: "25%",
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
                            <CircleIcon
                                sx={{ width: 18, mr: 0.5, color: "#E66FD2" }}
                            />{" "}
                            Systolic
                        </Typography>
                        <Typography variant="h5">160</Typography>
                        <Typography
                            variant="body2"
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            <ArrowDropUpIcon sx={{ width: 30, ml: -1 }} />{" "}
                            Higher than Average
                        </Typography>

                        <Divider
                            flexItem
                            sx={{ my: 2, width: 1, color: "#CBC8D4" }}
                        />

                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: "bold",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <CircleIcon
                                sx={{ width: 18, mr: 0.5, color: "#8C6FE6" }}
                            />
                            Diastolic
                        </Typography>
                        <Typography variant="h5">78</Typography>
                        <Typography
                            variant="body2"
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            <ArrowDropDownIcon sx={{ width: 30, ml: -1 }} />{" "}
                            Lower than Average
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 4.5,
                        mx: "auto",
                        mt: 2,
                    }}
                >
                    {stats.map((item, index) => (
                        <Card key={index} elevation={0}>
                            <CardActionArea>
                                <CardContent
                                    sx={{
                                        bgcolor: "#e0f3fa",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        pr: 6.5,
                                        pl: 4,
                                    }}
                                >
                                    <Avatar
                                        src="https://picsum.photos/400"
                                        sx={{ width: 80, height: 80 }}
                                    />

                                    <Typography
                                        variant="subtitle2"
                                        sx={{ mt: 1 }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography variant="h5">
                                        {item.value}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{ mt: 1 }}
                                    >
                                        {item.subtitle}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </Box>
            </Box>
        </>
    );
}
