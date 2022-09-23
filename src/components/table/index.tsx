import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export interface IColumn {
  key:string,
  text:string
}

export interface IRow {
  id:string|number,
  data:ICell[]
}

export interface ICell {
  key:string,
  value:any
}

export interface ITableProps {
  columns:IColumn[],
  rows:IRow[],
  onRowClick: React.MouseEventHandler,
  maxWidth?:string,
  isSelectTable?: boolean
}


const CustomTable:React.FunctionComponent<ITableProps> = ({columns, rows, onRowClick, maxWidth = '80%', isSelectTable=false}) => {
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
    '&': {
      cursor: isSelectTable ? 'pointer' : 'cursor',
    },
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.focus,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  return (
    <TableContainer sx={{ maxWidth: maxWidth, maxHeight: '70vh' }} component={Paper}>
      <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map(column => <StyledTableCell key={column.key} align="center" id={column.key}>{column.text}</StyledTableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id} id={row.data.find(cell=>cell.key==='id')?.value} onClick={onRowClick}>
              {row.data.map(cell=><StyledTableCell key={cell.key} align="center">{cell.value}</StyledTableCell>)}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;