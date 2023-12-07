import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function RegisterPage() {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    fname: '',
    lname: '',
    age: '',
    phone: '',
    lineid: '',
    work: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:3333/createvisitor', data)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <section
        className="bg-gradient-primary bgprimarys"
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}
      >
        <div className="container pt-2">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div className="col-lg-7">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h2 text-gray-900 mb-4">
                        สมัครบัญชีผู้ใช้งาน
                      </h1>
                    </div>
                    <form className="user" onSubmit={handleSubmit}>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <label htmlFor="inputEmail4" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            name="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            onChange={handleChange}
                            value={data.email}
                          />
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="inputUsername" className="form-label">
                            Username
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputUsername"
                            name="username"
                            placeholder="Enter Username"
                            autoComplete="off"
                            onChange={handleChange}
                            value={data.username}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputPassword4" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword4"
                          name="password"
                          placeholder="Enter Password"
                          onChange={handleChange}
                          value={data.password}
                        />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <label htmlFor="inputFname" className="form-label">
                            ชื่อจริง
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputFname"
                            name="fname"
                            placeholder="ชื่อจริง"
                            autoComplete="off"
                            onChange={handleChange}
                            value={data.fname}
                          />
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="inputLname" className="form-label">
                            นามสกุล
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputLname"
                            name="lname"
                            placeholder="นามสกุล"
                            autoComplete="off"
                            onChange={handleChange}
                            value={data.lname}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <label htmlFor="inputAge" className="form-label">
                            อายุ
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputAge"
                            name="age"
                            placeholder="อายุ"
                            autoComplete="off"
                            onChange={handleChange}
                            value={data.age}
                          />
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="inputPhone" className="form-label">
                            หมายเลขโทรศัพท์
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputPhone"
                            name="phone"
                            placeholder="หมายเลขโทรศัพท์"
                            autoComplete="off"
                            onChange={handleChange}
                            value={data.phone}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <label htmlFor="inputLineid" className="form-label">
                            อาชีพ
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputWork"
                            name="work"
                            placeholder="อาชีพ"
                            autoComplete="off"
                            onChange={handleChange}
                            value={data.work}
                          />
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="inputWork" className="form-label">
                            ท่านรู้จักเว็บไซต์นี้ได้อย่างไร
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputform"
                            name="form"
                            placeholder="โปรดระบุ"
                            autoComplete="off"
                            onChange={handleChange}
                            value={data.form}
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        ยืนยันการสมัคร
                      </button>
                    </form>
                    <div className="text-center"></div>
                    <div className="text-center">
                      <Link className="small" to="/">
                        Already have an account? Login!
                      </Link>
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

export default RegisterPage;
