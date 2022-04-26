import React from 'react';
import { makeStyles,withStyles, Grid, Typography, Switch } from '@material-ui/core'
import Images from '@/constant'

export default function FilterItem(props) {
    const classes = useStyle();
    return (
        <div className={classes.box}>
            <Grid justifyContent="space-between" container>
                <div className={classes.filterBox}>
                    <img className={classes.filter} src={Images.filter} />
                    <div className={classes.filterItem}>
                        <div>
                            Buy Now
                            <IOSSwitch />
                        </div>
                        <div>132131</div>
                    </div>
                </div>
                <Typography>
                    31231
                </Typography>
            </Grid>
        </div>
    )
};
const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        marginLeft: 15
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#62929E',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#62929E',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});
const useStyle = makeStyles((theme) => ({
    box: {
        flex: 1,
        background: '#fff',
        borderRadius: '20px',
        padding: '30px',
    },
    filterBox: {
        display: 'flex',
        alignItems: 'center',

    },
    filter: {
        width: '32px',
        marginRight: '30px',

    },
    filterItem: {
        fontFamily: 'Barlow',
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '32px',
        color: '#000'
    }



}))