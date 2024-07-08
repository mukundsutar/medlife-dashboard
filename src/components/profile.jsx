import { Avatar, Box, Button, CardHeader, Typography } from "@mui/material";
import BirthIcon from "../assets/BirthIcon.svg";
import FemaleIcon from "../assets/FemaleIcon.svg";
import PhoneIcon from "../assets/PhoneIcon.svg";
import InsuranceIcon from "../assets/InsuranceIcon.svg";
import { theme } from "../custom_themes";

export default function Profile({ apiData }) {
    function formatDate(dateString) {
        const date = new Date(dateString);

        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
    }

    const profileData = [
        {
            title: "Date of Birth",
            value: formatDate(apiData.date_of_birth),
            icon: BirthIcon,
        },
        { title: "Gender", value: apiData.gender, icon: FemaleIcon },
        {
            title: "Contact Info.",
            value: apiData.phone_number,
            icon: PhoneIcon,
        },
        {
            title: "Emergency Contact",
            value: apiData.emergency_contact,
            icon: PhoneIcon,
        },
        {
            title: "Insurance Provider",
            value: apiData.insurance_type,
            icon: InsuranceIcon,
        },
    ];

    return (
        <>
            {apiData && (
                <Box
                    sx={{
                        bgcolor: "#fff",
                        width: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        borderRadius: 5,
                    }}
                >
                    <Avatar
                        src={apiData.profile_picture}
                        sx={{ width: 180, height: 180, mt: 4, mb: 2 }}
                    />

                    <Typography variant="h5">{apiData.name}</Typography>

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
                                titleTypographyProps={{ variant: "subtitle2" }}
                                subheader={item.value}
                                subheaderTypographyProps={{
                                    fontWeight: "bold",
                                    color: theme.palette.text.primary,
                                    variant: "subtitle2",
                                }}
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
                            m: 3,
                        }}
                    >
                        Show All Information
                    </Button>
                </Box>
            )}
        </>
    );
}
