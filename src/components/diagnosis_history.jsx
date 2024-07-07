import {
    Typography,
    Box,
} from "@mui/material";
import Heart from "../assets/heart.png";
import Lungs from "../assets/lungs.png";
import Thermometer from "../assets/thermometer.png";
import ChartDisplay from "./chart_display";
import StatsComponent from "./stats_omponent";
import LatestDiagnosis from "./latest_diagnosis";

export default function DiagnosisHistory({ apiData }) {
    const data = [];

    for (let i = 0; i < apiData.length; i++) {
        let row = {
            name: `${apiData[i].month.substring(0, 3)}, ${apiData[i].year}`,
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
                    p: 2,
                    borderRadius: 5,
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        px: 3,
                        mb: 2,
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
                        py: 2,
                        borderRadius: 3,
                    }}
                >
                    <ChartDisplay chartData={data} />

                    <LatestDiagnosis apiData={apiData} />
                </Box>

                <StatsComponent stats={stats} />
            </Box>
        </>
    );
}
