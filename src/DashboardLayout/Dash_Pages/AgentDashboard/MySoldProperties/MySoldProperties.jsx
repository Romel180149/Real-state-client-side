import useAllPayment from "../../../../hooks/useAllPayment";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];


const MySoldProperties = () => {
    const [allPayment, refetch] = useAllPayment()
    console.log('All payments', allPayment)
    return (
        <div className="ml-[300px] mt-[90px] min-h-screen w-full px-[40px]">
            <div className="pt-[40px]">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 1200 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Title</StyledTableCell>
                                <StyledTableCell align="right">Location</StyledTableCell>
                                <StyledTableCell align="right">Buyer Name</StyledTableCell>
                                <StyledTableCell align="right">Buyer Email</StyledTableCell>
                                <StyledTableCell align="right">Sold Price</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody  >
                            {allPayment.map((row) => (
                                <StyledTableRow key={row._id}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.Property_title}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.Property_location}</StyledTableCell>
                                    <StyledTableCell align="right">{row.Buyer_name}</StyledTableCell>
                                    <StyledTableCell align="right">{row.Buyer_email}</StyledTableCell>
                                    <StyledTableCell align="right">${row.price}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default MySoldProperties;

