import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




export default function CreateFarmer() {
    
  const [data, setData] = useState({
    username: "",
    email:'',
    password:'',
    fname:'',
    lname:'',
    address:'',
    state:'',
    postalcode:'',
    dateofbirth:'',
    sex:'',
    phone:'',
    work:'',
    area:''
})
const navigate =useNavigate();




const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData ();
    formdata.append("username", data.username)
    formdata.append("email", data.email)
    formdata.append("password", data.password)
    formdata.append("fname", data.fname)
    formdata.append("lname", data.lname)
    formdata.append("address", data.address)
    formdata.append("state", data.state)
    formdata.append("postalcode", data.postalcode)
    formdata.append("dateofbirth", data.dateofbirth)
    formdata.append("sex", data.sex)
    formdata.append("work", data.work)
    formdata.append("area", data.area)
    axios.post("http://localhost:3333/create", formdata) 
    .then(res => {
        navigate('/user')
    })
    .catch(err => console.log(err));
}

  return (
    <div className='d-flex flex-column align-items-center pt-4'>
        <div class="container mt-3">
  <form onSubmit={handleSubmit}>
    <div class="row jumbotron box8">
      <div class="col-sm-12 mx-t3 mb-4">
        <h2 class="text-center text-info">สร้างบัญชี เกษตรกร</h2>
      </div>
      <div class="col-sm-6 form-group">
        <label for="name-f">ชื่อจริง</label>
        <input type="text" class="form-control" name="fname" id="name-f" placeholder="Enter your first name." required
        onChange={e => setData({...data, fname: e.target.value})}/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="name-l">นามสกุล</label>
        <input type="text" class="form-control" name="lname" id="name-l" placeholder="Enter your last name." required/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" name="email" id="email" placeholder="Enter your email." required/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="address-1">Username</label>
        <input type="address" class="form-control" name="Locality" id="address-1" placeholder="Enter you username" required/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="address-2">ที่อยู่</label>
        <input type="address" class="form-control" name="address" id="address-2" placeholder="Village/City Name." required/>
      </div>
      <div class="col-sm-4 form-group">
        <label for="State">จังหวัด</label>
        <input type="address" class="form-control" name="State" id="State" placeholder="Enter your state name." required/>
      </div>
      <div class="col-sm-2 form-group">
        <label for="zip">รหัสไปษณีย์</label>
        <input type="zip" class="form-control" name="Zip" id="zip" placeholder="Postal-Code." required/>
      </div>
      
      <div class="col-sm-6 form-group">
        <label for="Date">วันเดือนปีเกิด</label>
        <input type="Date" name="dob" class="form-control" id="Date" placeholder="" required/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="sex">เพศ</label>
        <select id="sex" class="form-control browser-default custom-select">
          <option value="male">ชาย</option>
          <option value="female">หญิง</option>
          <option value="unspesified">ไม่ระบุ</option>
        </select>
      </div>
      <div class="col-sm-4 form-group">
        <label for="tel">หมายเลขโทรศัพท์</label>
        <input type="tel" name="phone" class="form-control" id="tel" placeholder="Enter Your Contact Number." required/>
      </div>
      <div class="col-sm-4 form-group">
        <label for="tel">อาชีพ</label>
        <input type="tel" name="phone" class="form-control" id="tel" placeholder="Enter Your Work." required/>
      </div>
      <div class="col-sm-4 form-group">
        <label for="tel">สวนยางของท่านมีจำนวนทั้งหมดกี่แปลง</label>
        <input type="tel" name="phone" class="form-control" id="tel" placeholder="" required/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="pass">Password</label>
        <input type="Password" name="password" class="form-control" id="pass" placeholder="Enter your password." required/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="pass2">Confirm Password</label>
        <input type="Password" name="cnf-password" class="form-control" id="pass2" placeholder="Re-enter your password." required/>
      </div>
      <div class="col-sm-12">
        <input type="checkbox" class="form-check d-inline" id="chb" required/><label for="chb" class="form-check-label">&nbsp;I accept all terms and conditions.
        </label>
      </div>

      <div class="col-sm-12 form-group mb-0">
        <button class="btn btn-primary float-right">Submit</button>
      </div>

    </div>
  </form>
</div>
    </div>
  );
}