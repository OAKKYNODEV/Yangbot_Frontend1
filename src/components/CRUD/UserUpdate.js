import React, { useState, useEffect }from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function ResearcherUpdate() {
    
   
  const [data, setData] = useState({
    username: "",
    email:'',
    password:'',
    fname:'',
    lname:'',
    age:'',
    phone:'',
    lineid:'',
    work:''
   
})
const navigate =useNavigate();

const {id} = useParams();

useEffect(() => {
    axios.get('https://cautious-pink-panama-hat.cyclic.app/get/'+id)
    .then(res => {
        setData({...data, email: res.data.Result[0].email,
            username: res.data.Result[0].username,
            fname: res.data.Result[0].fname, 
            lname: res.data.Result[0].lname,
            age: res.data.Result[0].age,
            phone: res.data.Result[0].phone,
            lineid: res.data.Result[0].lineid,
            work: res.data.Result[0].work
        })
    })
    .catch(err => console.log(err));
},[])


const handleSubmit = (event) => {
    event.preventDefault();
    axios.put("https://cautious-pink-panama-hat.cyclic.app/update/"+id, data) 
    .then(res => {
        if(res.data.Status == "Success"){
            navigate('/menu1')
        }
    })
    .catch(err => console.log(err));
}

  return (
    <div className='d-flex flex-column align-items-center pt-4'>
        <h2>แก้ไขข้อมูลนักวิจัย</h2>
        <form class="row g-3 w-50" onSubmit={handleSubmit}>
            <div class="col-12">
                <label for="inputEmail4" class='form-label'>Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder='Enter Email' autoComplete='off'
                 onChange={e => setData({...data, email: e.target.value})} value={data.email} />
            </div>
            <div class="col-12">
                <label for="inputUsername" class='form-label'>Username</label>
                <input type="text" class="form-control" id="inputUsername" placeholder='Enter Username' autoComplete='off'
                 onChange={e => setData({...data, username: e.target.value})} value={data.username} />
            </div>
            <div class="col-12">
                <label for="inputFname" class='form-label'>ชื่อจริง</label>
                <input type="text" class="form-control" id="inputFname" placeholder='ชื่อจริง' autoComplete='off'
                onChange={e => setData({...data, fname: e.target.value})} value={data.fname} />
            </div>
            <div class="col-12">
                <label for="inputLname" class='form-label'>นามสกุล</label>
                <input type="text" class="form-control" id="inputLname" placeholder='นามสกุล' autoComplete='off'
                onChange={e => setData({...data, lname: e.target.value})} value={data.lname}/>
            </div>
            <div class="col-12">
                <label for="inputAge" class='form-label'>อายุ</label>
                <input type="text" class="form-control" id="inputAge" placeholder='อายุ' autoComplete='off'
                onChange={e => setData({...data, age: e.target.value})} value={data.age}/>
            </div>
            <div class="col-12">
                <label for="inputPhone" class='form-label'>หมายเลขโทรศัพท์</label>
                <input type="text" class="form-control" id="inputPhone" placeholder='หมายเลขโทรศัพท์' autoComplete='off'
                onChange={e => setData({...data, phone: e.target.value})} value={data.phone}/>
            </div>
            <div class="col-12">
                <label for="inputLineid" class='form-label'>LineID *ถ้ามี*</label>
                <input type="text" class="form-control" id="inputLineid" placeholder='LineID' autoComplete='off'
                onChange={e => setData({...data, lineid: e.target.value})} value={data.lineid}/>
            </div>
            <div class="col-12">
                <label for="inputWork" class='form-label'>สังกัด</label>
                <input type="text" class="form-control" id="inputWork" placeholder='สังกัด' autoComplete='off'
                onChange={e => setData({...data, work: e.target.value})} value={data.work}/>
            </div>
            
            <div className='col-12'>
                <button type='submit' className='btn btn-primary'>อัพเดทข้อมูลนักวิจัย</button>
            </div>
        </form>
    </div>
  );
}