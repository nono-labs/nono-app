import React, { useState } from 'react';
import { makeStyles, withStyles, Grid, Typography, Chip, InputBase, TextField, MenuItem } from '@material-ui/core'
import Images from '@/constant'

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
            <Grid className={classes.box} justifyContent="space-between" container>
                <Typography className={classes.filterBox}>
                    <span>Collection</span>
                    <div>
                  <Typography
                    paragraph
                    style={{  fontWeight: "bold" }}
                    align="left"
                  >
                    {<Chip style={{marginRight:10,marginBottom:10}} label={"Min. Price:"+1} onDelete={() => setMinPrice("")} color="primary" /> }
                    {<Chip style={{marginRight:10,marginBottom:10}} label={"Max. Price:"+2} onDelete={() => setMaxPrice("")} color="primary" />}
                  </Typography>
                </div>
              </Typography>
            </Grid>
    )
};


const useStyle = makeStyles((theme) => ({
    box: {
        marginTop: 20
    }, 
    filterBox: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Barlow',
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '32px',
        paddingLeft: 62,
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