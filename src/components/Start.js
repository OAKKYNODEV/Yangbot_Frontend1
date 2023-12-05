import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Style.css"

function Start() {
    const navigate =useNavigate();
    
  return (
      
    <div className='d-flex flex-column justify-content-center align-items-center vh-100 loginpage '>
      <div  style={{ position: 'absolute', top: 10 }}>
        <p >ยินดีต้อนรับสู่ <span class="fancy">Yangbotweb</span></p>
      </div>
        <div className='bg-white p-5 rounded w-25 border loginForm'>       
            <h3 className='text-center'>โปรดเลือกสถานะผู้ใช้งาน</h3>
            <div className='d-flex justify-content-between mt-3'>
                <button className='btn btn-primary btn-lg' onClick={e => navigate('/researcherloginpage') }>นักวิจัย</button>
                <button className='btn btn-primary btn-lg'onClick={e => navigate('/login') }>หัวหน้านักวิจัย</button>
            </div>
        </div>
    </div>
  )
}

export default Start