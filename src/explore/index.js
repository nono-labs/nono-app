import React from 'react';
import { makeStyles, withStyles, Grid, Hidden, Switch, InputBase, TextField, MenuItem } from '@material-ui/core'
import FilterPrice from './filter/price';
import FilterCollection from './filter/collection';
import NFT from '@/components/NFT';
export default function Explore(props) {
    const classes = useStyle();

    console.log('Explore')
    return (
        <>
            <Hidden xsDown>
                <div className={classes.root}>
                    <FilterPrice />
                    <FilterCollection />
                </div>

            </Hidden>
            <Grid
                container
                direction="row"
                alignItems="stretch"
                item
                className={classes.grid}

            >
                {
                    [...Array(10)].map((item, index) => <NFT style={{ border: '0' }} key={index} />)
                }
            </Grid>
        </>
    )
}
const useStyle = makeStyles((theme) => ({
    root: {
        flex: 1,
        background: '#fff',
        borderRadius: '20px',
        padding: '30px',
        marginBottom: '30px',
    },
    grid: {
        display: "grid",
        justifyContent: "space-between",
        gridTemplateColumns: "repeat(auto-fill, 300px)",

        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: "repeat(auto-fill, 260px)",
        },
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: "repeat(auto-fill, 190x)",
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "repeat(auto-fill, 315px)",
        },
    }
}))