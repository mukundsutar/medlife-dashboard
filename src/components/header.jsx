import {
    Avatar,
    Box,
    Button,
    CardHeader,
    IconButton,
    Divider,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Logo from "../assets/TestLogo.svg";

export default function Header() {
    const buttonStyle = { borderRadius: 20, mx: 1 };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 4,
                    bgcolor: "#d8f3dc",
                    borderRadius: 20,
                }}
            >
                <Box
                    component="img"
                    sx={{}}
                    alt="The house from the offer."
                    src={Logo}
                />

                <Box
                    sx={{
                        padding: 3,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    width={"xl"}
                >
                    <Button
                        variant="contained"
                        sx={{ borderRadius: 20, mx: 1 }}
                    >
                        Overview
                    </Button>
                    <Button variant="contained" sx={buttonStyle}>
                        Patients
                    </Button>
                    <Button variant="contained" sx={buttonStyle}>
                        Schedule
                    </Button>
                    <Button variant="contained" sx={buttonStyle}>
                        Message
                    </Button>
                    <Button variant="contained" sx={buttonStyle}>
                        Transactions
                    </Button>
                </Box>

                <CardHeader
                    avatar={<Avatar src="https://picsum.photos/250" />}
                    title="Walter White"
                    subheader="Cook"
                    action={
                        <IconButton>
                            <Divider
                                orientation="vertical"
                                flexItem
                                sx={{ mx: 1 }}
                            />
                            <SettingsIcon />
                            <MoreVertIcon />
                        </IconButton>
                    }
                />
            </Box>
        </>
    );
}
