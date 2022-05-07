import React, { useState } from 'react';
import { makeStyles, withStyles, Grid, Typography, Switch, InputBase, Hidden, MenuItem } from '@material-ui/core'
import Images from '@/constant'

import Select from '@/components/select'
export default function FilterItem(props) {
    const classes = useStyle();
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [sort, setSort] = React.useState(10);

    const minPriceChange = ev => {
        setMinPrice(Number(ev.target.value));
    };
    const maxPriceChange = ev => {
        setMaxPrice(Number(ev.target.value));
    };
    const handleChange = ev => {
        console.log(ev, 'ev')
        setSort(ev);

    }
    return (
        <>

            <Grid justifyContent="space-between" container>
                <Typography className={classes.filterBox}>
                    <img className={classes.filter} src={Images.filter} />
                    <div className={classes.filterItem}>
                        Buy Now
                            <IOSSwitch />
                        <div className={classes.priceBox}>
                            <span>Price Range</span>
                            <BootstrapInput value={minPrice} onChange={minPriceChange} placeholder="Min" />
                            <img src={Images.eth} />
                            <BootstrapInput value={maxPrice} onChange={maxPriceChange} placeholder="Max" />
                        </div>
                    </div>
                </Typography>
                <Typography className={classes.grew}>
                    <div className={classes.itemsTotal}>13,495 items</div>
                    <Select
                        value={sort}
                        className={classes.select}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                    />
                </Typography>
            </Grid>
    
            </>
    )
};
const BootstrapInput = withStyles((theme) => ({
    input: {
        borderRadius: 50,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '2px solid #62929E',
        color: theme.palette.secondary.main,
        height: 32,
        width: '100px',
        boxSizing: 'border-box',
        fontFamily: 'Barlow',
        fontWeight: 600,
        fontSize: '14px',
        textAlign: 'center',
        '&:focus': {
            borderColor: theme.palette.secondary.main,
        },
    },
}))(InputBase);
const IOSSwitch = withStyles((theme) => ({
    marginBottom: 0,

    root: {
        width: 42,
        height: 26,
        padding: 0,
        marginLeft: 15,
        marginBottom: 0,

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
        color: '#000',
        display: 'flex',
        alignItems: 'center',
    },
    priceBox: {
        marginLeft: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 0,
        '& span': {
            paddingRight: 15,
        },
        '& img': {
            width: '18px',
            margin: '0 4px',
        }
    },
    itemsTotal: {
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '32px',
        marginRight: '50px',

    },
    grew: {
        display: 'flex', 
        alignItems: 'center'
    },
    select: {
        width: '200px',

        root: {
            width: '200px',
            border: '2px solid #62929E',
            borderRadius: '50px',
            backgroundColor: theme.palette.common.white,

        },
        input: {
            borderRadius: '50px',
            backgroundColor: theme.palette.common.white,
            '&:focus': {
                borderRadius: '50px',
            },
        },
        select: {
            borderRadius: '50px',
        },
        selectMenu: {
            borderRadius: '50px',
            background: 'red'
        },
       
        
    }



}))