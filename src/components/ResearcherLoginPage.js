
import axios from "axios";
import React, { useState }from "react";
import { Link,useNavigate } from "react-router-dom";


function ResearcherLoginPage() {
  const [values, setValues] = useState({
    email:'',
    password:''
})
const navigate = useNavigate ()
axios.defaults.withCredentials = true;
const [error, setError] = useState ('')

const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('https://cautious-pink-panama-hat.cyclic.app/researcherlogin', values)
    .then(res => {
        if(res.data.Status === 'Success'){
            navigate('/home')
        }else {
            setError(res.data.Error);
        }
    })
    .catch(err => console.log(err));
}
  
  return (
    <>
      <section className="bg-gradient-primary bgprimarys" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}> 
        <div className="container pt-3"style={{ width: '100%' }} >
          {/* <!-- Outer Row --> */}
          <div className="row justify-content-center">
            <div className="col-xXl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0" >
                  {/* <!-- Nested Row within Card Body --> */}
                  <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image">
    
                  </div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h2 text-gray-900 mb-4">
                            ยินดีต้อนรับนักวิจัยทุกท่าน
                          </h1>
                        </div>
                        <div className='text-danger text-center mb-4 text-lg'>
                            {error && error}
                        </div>
                        <form className="user" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control form-control-user "
                              id="exampleInputEmail"
                              aria-describedby="emailHelp"
                              placeholder="กรุณากรอกอีเมลผู้ใช้งาน..."
                              onChange={e => setValues({...values, email:e.target.value})}  //เพิ่มส่วนนี้
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control form-control-user"
                              id="exampleInputPassword"
                              placeholder="กรุณากรอกพาสเวิร์ด..."
                              onChange={e => setValues({...values, password:e.target.value})} //เพิ่ม
                            />
                          </div>
                          
                          <button type="submit" className="btn btn-primary btn-user btn-block">
                               เข้าสู่ระบบ
                          </button>
                        </form>
                        <hr />
                        <div className="text-center">
                         
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResearcherLoginPage;