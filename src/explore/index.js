import React from 'react';
import { makeStyles, withStyles, Grid, Typography, Switch, InputBase, TextField, MenuItem } from '@material-ui/core'
import FilterPrice from './filter/price';
import FilterCollection from './filter/collection';
import NFT from '@/components/NFT';
export default function Explore(props) {
    const classes = useStyle();

    console.log('Explore')
    return (
        <>
            <div className={classes.root}>
                <FilterPrice />
                <FilterCollection />
            </div>
            <Grid
                container
                direction="row"
                alignItems="stretch"
                item
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, 300px)",
                    justifyContent: "space-between",
                }}
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
}))