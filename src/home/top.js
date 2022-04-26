import React from 'react';
import { Card, CardContent, withStyles, Typography, Grid, CardHeader, makeStyles, Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
export default function TopCollections(props) {
    console.log('home')
    const classes = useStyle();
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Azuki', 356, 16.0, 49, 3.9),
        createData('Azuki1', 356, 16.0, 49, 3.9),
        createData('Azuki2', 356, 16.0, 49, 3.9),

    ];
    return (
        <Card variant="outlined" className={classes.root}>
            <Typography style={{ textAlign: 'center' }} className={classes.title} >Top Collections</Typography>
                <Table classes={{root: classes.head}} aria-label="caption table">
                    <caption style={{padding: 0}}><Grid justifyContent="center" direction="row" alignItems="center" container><Button className={classes.buttonAsset}>View All</Button></Grid></caption>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Collection</StyledTableCell>
                            <StyledTableCell>Floor</StyledTableCell>
                            <StyledTableCell>24h Vol</StyledTableCell>
                            <StyledTableCell>Total Vol</StyledTableCell>
                            <StyledTableCell>Owner</StyledTableCell>
                            <StyledTableCell>Item</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell>{row.calories}</StyledTableCell>
                                <StyledTableCell>{row.fat}</StyledTableCell>
                                <StyledTableCell>{row.carbs}</StyledTableCell>
                                <StyledTableCell>{row.protein}</StyledTableCell>
                                <StyledTableCell>{row.protein}</StyledTableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

        </Card>
    )
};

const useStyle = makeStyles((theme) => ({
    root: {
        borderRadius: '20px',
        background: '#fff',
        padding: '100px',
        margin:`${theme.custom.palette.defaultspacing} 0px`,

    },
    title: {
        fontFamily: 'Archivo Black',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '36px',
        lineHeight: '36px',
        textAlign: 'center',
        marginBottom: theme.custom.palette.defaultspacing,
    },
    buttonAsset: {
        background: '#000',
        color: '#fff',
        marginTop: '100px',
        '&:hover': {
            background: '#000',
        }
    },
}))

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontFamily: 'Barlow',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    borderBottom: '1px solid #000',
    padding: '14px',
  },
  body: {
    fontFamily: 'Barlow',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    borderBottom: '1px solid #000',
    padding: '14px',
  },
}))(TableCell);
