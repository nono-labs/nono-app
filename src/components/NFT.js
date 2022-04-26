import React from "react";
import { makeStyles, Card, CardContent, CardMedia, Typography, Grid, ImageListItem, ImageListItemBar, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Images from '@/constant';
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        borderRadius: '10px',
        border: '1px solid #000000',
        position: 'relative',
        [theme.breakpoints.between('sm', 'md')]: {
            maxWidth: 260,
        },
    },
    CardContent: {
        padding: theme.custom.palette.mdspacing,
        [theme.breakpoints.between('sm', 'md')]: {
            padding: theme.custom.palette.smspacing,
        },
    },
    collection: {
        fontFamily: 'Barlow',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '18px',
        display: 'flex',
        '& img': {
            margin: '0 5px'
        }
    },
    controls: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    unlisted: {
        fontSize: '14px',
        fontWeight: 400,
    },
    author: {
        fontFamily: 'Barlow',
        fontStyle: 'italic',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '18px',
        color: '#62929E',
        cursor: 'pointer'

    },
    offer: {
        fontSize: '14px',
        marginBottom: 0,
    },
    iconBox: {
        padding: '5px 10px 5px 7px',
        borderRadius: '30px',
        background: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        right: '10px',
        bottom: '3px',
        '& span': {
            marginLeft: '5px',
            fontFamily: 'Barlow',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '18px',
            color: '#FF2E2E',
            opacity: 1,
        },
     
    },
    icon: {
        padding: 0,
       
    }

}));
export default function NFT(props) {

    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.root}>
            <div style={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    alt="image error"
                    height="300"
                    image={Images.nft}
                />
                <Typography className={classes.iconBox}>
                    <IconButton  className={classes.icon}>
                        <FavoriteIcon width={18} htmlColor={'#FF2E2E'} />
                    </IconButton>
                    <span>265</span>
                </Typography>
            </div>

            {/* <FavoriteIcon htmlColor={'#FF2E2E'} /> */}
            <CardContent className={classes.CardContent}>
                <div className={classes.controls}>
                    <Typography noWrap className={classes.collection} paragraph>
                        Crypto Cannabis Club Crypto Cannabis Club
                    </Typography>
                    <Typography className={classes.collection} paragraph>
                        <img src={Images.eth} />
                        1.71
                    </Typography>
                    {/* <Typography className={clsx(classes.collection,classes.unlisted)} paragraph>
                    Unlisted
                </Typography> */}
                </div>
                <Grid justifyContent="space-between" direction="row" alignItems="center" container>
                    <Typography variant="body1" component="body1" className={classes.author} >
                        Mfers
                    </Typography>
                    <Typography className={clsx(classes.collection, classes.offer)} >
                        offer
                        <img src={Images.weth} />
                        1.62
                    </Typography>
                </Grid>
            </CardContent>
        </Card>
    )
}