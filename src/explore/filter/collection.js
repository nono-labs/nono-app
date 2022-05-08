import React, { useState } from 'react';
import { makeStyles, withStyles, Grid, Typography, Chip, IconButton, TextField, MenuItem } from '@material-ui/core'
import Images from '@/constant'
import FaceIcon from '@material-ui/icons/Face';
import CollectionModal from './collectionModal'
export default function FilterItem(props) {
    const classes = useStyle();
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [sort, setSort] = React.useState(10);
    const [open, setOpen] = React.useState(false);

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
            <div className={classes.filterBox}>
                <span>Collection</span>
                {<Chip color="default" variant="outlined" icon={<img src={Images.filter1} />} deleteIcon={<img src={Images.deleteIcon} />} className={classes.chip} label={"Min. Price:" + 1} onDelete={() => setMinPrice("")} />}
                {<Chip color="default" variant="outlined" icon={<FaceIcon />} deleteIcon={<img src={Images.deleteIcon} />} className={classes.chip} label={"Max. Price:" + 2} onDelete={() => setMaxPrice("")} />}
                <IconButton onClick={()=>setOpen(true)} classes={{ root: classes.addIcon }}>
                    <img src={Images.addIcon} />
                </IconButton>
            </div>
            <CollectionModal open={open} setOpen={setOpen} />
        </Grid>
    )
};


const useStyle = makeStyles((theme) => ({
    box: {
        marginTop: 20,
    },
    filterBox: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '18px',
        lineHeight: '32px',
        paddingLeft: 62,
    },
    chip: {
        background: '#fff',
        border: '0.5px solid #000000',
        boxSizing: 'border-box',
        borderRadius: '50px',
        marginBottom: 0,
        marginLeft: 15,
        root: {
            background: '#fff',

        },
        select: {
            background: '#fff',

        }
    },
    addIcon: {
        padding: 0,
        marginLeft: 15,
    },
}))