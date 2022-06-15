import Images from "@/constant";
import { Box, CircularProgress, makeStyles } from "@material-ui/core";
import React from "react";
export default function LoadingItem(props) {
    const classes = useStyle();
    return (
        <>
            {!props?.loading && (
                <Box className={classes.noData}>
                    <img src={Images.noData} />
                </Box>
            )}
            {
                props?.loading && <Box key="loader" className={classes.loading}>
                    <CircularProgress />
                </Box>
            }
        </>
    );
}
const useStyle = makeStyles((theme) => ({
    loading: {
        textAlign: "center",
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    noData: {
        display: "flex",
        justifyContent: "center",
        paddingTop: 100,
    },
}));
