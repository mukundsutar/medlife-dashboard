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
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Heart from "../assets/heart.png";
import Lungs from "../assets/lungs.png";
import Thermometer from "../assets/thermometer.png";

// {
//     name: "Jan, 2024",
//     uv: 239,
//     pv: 380,
//     amt: 250,
// },

export default function DiagnosisHistory({ apiData }) {
    const data = [];

    for (let i = 0; i < apiData.length; i++) {
        let row = {
            name: `${apiData[i].month}, ${apiData[i].year}`,
            systolic: apiData[i].blood_pressure.systolic.value,
            diastolic: apiData[i].blood_pressure.diastolic.value,
        };

        data.push(row);
    }

    const stats = [
        {
            color: "#E0F3FA",
            title: "Respiratory Rate",
            value: apiData[0].respiratory_rate.value + " bpm",
            subtitle: apiData[0].respiratory_rate.levels,
            icon: Lungs,
        },
        {
            color: "#FFE6E9",
            title: "Temperature",
            value: apiData[0].temperature.value + "°F",
            subtitle: apiData[0].temperature.levels,
            icon: Thermometer,
        },
        {
            color: "#ffe6f1",
            title: "Heart Rate",
            value: apiData[0].heart_rate.value + " bpm",
            subtitle: apiData[0].heart_rate.levels,
            icon: Heart,
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
                                margin={{ left: -25, right: 13, top: 10 }}
                                data={data.reverse()}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="name"
                                    fontSize={12}
                                    tickLine={false}
                                />
                                <YAxis />
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
                        <Card key={index} elevation={0} sx={{ width: 200 }}>
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
                                        sx={{
                                            mt: 1,
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        {" "}
                                        {item.subtitle ==
                                        "Lower than Average" ? (
                                            <ArrowDropDownIcon
                                                sx={{ width: 30, ml: -1 }}
                                            />
                                        ) : (
                                            ""
                                        )}
                                        {item.subtitle ==
                                        "Higher than Average" ? (
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
            </Box>
        </>
    );
}
