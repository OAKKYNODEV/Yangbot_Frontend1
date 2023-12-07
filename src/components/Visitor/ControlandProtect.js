import { colors } from "@material-ui/core";
import React, { useEffect,useState } from "react";



function ControlandProtect() {

  const [items, setItems] = useState([]);

    useEffect(() => {
        UserGet()
      }, [])

      const UserGet = () => {
        fetch("http://localhost:3333/linebot_log2")
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          }
        )
      }

      

  return (
    <>
        <div className="row  ">
        <h1 className="text-center" style={{ color: '#4169E1', textShadow: '1px 1px 2px #000',fontSize: '3em' }}>
        คำแนะนำในการป้องกันและควบคุมโรคใบยาง
        </h1>

        </div>
        <div className="container-fluid  ">
       <div className="row">
       <div class="card-group">
        <div class="card">
            <img src={process.env.PUBLIC_URL + '/images/โรคราแป้ง.jpg'} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title text-center">โรคราแป้ง</h5>
            
            </div>
        </div>
        <div class="card">
            <img src={process.env.PUBLIC_URL + '/images/โรคใบจุดก้างปลา.jpg'} class="card-img-top" alt="..."/>
            <div class="card-body ">
            <h5 class="card-title text-center">โรคใบจุดก้างปลา</h5>
            </div>
        </div>
        <div class="card">
            <img src={process.env.PUBLIC_URL + '/images/โรคใบจุดนูน.jpg'} class="card-img-top" alt="..."/>
            <div class="card-body ">
            <h5 class="card-title text-center">โรคใบจุดนูน</h5>
            </div>
        </div>
        <div class="card">
            <img src={process.env.PUBLIC_URL + '/images/โรคใบร่วงที่เกิดจากเชื้อราไฟทอฟธอรา.jpg'} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title text-center">โรคใบร่วงที่เกิดจากเชื้อราไฟทอฟธอรา</h5>
            
            </div>
        </div>
        </div>
        <div class="card-group mt-3">
        <div class="card ">
            <img src={process.env.PUBLIC_URL + '/images/โรคใบจุดตานก.jpg'} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title text-center">โรคใบจุดตานก</h5>
            </div>
        </div>
        <div class="card">
            <img src={process.env.PUBLIC_URL + '/images/โรคราสีชมพู.jpg'} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title text-center">โรคราสีชมพู</h5>
            </div>
        </div>
        <div class="card">
            <img src={process.env.PUBLIC_URL + '/images/โรคเส้นดำ.jpg'} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title text-center">โรคเส้นดำ</h5>
            </div>
        </div>
        <div class="card">
            <img src={process.env.PUBLIC_URL + '/images/โรคใบจุดที่เกิดจากคอลเลโทตริกัม.jpg'} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title text-center">โรคใบจุดที่เกิดจากเชื้อคอลเลโทตริกัม </h5>
            
            
            </div>
        </div>
        </div>
        </div>

       </div>
      
    </>
    
  );
}

export default ControlandProtect;
