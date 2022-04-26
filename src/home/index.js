import React from 'react';
import { makeStyles, Button } from '@material-ui/core'
import TopCollections from './top';
import NFT from '@/components/NFT';
import Images from '@/constant'

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
                        <Button  component="span" textAllCaps={false} disableRipple={true} classes={{ root: classes.buttonAsset }}>List an NFT</Button>
                        <Button  component="span" disableRipple={true} >Explore NFTs</Button>
                    </div>
                </div>
                <NFT />
            </div>
            <TopCollections />
            <div className={classes.itemCenter}>
                <div className={classes.left}>
                    <div className={classes.title}>Ready to Get Your Rewards?</div>
                    <div className={classes.subTitle}>
                    Our Users Should Be Our Holders,<br />
                    And They All Deserves Our Profit Shares.
                    </div>
                    <div className={classes.box}>
                        <Button   textAllCaps={false} disableRipple={true} classes={{ root: classes.buttonAsset }}>Claim Your Rewards</Button>
                        <Button disableRipple={true}>Learn More</Button>
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
        [theme.breakpoints.between('sm', 'md')]: {
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
    title: {
        fontFamily: 'Archivo Black',
        fontWeight: 400,
        fontSize: '36px',
        lineHeight: '54px',
        color: '#000000',
        paddingBottom: '50px',
        [theme.breakpoints.between('sm', 'md')]: {
            paddingBottom: theme.custom.palette.mdspacing,
            fontSize: '24px',

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
    },
    buttonAsset: {
        background: '#000',
        color: '#fff',
        marginRight: '30px',
        '&:hover': {
            background: '#000',
        }
    },
    rewardImg: {
       marginRight: '237px', 
    }
}))