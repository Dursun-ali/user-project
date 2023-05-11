import React, { useState, useEffect,useContext } from "react";
import "./userList.css";
import { Routes, Route,Link,NavLink, useParams } from "react-router-dom";
import AddUserContex from "../context/AddUserContext";

const Home = () => {


  const defaultInput=localStorage.getItem('chexbox') 

  const{datas,setDatas}=useContext(AddUserContex)
  const{myData,setMyData}=useContext(AddUserContex)
  const{number,setNumber}=useContext(AddUserContex)
  const{dataNumber,setDataNumber}=useContext(AddUserContex)
  const{idNumber,setIdNumber}=useContext(AddUserContex) 
  const {edit, setEdit} = useContext(AddUserContex)
  const {newUser, setNewUser} = useContext(AddUserContex)
  const {slider,setSlider} = useContext(AddUserContex);

  const {replace,setReplace}=useContext(AddUserContex);
  const {replace1,setReplace1}=useContext(AddUserContex);
  const {replace2,setReplace2}=useContext(AddUserContex);
  const {replace3,setReplace3}=useContext(AddUserContex);
  const {replace4,setReplace4}=useContext(AddUserContex);

  
  const ChexboxParse=localStorage.getItem('slider')

 
  const getId= (e) =>{
    setIdNumber(e.target.id)
  }
  // console.log(slider);
 
    useEffect(()=>{
      document.querySelector('#chexboxInput').checked=JSON.parse(defaultInput);
      console.log(JSON.parse( defaultInput));
    },[])

  // todo : yapılacak tek sey chexbox olan ınput degerımızı hafızada tutmak
  useEffect(()=>{
    var isInputChecked=document.querySelector('#chexboxInput').checked;
    localStorage.setItem('chexbox',JSON.stringify(isInputChecked))    
  },[slider])



  return (
    <>
      <div style={replace} className="main-user-container">
        <div style={replace2} className="user-section">
          <div  className="user-header-container">
            <div style={{ paddingTop: "32px",position:"relative" }} className="row">
              <div  className="col-6 d-flex align-items-end">
                <div style={replace4}  className="userWrite">Users List</div>
             
              </div>
              <div  className="col-6 ">
              <label  className="darkOrLight-label">
                <input onClick={()=>{ slider ? setSlider(false) : setSlider(true)}} id="chexboxInput" className="darkOrLight-label-input" type = 'checkbox'/>
                <span style={{boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}} className= 'slider'></span>
              </label>
                <div
               
                  className="button-container d-flex justify-content-end"
                >
                  <Link className="link-add" to="/AddUser">
                    <div  style={replace3} onClick={()=>{setEdit(false)}} className="button-box d-flex align-items-center justify-content-center">
                     
                      <i
                        style={{
                          fontSize: "19px",
                          color: "#FFFFFF",
                          paddingRight: "8px",
                        }}
                        className="fa-sharp fa-solid fa-plus"
                      ></i>
                      <span className="button-write">ADD USER</span>
                    </div>
                  </Link>
                
                </div>
             
              </div>
            </div>

            <div  style={{ margin:0 }} className="row secondRow">
              <div style={{ paddingRight: 0 ,paddingLeft:0 }} className="col">
                <div style={replace1} className="title-container">Photo</div>
              </div>
              <div style={{ padding: 0}} className="col ">
                <div style={replace1} className="title-container">Name</div>
              </div>
              <div
                style={{ paddingRight: 0, paddingLeft: 0 }}
                className="col  "
              >
                <div style={replace1} className="title-container">surname</div>
              </div>
              <div style={{ padding: 0 }} className="col-3  ">
                <div style={replace1} className="title-container">Mobile</div>
              </div>
              <div style={{ padding: 0 }} className="col-3 ">
                <div style={replace1} className="title-container">Email</div>
              </div>
              <div style={{ paddingLeft: 0 ,paddingRight:0}} className="col">
                <div style={replace1} className="title-container">User Details</div>
              </div>
            </div>

            {datas.map((oItem, oIndex) => {
              return (
                <div key={oIndex} className="row">
                  <div style={{ paddingRight: 0 }} className="col  ">
                    <div style={replace2}   className="second-title-container">
                      <img
                        className="list-img rounded-circle"
                        src={oItem.picture.large}
                        alt=""
                      />
                    </div>
                  </div>
                  <div style={{ padding: 0 }} className="col ">
                    <div style={replace2}  className="second-title-container">
                      {oItem.name.first}
                    </div>
                  </div>
                  <div style={{ paddingLeft: 0,paddingRight:0 }} className="col  ">
                    <div style={replace2}  className="second-title-container">
                      {oItem.name.last}
                    </div>
                  </div>
                  <div style={{ padding: 0 }} className="col-3  ">
                    <div style={replace2}  className="second-title-container">{oItem.phone}</div>
                  </div>
                  <div style={{ padding: 0 }} className="col-3 ">
                    <div style={replace2}  className="second-title-container">{oItem.email}</div>
                  </div>
                  <div style={{ paddingLeft: 0 }} className="col  ">
                    <div style={replace2}  className="second-title-container">
                       <Link  className="userLink" to="/UserDetails"> 
                        <i  id={oIndex} onClick={(e) => {getId(e)}} style={replace2}  className="fa-solid fa-user user-icons"></i>
                      </Link> 
                    </div>
                  </div>
                </div>

              )
            })}
            
            {
              (myData.length >= 1) &&
              myData.map((oItem, oIndex) => {
                return(
                <div key={oIndex} className="row">
                    <div style={{ paddingRight: 0 }} className="col">
                    <div style={replace2} className="second-title-container">
                      <img className="list-img rounded-circle" src={oItem.PhotoUrl} width={"35px"} height={"35px"} alt="" /> 
                    </div>
                  </div>
                  <div style={{ padding: 0 }} className="col ">
                    <div style={replace2} className="second-title-container">
                      {oItem.FirstName}
                    </div>
                  </div>
                  <div style={{ paddingLeft: 0,paddingRight:0 }} className="col  ">
                    <div style={replace2} className="second-title-container">
                      {oItem.LastName}
                    </div>
                  </div>
                  <div style={{ padding: 0 }} className="col-3  ">
                    <div style={replace2} className="second-title-container">{oItem.Mobile}</div>
                  </div>
                  <div style={{ padding: 0 }} className="col-3 ">
                    <div style={replace2} className="second-title-container">{oItem.Email}</div>
                  </div>
                  <div style={{ paddingLeft: 0 }} className="col  ">
                    <div style={replace2} className="second-title-container">
                      <Link className="userLink" to="/UserDetails">
                        <i id={oIndex+dataNumber} onClick={(e) => {getId(e)}} style={replace2} className="fa-solid fa-user"></i>
                      </Link>
                    </div>
                  </div>
                </div>)
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
