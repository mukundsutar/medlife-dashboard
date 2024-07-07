import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import React from "react";

const diagnosticList = [
    {
        problem: "Hypertension",
        description: "Chronic high blood pressure",
        status: "Under Observation",
    },
    {
        problem: "Type 2 Diabetes",
        description: "Insulin resistance and elevated blood sugar",
        status: "Cured",
    },
    {
        problem: "Asthma",
        description: "Recurrent episodes of bronchial constriction",
        status: "Inactive",
    },
    {
        problem: "Osteoarthritis",
        description: "Degenerative joint disease",
        status: "Unreported",
    },
];

export default function DiagnosticList() {
    return (
        <>
            <Box sx={{ bgcolor: "#fff", p: 2 }}>
                <Typography variant="h5" sx={{ mb: 4 }}>
                    Diagnostic List
                </Typography>

                <TableContainer sx={{ mt: 2, mx: "auto", maxHeight: 200 }}>
                    <Table
                        sx={{
                            [`& .${tableCellClasses.head}`]: {
                                backgroundColor: "#f6f7f8",
                            },
                            [`& .${tableCellClasses.root}`]: {
                                borderBottom: "none",
                            },
                            minWidth: 650,
                        }}
                        stickyHeader
                    >
                        <TableHead sx={{ bgcolor: "#000" }}>
                            <TableRow>
                                <TableCell>Problem/Diagnosis</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody
                            sx={{
                                position: "relative",
                                overflowY: "auto",
                                overflowX: "hidden",
                                maxHeight: 100,
                            }}
                        >
                            {diagnosticList.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                        "&:hover": {
                                            backgroundColor: "#f0f0f0",
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.problem}
                                    </TableCell>
                                    <TableCell>{row.description}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}
