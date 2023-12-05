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

      const handleDelete = async (id) => {
        const shouldDelete = window.confirm("คุณแน่ใจหรือไม่ที่ต้องการลบบัญชีผู้ใช้งานนี้?");
        if (shouldDelete) {
          try {
            await axios.delete('https://cautious-pink-panama-hat.cyclic.app/userdel/' + id)
            window.location = '/chalothon/yangbot_frontend/menu1'
            alert("ลบบัญชีผู้ใช้งานเรียบร้อย")
          } catch (err) {
            console.log(err);
          }
        }
      }
      
      const handleUpdate = id => {
        window.location = '/chalothon/yangbot_frontend/userupdate/' + id
      }

      const [file, setFile] = useState(null);

      const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };
    
      const handleUpload = async () => {
        const formData = new FormData();
        formData.append('import-excel', file);
    
        try {
          const response = await axios.post('https://cautious-pink-panama-hat.cyclic.app/import-excel', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    
          // ทำอะไรกับผลลัพธ์หลังจากอัปโหลดไฟล์ Excel สำเร็จ เช่นแสดงข้อความ "อัปโหลดสำเร็จ"
          alert ("อัพโหลดสำเร็จ")
          console.log(response.data);
        } catch (error) {
          // ทำอะไรเมื่อมีข้อผิดพลาด เช่นแสดงข้อความ "เกิดข้อผิดพลาดในการอัปโหลด"
          console.error('เกิดข้อผิดพลาดในการอัปโหลด:', error);
        }
      };

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
          <div>
            <input type="file" onChange={handleFileChange}  />
            <Button variant="contained" onClick={handleClickOpen} startIcon={<DocumentScannerIcon/>} style={{ fontSize: '14px' ,backgroundColor: '#6CAB84', color: 'white' , margin: '10px'}}>ตัวอย่างไฟล์ Excel</Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
              {"ตัวอย่างไฟล์ Excel ที่ถูกต้องสำหรับ Import"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
              <img 
                src="https://sv1.picz.in.th/images/2023/10/31/ddnjQVe.jpeg"
                alt="excel_ex"
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
             <Button  variant="contained" onClick={handleClose}>OK</Button>
             
            </DialogActions>
            </Dialog>
            <Button  variant="contained" onClick={handleUpload} startIcon={<PostAddIcon/>} style={{ fontSize: '14px' ,backgroundColor: '#6CAB84', color: 'white'}}>import Excel</Button>
          </div>
          
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
                    <TableCell align="right" > 
                      <Link href="createuser" >  
                        <Button variant="contained" startIcon={<AddCircleIcon/>} color='success'  style={{ fontSize: '16px' ,backgroundColor: '#6CAB84', color: 'white'}}>
                            สร้างบัญชีนักวิจัย
                        </Button>
                      </Link>
                      <Link href="createfarmer" >  
                        <Button variant="contained" startIcon={<AddCircleIcon/>} color='success'  style={{ fontSize: '16px' ,backgroundColor: '#6CAB84', color: 'white'}}>
                            สร้างบัญชีเกษตรกร
                        </Button>
                      </Link>
                      
                    </TableCell>
                    
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
                <TableCell align="right">{<img src={'https://cautious-pink-panama-hat.cyclic.app/images/'+ row.image} alt='Image' className='visitor_image'/>}</TableCell>
                <TableCell align="right" style={{ fontSize: '16px' }}>{row.email}</TableCell>
                  
                <TableCell align="right"  style={{ fontSize: '16px' }}>{row.fname}</TableCell>
                <TableCell align="right"  style={{ fontSize: '16px' }}>{row.lname}</TableCell>
                <TableCell align="right"  style={{ fontSize: '16px' }}>{row.age}</TableCell>
                <TableCell align="right"  style={{ fontSize: '16px' }}>{row.phone}</TableCell>
                <TableCell align="right"  style={{ fontSize: '16px' }}>{row.work}</TableCell>
                <TableCell align="right" >
                <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end">
                   <Button   spacing={1} variant="contained" endIcon={<EditIcon />}   onClick={() => handleUpdate(row.id)} style={{ fontSize: '16px',backgroundColor: '#6CAB84', color: 'white'}}>
                      แก้ไข
                    </Button>
                    <Button variant="contained" startIcon={<DeleteIcon />} onClick={ e => handleDelete(row.id)}  style={{ fontSize: '16px',backgroundColor: '#6CAB84', color: 'white'}}>
                      ลบบัญชีนักวิจัย
                    </Button>
                    
                  </Stack>
                </TableCell>
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