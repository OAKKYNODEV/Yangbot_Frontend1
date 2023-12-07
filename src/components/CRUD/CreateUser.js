import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




export default function CreateResearcher() {
    
  const [data, setData] = useState({
    username: "",
    email:'',
    password:'',
    fname:'',
    lname:'',
    age:'',
    phone:'',
    lineid:'',
    work:'',
    role:'',
    image:''
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
    formdata.append("age", data.age)
    formdata.append("phone", data.phone)
    formdata.append("lineid", data.lineid)
    formdata.append("work", data.work)
    formdata.append("image", data.image)
    axios.post("http://localhost:3333/create", formdata) 
    .then(res => {
        navigate('/menu1')
    })
    .catch(err => console.log(err));
}

  return (
    <div className='d-flex flex-column align-items-center pt-4'>
        <h2>สร้างบัญชี นักวิจัย</h2>
        <form class="row g-3 w-50" onSubmit={handleSubmit}>
            <div class="col-12">
                <label for="inputEmail4" class='form-label'>Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder='Enter Email' autoComplete='off'
                 onChange={e => setData({...data, email: e.target.value})} />
            </div>
            <div class="col-12">
                <label for="inputUsername" class='form-label'>Username</label>
                <input type="text" class="form-control" id="inputUsername" placeholder='Enter Username' autoComplete='off'
                 onChange={e => setData({...data, username: e.target.value})} />
            </div>
            <div class="col-12">
                <label for="inputPassword4" class='form-label'>Password</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder='Enter Password' 
                onChange={e => setData({...data, password: e.target.value})}/>
            </div>
            <div class="col-12">
                <label for="inputFname" class='form-label'>ชื่อจริง</label>
                <input type="text" class="form-control" id="inputJob" placeholder='ชื่อจริง' autoComplete='off'
                onChange={e => setData({...data, fname: e.target.value})}/>
            </div>
            <div class="col-12">
                <label for="inputLname" class='form-label'>นามสกุล</label>
                <input type="text" class="form-control" id="inputLname" placeholder='นามสกุล' autoComplete='off'
                onChange={e => setData({...data, lname: e.target.value})}/>
            </div>
            <div class="col-12">
                <label for="inputAge" class='form-label'>อายุ</label>
                <input type="text" class="form-control" id="inputAge" placeholder='อายุ' autoComplete='off'
                onChange={e => setData({...data, age: e.target.value})}/>
            </div>
            <div class="col-12">
                <label for="inputPhone" class='form-label'>หมายเลขโทรศัพท์</label>
                <input type="text" class="form-control" id="inputPhone" placeholder='หมายเลขโทรศัพท์' autoComplete='off'
                onChange={e => setData({...data, phone: e.target.value})}/>
            </div>
            <div class="col-12">
                <label for="inputLineid" class='form-label'>LineID *ถ้ามี*</label>
                <input type="text" class="form-control" id="inputLineid" placeholder='LineID' autoComplete='off'
                onChange={e => setData({...data, lineid: e.target.value})}/>
            </div>
            <div class="col-12">
                <label for="inputWork" class='form-label'>สังกัด</label>
                <input type="text" class="form-control" id="inputWork" placeholder='สังกัด' autoComplete='off'
                onChange={e => setData({...data, work: e.target.value})}/>
            </div>
            <div class="col-12 mb-3">
                <label  class='form-label' for="inputGroupFile01">Select Image</label>
                <input type="file" class="form-control" id="inputGroupFile01" 
                onChange={e => setData({...data, image: e.target.files[0]})}/>
            </div>
            <div className='col-12'>
                <button type='submit' className='btn btn-primary'>Create</button>
            </div>
        </form>
    </div>
  );
}