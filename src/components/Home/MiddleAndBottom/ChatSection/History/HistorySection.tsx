import RefreshIcon from "@mui/icons-material/Refresh";
import React, { useEffect, useState } from "react";
import { Box, IconButton, CircularProgress, Typography } from "@mui/material";
import ChatHistoryItem from "./ChatHistoryItem";
import {
    getPreviousChatsCount,
    getPreviousChatsAction,
} from "../../../../../store/actions/chatActions";
import { openAlert } from "../../../../../store/reducers/alertReducer";
import { useDispatch } from "react-redux";

type Message = {
    user: string;
    ai: string;
};

type HistorySectionProps = {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
};

export const HistorySection: React.FC<HistorySectionProps> = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}) => {
    const [msgsLoading, setMsgsLoading] = useState<boolean>(true);
    const [msgsCount, setMsgsCount] = useState<number>(0);
    const [prevMsgs, setPrevMsgs] = useState<Message[]>();
    type PrevMessagesResponse = Message[];

    const dispatch = useDispatch();

    const refresh = async () => {
        setMsgsLoading(true);
        fetchData();
    };

    const fetchData = async () => {
        // console.log("inside fetch data");

        const alertData = {
            content: "Refreshing Messages",
            severity: "info",
        };
        dispatch(openAlert(alertData));

        try {
            // const previousMsgs =
            //     (await getPrevMessages()) as PrevMessagesResponse;
            const previousMsgs =
                (await getPreviousChatsAction()) as PrevMessagesResponse;
            var arrayOfPrevMsgs: Message[] = [];
            // var arrayOfPrevMsgs;

            setTimeout(function () {
                const keys = Object.keys(previousMsgs);

                for (let i = 0; i < keys.length; i++) {
                    const currentPrevMsg = previousMsgs[i];
                    arrayOfPrevMsgs.push(currentPrevMsg);
                }

                // setPrevMsgs([...arrayOfPrevMsgs].reverse());
                arrayOfPrevMsgs = previousMsgs;

                // console.log("history says msgs are", previousMsgs);
                // console.log("history says prev msgs are", arrayOfPrevMsgs);
                if (arrayOfPrevMsgs.length > 0) {
                    setPrevMsgs(arrayOfPrevMsgs.reverse());
                } else {
                    setPrevMsgs([]);
                }

                setMsgsLoading(false);
            }, 2000);

            getCount();

            // console.log("history says msgs are", arrayOfPrevMsgs);
            // console.log(
            //     "history says msgs are",
            //     [...arrayOfPrevMsgs].reverse()
            // );
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const getCount = async () => {
        try {
            // const count = (await getMessageCount()) as number;
            const count = (await getPreviousChatsCount()) as number;

            // console.log("section says count is ", count);

            setMsgsCount(count);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setMsgsLoading(true);
        getCount();
        fetchData();
    }, []);

    return (
        <Box
            sx={{
                marginTop: "0.9%",
                height: horizontalLaptop || verticalPhone ? "90%" : "78%",
                width: "99%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "2px solid #32c4a7",
                borderRadius: "10px",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {/* <HistoryHeader
                    horizontalLaptop={horizontalLaptop}
                    verticalPhone={verticalPhone}
                    horizontalPhone={horizontalPhone}
                /> */}
                <Box
                    sx={{
                        width: "98%",
                        height: "12%",
                        // bgcolor: "purple",
                        marginTop: "0.5%",
                        border: "2px solid #32c4a7",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        color: "white",
                    }}
                >
                    <Box
                        sx={{
                            width: "55%",
                            // bgcolor: "red",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            sx={{ marginLeft: "2%" }}
                            variant={
                                horizontalLaptop
                                    ? "h4"
                                    : verticalPhone
                                    ? "h6"
                                    : "h5"
                            }
                        >
                            Refresh Chats
                        </Typography>
                        <IconButton
                            style={{ color: "white" }}
                            onClick={refresh}
                        >
                            <RefreshIcon fontSize="large" />
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            width: "45%",
                            // bgcolor: "blue",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Typography sx={{ marginRight: "2%" }} variant="h6">
                            Count : {msgsCount ? msgsCount : 0}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "98%",
                        height: "85%",
                        marginTop: "0.5%",
                        border: "2px solid #32c4a7",
                        borderRadius: "10px",
                        overflow: "auto", // Add overflow property
                        flexDirection: "column",
                        alignItems: "center",
                        color: "white",
                        display: "flex", // Use display: flex instead of -webkit-box
                        flexFlow: "column", // Change to flexFlow
                    }}
                >
                    {msgsLoading ? (
                        <CircularProgress />
                    ) : prevMsgs ? (
                        prevMsgs.map((message: Message, index: number) => (
                            <ChatHistoryItem
                                key={index}
                                horizontalLaptop={horizontalLaptop}
                                verticalPhone={verticalPhone}
                                horizontalPhone={horizontalPhone}
                                message={message}
                            />
                        ))
                    ) : (
                        <></>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default HistorySection;
