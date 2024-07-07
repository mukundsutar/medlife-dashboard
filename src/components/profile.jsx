import {
    Avatar,
    Box,
    Button,
    CardHeader,
    IconButton,
    Typography,
} from "@mui/material";
import React from "react";
import ProfilePhoto from "../assets/profile_photo.png";
import BirthIcon from "../assets/BirthIcon.svg";
import FemaleIcon from "../assets/FemaleIcon.svg";
import PhoneIcon from "../assets/PhoneIcon.svg";
import InsuranceIcon from "../assets/InsuranceIcon.svg";

export default function Profile() {
    const arr = ["", "", "", "", ""];

    const profileData = [
        {
            title: "Date of Birth",
            value: "August 23, 1996",
            icon: BirthIcon,
        },
        { title: "Gender", value: "Female", icon: FemaleIcon },
        { title: "Contact Info.", value: "(415) 555-1234", icon: PhoneIcon },
        {
            title: "Emergency Contact",
            value: "(415) 555-5678",
            icon: PhoneIcon,
        },
        {
            title: "Insurance Provider",
            value: "Sunrise Health Assurance",
            icon: InsuranceIcon,
        },
    ];

    return (
        <>
            <Box
                sx={{
                    bgcolor: "#fff",
                    width: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                }}
            >
                <Avatar
                    src={ProfilePhoto}
                    sx={{ width: 180, height: 180, mt: 4 }}
                />

                <Typography variant="h5">Jessica Taylor</Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        width: 325,
                        mt: 2,
                        pl: 3,
                    }}
                >
                    {profileData.map((item, index) => (
                        <CardHeader
                            key={index}
                            avatar={<Avatar src={item.icon} />}
                            title={item.title}
                            titleTypographyProps={{ variant: "body2" }}
                            subheader={item.value}
                            subheaderTypographyProps={{ fontWeight: "bold" }}
                            sx={{ p: 1 }}
                        />
                    ))}
                </Box>

                <Button
                    variant="contained"
                    sx={{
                        textTransform: "capitalize",
                        borderRadius: 20,
                        px: 5,
                        m: 4,
                    }}
                >
                    Show All Information
                </Button>
            </Box>
        </>
    );
}
