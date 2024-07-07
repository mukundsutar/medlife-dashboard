import {
    Avatar,
    Box,
    Button,
    CardHeader,
    IconButton,
    Divider,
    Icon,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Logo from "../assets/TestLogo.svg";
import Home from "../assets/home.png";
import Group from "../assets/group.png";
import Calendar from "../assets/calendar.png";
import ChatBubble from "../assets/chat_bubble.png";
import CreditCard from "../assets/credit_card.png";
import DoctorPfp from "../assets/doctor.png";

export default function Header() {
    const buttonStyle = {
        borderRadius: 20,
        mx: 1,
        bgcolor: "#fff",
        "&:hover": {
            backgroundColor: "#fff",
        },
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 4,
                    bgcolor: "#fff",
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
                        sx={buttonStyle}
                        startIcon={
                            <Icon sx={{ width: 1 }}>
                                <Avatar
                                    variant="square"
                                    src={Home}
                                    sx={{ width: 18, height: 18 }}
                                />
                            </Icon>
                        }
                    >
                        Overview
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: 20,
                            mx: 1,
                            backgroundColor: "#01F0D0",
                            "&:hover": {
                                backgroundColor: "#01F0D0",
                            },
                        }}
                        startIcon={
                            <Icon sx={{ width: 1 }}>
                                <Avatar
                                    variant="square"
                                    src={Group}
                                    sx={{ width: 24, height: 16 }}
                                />
                            </Icon>
                        }
                    >
                        Patients
                    </Button>
                    <Button
                        variant="contained"
                        sx={buttonStyle}
                        startIcon={
                            <Icon sx={{ width: 1 }}>
                                <Avatar
                                    variant="square"
                                    src={Calendar}
                                    sx={{ width: 18, height: 18 }}
                                />
                            </Icon>
                        }
                    >
                        Schedule
                    </Button>
                    <Button
                        variant="contained"
                        sx={buttonStyle}
                        startIcon={
                            <Icon sx={{ width: 1 }}>
                                <Avatar
                                    variant="square"
                                    src={ChatBubble}
                                    sx={{ width: 21, height: 18 }}
                                />
                            </Icon>
                        }
                    >
                        Message
                    </Button>
                    <Button
                        variant="contained"
                        sx={buttonStyle}
                        startIcon={
                            <Icon sx={{ width: 1 }}>
                                <Avatar
                                    variant="square"
                                    src={CreditCard}
                                    sx={{ width: 22, height: 18 }}
                                />
                            </Icon>
                        }
                    >
                        Transactions
                    </Button>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <CardHeader
                        avatar={<Avatar src={DoctorPfp} />}
                        title="Walter White"
                        subheader="Cook"
                        sx={{
                            borderRadius: 20,
                            "&:hover": {
                                backgroundColor: "#f6f7f8", // Replace with your desired hover color
                            },
                        }}
                    />

                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ height: 50, my: "auto", mx: 1 }}
                    />

                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
}
