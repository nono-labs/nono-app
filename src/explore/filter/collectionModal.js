import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    makeStyles,
    Typography,
    InputBase,
    Chip,
    Box,
    ClickAwayListener,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    withStyles,
    Grid,
    Button
} from "@material-ui/core";
import Images from "@/constant";
import { useTheme } from "@material-ui/styles";
import {
    Close as CloseIcon,
    Search as SearchIcon,
    CloseOutlined as CloseOutlinedIcon
} from "@material-ui/icons";
import FaceIcon from '@material-ui/icons/Face';

// import WalletConnectProvider from '@walletconnect/web3-provider'

const CollectionModal = (props) => {
    const { open, setOpen } = props;
    const theme = useTheme();
    const [isFocussed, setFocussed] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    // const [open, setOpen] = useState(true);
    const classes = useStyles();
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
    ];
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onSearch = (event) => {
        setFocussed(true);
        if (event.key === "Enter") {
            console.log(12412412)

        }
    }
    const onSearchCancel = () => {
        setSearchTerm("");
        setFocussed(false);
    };
    const onFocusLoss = () => {
        setFocussed(false);
    }
    return (
        <Dialog
            onClose={handleClose}
            open={open}
            classes={{ root: classes.Dialog, paper: classes.paper }}
        >
            <DialogContent
                style={{ padding: "50px" }}
                classes={{ root: classes.DialogContent }}
            >
                <header>
                    <Typography classes={{ root: classes.title }}>
                        Collection
                    </Typography>
                    <CloseIcon
                        onClick={handleClose}
                        classes={{ root: classes.closeIcon }}
                    />
                </header>
                <div className={classes.filterBox}>
                    {<Chip color="default" variant="outlined" icon={<img src={Images.filter1} />} deleteIcon={<img src={Images.deleteIcon} />} className={classes.chip} label={"Min. Price:" + 1} onDelete={() => { }} />}
                    {<Chip color="default" variant="outlined" icon={<img src={Images.filter1} />} deleteIcon={<img src={Images.deleteIcon} />} className={classes.chip} label={"Min. Price:" + 1} onDelete={() => { }} />}
                </div>
                <ClickAwayListener onClickAway={onFocusLoss}>

                    <Box
                        className={classes.search}
                        borderRadius={theme.shape.borderRadius}
                        bgcolor={
                            isFocussed
                                ? theme.palette.background.default
                                : theme.palette.background.highlight
                        }
                        boxShadow={isFocussed ? 2 : 0}
                        height={"3rem"}
                    >
                        <div className={classes.searchIcon}>
                            <SearchIcon htmlColor={'#000'} />
                        </div>
                        <InputBase
                            placeholder="Search"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                            value={searchTerm}
                            onClick={() => setFocussed(true)}
                            inputProps={{ "aria-label": "search" }}
                            onChange={event => setSearchTerm(event.target.value)}
                            onKeyDown={onSearch}
                        />
                        {isFocussed ? (
                            <IconButton hidden={!isFocussed} onClick={onSearchCancel}>
                                <CloseOutlinedIcon htmlColor={theme.custom.palette.noteBackground.default} />
                            </IconButton>
                        ) : null}
                    </Box>
                </ClickAwayListener>
                {/* <Card  className={classes.root}> */}
                    <Table classes={{ root: classes.head }} aria-label="caption table">
                        <caption style={{ padding: 0 }}><Grid justifyContent="center" direction="row" alignItems="center" container><Button className={classes.buttonAsset}>Apply</Button></Grid></caption>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Collection</StyledTableCell>
                                <StyledTableCell>Floor Price</StyledTableCell>
                                <StyledTableCell>24h Volume</StyledTableCell>
                                <StyledTableCell>Set Traits</StyledTableCell>
                                <StyledTableCell>Add to Filter</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <StyledTableCell>
                                        <div className={classes.grow}>
                                        <FaceIcon />{row.name}

                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell>{row.calories}</StyledTableCell>
                                    <StyledTableCell>{row.fat}</StyledTableCell>
                                    <StyledTableCell>{row.carbs}</StyledTableCell>
                                    <StyledTableCell>{row.protein}</StyledTableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                {/* </Card> */}

            </DialogContent>
        </Dialog>
    );
};
export default CollectionModal;

const useStyles = makeStyles((theme) => ({
    Dialog: {
        margin: "0 auto",
    },
    paper: {
        maxWidth: '800px',
    },
    DialogContent: {
        fontFamily: "Archivo Black",
        color: "#000",
        "& header": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "30px",
            fontFamily: "Archivo Black",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "24px",
            "& .title": {
                fontSize: "24px",
            },
        },
    },
    title: {
        fontSize: "24px",
    },
    closeIcon: {
        fontSize: "24px",
        color: "#000",
        cursor: "pointer",
        fontWeight: 'bold'
    },
    grow: {
        display: "flex",
    },
    filterBox: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Barlow',
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '32px',
    },
    chip: {
        background: '#fff',
        border: '0.5px solid #000000',
        boxSizing: 'border-box',
        borderRadius: '50px',
        marginBottom: 0,
        marginRight: 15,
        root: {
            background: '#fff',
        },
        select: {
            background: '#fff',
        },
    },
    search: {
        display: "flex",
        justifyContent: "center",
        maxWidth: "100%",
        height: '40px',
        marginTop: '30px',
        border: '2px solid #000000',
        boxSizing: 'border-box',
        borderRadius: '10px',
        background: '#fff',
        transition: theme.transitions.create("all", {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest
        }),
    },
    searchIcon: {
        width: theme.spacing(7),
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        flex: 1,
        alignItems: "center"
    },
    inputInput: {
        width: "100%",
        color: '#000'
    },
    buttonAsset: {
        background: '#000',
        color: '#fff',
        marginTop: '30px',
        '&:hover': {
            background: '#000',
        }
    }
}));
const StyledTableCell = withStyles((theme) => ({
    head: {
        fontFamily: 'Barlow',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '14px',
        borderBottom: 0,
        padding: '14px',
    },
    body: {
        fontFamily: 'Barlow',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '18px',
        borderBottom: 0,
        padding: '9px',
        alignItems: 'center',
    },
}))(TableCell);