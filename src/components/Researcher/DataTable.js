import React,{useState,useEffect}  from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import  "../../Style.css"
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function ResearcherLog() {

    const [items, setItems] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

    
    useEffect(() => {
        UserGet()
      }, [])

      const UserGet = () => {
        fetch("https://cautious-pink-panama-hat.cyclic.app/userlog")
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          }
        )
      }

      
      
      

      const searchFilter = (items, searchText) => {
        return items.filter((item) =>
          item.email.toLowerCase().includes(searchText.toLowerCase()) ||
          item.fname.toLowerCase().includes(searchText.toLowerCase()) ||
          item.lname.toLowerCase().includes(searchText.toLowerCase())
        );
      };

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <React.Fragment>
      <CssBaseline />
      <div className="card shadow mb-4">
        <div className="card-header py-3 card-header py-3 d-flex justify-content-between">
          <h4 className="m-0 font-weight-bold text-primary">
            บัญชีนักวิจัยในระบบ
          </h4>        
        </div>
        <div className="card-body">  
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end">
        <input
                          type="text"
                          placeholder="ค้นหา..."
                          value={searchText}
                          class="form-control "
                          onChange={(e) => setSearchText(e.target.value)}
                 />
            </Stack>   
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead  style={{ fontSize: '16px',backgroundColor: '#EAEAEA', color: 'white'}}>
              
                <TableRow>
                    <TableCell style={{ fontSize: '20px' }}>ID</TableCell>
                    <TableCell style={{ fontSize: '20px' }}>รูปประจำตัว</TableCell>
                    <TableCell align="right" style={{ fontSize: '20px' ,color:'#3B3B3B'}}>อีเมล</TableCell>
                    <TableCell align="right" style={{ fontSize: '20px' ,color:'#3B3B3B'}}>ชื่อ</TableCell>
                    <TableCell align="right" style={{ fontSize: '20px' ,color:'#3B3B3B'}}>นามสกุล</TableCell>
                    <TableCell align="right" style={{ fontSize: '20px' ,color:'#3B3B3B'}}>อายุ</TableCell>
                    <TableCell align="right" style={{ fontSize: '20px' ,color:'#3B3B3B'}}>หมายเลขโทรศัพท์</TableCell>
                    <TableCell align="right" style={{ fontSize: '20px' ,color:'#3B3B3B'}}>สังกัด</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {searchFilter(items, searchText).map((row, index) => (
            <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell   style={{ fontSize: '16px' }} component="th" scope="row">
                {index + 1} 
                </TableCell>
                <TableCell align="right">{<img src={'http://localhost:3333/images/'+ row.image} alt='Image' className='visitor_image'/>}</TableCell>
                <TableCell align="right" style={{ fontSize: '16px' }}>{row.email}</TableCell>          
                <TableCell align="right"  style={{ fontSize: '16px' }}>{row.fname}</TableCell>
                <TableCell align="right"  style={{ fontSize: '16px' }}>{row.lname}</TableCell>
                <TableCell align="right"  style={{ fontSize: '16px' }}>{row.age}</TableCell>
                <TableCell align="right"  style={{ fontSize: '16px' }}>{row.phone}</TableCell>
                <TableCell align="right"  style={{ fontSize: '16px' }}>{row.work}</TableCell>
            </TableRow>
          ))}
            </TableBody>
            </Table>
            </TableContainer>
            </div>
            </div>
    </React.Fragment>
    </Box>
    
  );
}