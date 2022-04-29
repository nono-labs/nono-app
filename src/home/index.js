import React from 'react';
import { makeStyles, Button } from '@material-ui/core'
import TopCollections from './top';
import NFT from '@/components/NFT';
import Images from '@/constant'
import clsx from "clsx";
import TextBtn from '@/components/btn';
export default function Home(props) {
    console.log('home')
    const classes = useStyle();
    return (
        <div>
            <div className={classes.itemCenter}>
                <div className={classes.left}>
                    <div className={classes.title}>Trade to Earn,<br />Keep for More</div>
                    <div className={classes.subTitle}>Buy or sell NFTs to earn $NONO<br />
                        50% trading fee income will be used for $NONO buyback<br />
                        List your NFT or explore the market to get started</div>
                    <div className={classes.box}>
                        <TextBtn className={classes.btnSpace} onClick={() => { }} text={'List an NFT'} />
                        <TextBtn text={'Explore NFTs'} />
                    </div>
                </div>
                <NFT />
            </div>
            <TopCollections />
            <div className={classes.itemCenter}>
                <div className={classes.left}>
                    <div className={clsx(classes.title, classes.titleBottom)}>Ready to Get Your Rewards?</div>
                    <div className={classes.subTitle}>
                        Our Users Should Be Our Holders,<br />
                    And They All Deserves Our Profit Shares.
                    </div>
                    <div className={classes.box}>
                        <TextBtn className={classes.btnSpace} onClick={() => { }} text={'Claim Your Rewards'} />
                        <TextBtn text={'Learn More'} />
                    </div>
                </div>
                <img className={classes.rewardImg} src={Images.rewardBanner} />

            </div>
        </div>
    )
};

const useStyle = makeStyles((theme) => ({
    itemCenter: {
        background: '#fff',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '69px 50px 69px 100px',
        alignItems: 'center',
        flexWrap: 'wrap',
        [theme.breakpoints.down('md')]: {
            padding: theme.custom.palette.mdspacing,
        },
    },
    box: {
        flex: 1,
        [theme.breakpoints.between('sm', 'md')]: {
            display: 'flex',
            flexDirection: 'column',
            '& button': {
                fontSize: '14px',
                marginBottom: theme.custom.palette.mdspacing,

            }
        },
    },
    left: {
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.custom.palette.mdspacing,
        },
    },
    title: {
        fontFamily: 'Archivo Black',
        fontWeight: 400,
        fontSize: '36px',
        lineHeight: '54px',
        color: '#000000',
        paddingBottom: '50px',
        [theme.breakpoints.down('md')]: {
            paddingTop: '30px',
            paddingBottom: '23px',
        },
    },
    titleBottom: {
        [theme.breakpoints.down('md')]: {
            paddingTop: '0px',
        },
    },
    subTitle: {
        fontFamily: 'Barlow',
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '27px',
        color: '#333333',
        paddingBottom: '50px',
        [theme.breakpoints.between('sm', 'md')]: {
            paddingBottom: theme.custom.palette.mdspacing,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            paddingBottom: '13px',
        },
    },
    rewardImg: {
        marginRight: '50px',
        [theme.breakpoints.down('md')]: {
            marginRight: 50,
        },
    },
    btnSpace: {
        marginRight: '50px',
        [theme.breakpoints.down('md')]: {
            marginRight: '20px',
        },
    }
}))