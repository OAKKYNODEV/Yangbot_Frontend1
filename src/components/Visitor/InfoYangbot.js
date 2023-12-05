import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import "../../Style.css"

function InfoYangbot() {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
      };
  
      const handleClose2 = () => {
        setOpen2(false);
      };
  

  return (
    
      <div className="row">
        <div className="col-xl-8 col-lg-5">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Yangbot คืออะไร ?
              </h6>
            </div>
            <div className="card-body">
              <span >ในยุคที่เทคโนโลยีคือหัวใจสำคัญของการใช้ชีวิต Yangbot หรือ ยางบอท มีหน้าที่  จัดการข้อมูลและการแสดงผลข้อมูลให้กับผู้ใช้
                    เกิดขึ้นเพื่อตอบโจทย์ความ ต้องการในการจัดการข้อมูล และมีประสิทธิภาพ ในบทบาทของนักวิจัยที่ต้องการจัดการและสรุปสถานะของข้อมูล และเพื่อให้นักวิจัยใช้ชุดข้อมูลภาพถ่าย กำหนดโรค และวิเคราะห์ภาพรวมได้
                    
              </span>
            </div>
          </div>
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                กลไกการทำงานของระบบ
              </h6>
            </div>
            <div className="card-body">
            <img src={process.env.PUBLIC_URL + '/images/info.jpeg'} alt="info"  border="0" onClick={handleClickOpen}  
                style={{ cursor: 'pointer' }}/>
            </div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
              {"คุณสมบัติของแอปพลิเคชัน"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
              <li>วิเคราะห์โรคใบยางโดยใช้ภาพถ่ายจากธรรมชาติโดยตรง</li>
              <li>สามารถตอบคำถามผู้ใช้งานได้</li>
              <li>ไม่ขึ้นกับรุ่นโทรศัพท์เพราะเป็น LINE Bot</li>
              <li>เก็บรูปภาพที่ผู้ใช้งานส่งให้กับบอทเพื่อวิเคราะห์โรคใบยางลง Google Drive </li>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
             <Button  variant="contained" onClick={handleClose}>OK</Button>
             
            </DialogActions>
            </Dialog>
          </div>
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                เพิ่มเพื่อนกับ LineBot
              </h6>
            </div>
            <div className="card-body text-center">
                <a href="https://line.me/R/ti/p/%40244fehmv">
                    <img src={process.env.PUBLIC_URL + '/images/QR-YANGBOT.jpg'} alt="Qr" />
                </a>  
                <h2>LineID:@244fehmv</h2>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-7">
        <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                ตัวอย่างการทำงาน LineBot
              </h6>
        </div>
        
        <img src={process.env.PUBLIC_URL + '/images/ex.jpeg'}
          alt="excel_ex"
           />
        </div>
        </div>
      </div>
    
  );
}

export default InfoYangbot;
