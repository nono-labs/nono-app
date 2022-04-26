import React from 'react';
import { makeStyles, withStyles, Grid, Typography, Switch, InputBase, TextField, MenuItem } from '@material-ui/core'

import FilterPrice from './filter/price';
import FilterCollection from './filter/collection';

export default function Explore(props) {
    const classes = useStyle();

    console.log('Explore')
    return (
        <div className={classes.root}>
           <FilterPrice  />
           <FilterCollection />
        </div>
    )
} 
const useStyle = makeStyles((theme) => ({
    root: {
        flex: 1,
        background: '#fff',
        borderRadius: '20px',
        padding: '30px',
    },
}))