import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Upload2 = () => {
      const [data, setData] = useState({
        image:''
    })
    const navigate =useNavigate();
    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData ();
        formdata.append("image", data.image)
        axios.post("https://cautious-pink-panama-hat.cyclic.app/uploadimg", formdata) 
        .then(res => {
            window.location.reload();
            alert(`อัพโหลดรูปภาพเรียบร้อย`);
        })
        .catch(err => console.log(err));
    }

  return (
    <>
      
        <div className="card-header py-3">
          <h4 className="m-0 font-weight-bold text-primary">
            อัพโหลดรูปภาพ
          </h4>
        </div>
        <form class="row g-3 w-50" onSubmit={handleSubmit}>
        <div class="col-12 mb-3">
                <label  class='form-label' for="inputGroupFile01">กรุณาเลือกรูปภาพ</label>
                <input type="file" class="form-control" id="inputGroupFile01" 
                onChange={e => setData({...data, image: e.target.files[0]})}/>
         </div>
         <div className='col-12'>
              <button type='submit' className='btn btn-primary'>อัพโหลด</button>
        </div>
        </form>
      
      
    </>
    
  );
}

export default Upload2;
