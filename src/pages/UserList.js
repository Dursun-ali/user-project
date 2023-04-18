import React, { useState, useEffect,useContext } from "react";
import "./userList.css";
import { Routes, Route,Link,NavLink } from "react-router-dom";
import AddUserContex from "../context/AddUserContext";

const Home = () => {

  const{datas,setDatas}=useContext(AddUserContex)
  const{myData,setMyData}=useContext(AddUserContex)
  const{number,setNumber}=useContext(AddUserContex)
  const{dataNumber,setDataNumber}=useContext(AddUserContex)
  const{idNumber,setIdNumber}=useContext(AddUserContex) 
  const {edit, setEdit} = useContext(AddUserContex)
  const {newUser, setNewUser} = useContext(AddUserContex);

  const getId= (e) =>{
    setIdNumber(e.target.id)
  }
  




  return (
    <>
    
      <div className="main-user-container">
        <div className="user-section">
          <div className="user-header-container">
            <div style={{ paddingTop: "32px" }} className="row">
              <div className="col-6 d-flex align-items-end">
                <div className="userWrite">Users List</div>
              </div>
              <div className="col-6">
                <div
                  className="button-container d-flex justify-content-end"
                >
                  <Link  className="link-add" to="/AddUser">
                    <div onClick={()=>{setEdit(true)}} className="button-box d-flex align-items-center justify-content-center">
                      <i
                        style={{
                          fontSize: "19px",
                          color: "#FFFFFF",
                          paddingRight: "8px",
                        }}
                        className="fa-sharp fa-solid fa-plus"
                      ></i>
                      <span  className="button-write">ADD USER</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div style={{ margin:0 }} className="row secondRow">
              <div style={{ paddingRight: 0 ,paddingLeft:0 }} className="col">
                <div className="title-container">Photo</div>
              </div>
              <div style={{ padding: 0 }} className="col ">
                <div className="title-container">Name</div>
              </div>
              <div
                style={{ paddingRight: 0, paddingLeft: 0 }}
                className="col  "
              >
                <div className="title-container">surname</div>
              </div>
              <div style={{ padding: 0 }} className="col-3  ">
                <div className="title-container">Mobile</div>
              </div>
              <div style={{ padding: 0 }} className="col-3 ">
                <div className="title-container">Email</div>
              </div>
              <div style={{ paddingLeft: 0 ,paddingRight:0}} className="col">
                <div className="title-container">User Details</div>
              </div>
            </div>

            {datas.map((oItem, oIndex) => {
              return (
                <div key={oIndex} className="row">
                  <div style={{ paddingRight: 0 }} className="col  ">
                    <div className="second-title-container">
                      <img
                        className="list-img rounded-circle"
                        src={oItem.picture.large}
                        alt=""
                      />
                    </div>
                  </div>
                  <div style={{ padding: 0 }} className="col ">
                    <div className="second-title-container">
                      {oItem.name.first}
                    </div>
                  </div>
                  <div style={{ paddingLeft: 0,paddingRight:0 }} className="col  ">
                    <div className="second-title-container">
                      {oItem.name.last}
                    </div>
                  </div>
                  <div style={{ padding: 0 }} className="col-3  ">
                    <div className="second-title-container">{oItem.phone}</div>
                  </div>
                  <div style={{ padding: 0 }} className="col-3 ">
                    <div className="second-title-container">{oItem.email}</div>
                  </div>
                  <div style={{ paddingLeft: 0 }} className="col  ">
                    <div className="second-title-container">
                       <Link className="userLink" to="/UserDetails"> 
                        <i id={oIndex} onClick={(e) => {getId(e)}} style={{cursor:"pointer"}} className="fa-solid fa-user"></i>
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
                    <div className="second-title-container">
                      <img className="rounded-circle" src={oItem.PhotoUrl} width={"35px"} height={"35px"} alt="" /> 
                    </div>
                  </div>
                  <div style={{ padding: 0 }} className="col ">
                    <div className="second-title-container">
                      {oItem.FirstName}
                    </div>
                  </div>
                  <div style={{ paddingLeft: 0,paddingRight:0 }} className="col  ">
                    <div className="second-title-container">
                      {oItem.LastName}
                    </div>
                  </div>
                  <div style={{ padding: 0 }} className="col-3  ">
                    <div className="second-title-container">{oItem.Mobile}</div>
                  </div>
                  <div style={{ padding: 0 }} className="col-3 ">
                    <div className="second-title-container">{oItem.Email}</div>
                  </div>
                  <div style={{ paddingLeft: 0 }} className="col  ">
                    <div className="second-title-container">
                      <Link className="userLink" to="/UserDetails">
                        <i id={oIndex+dataNumber} onClick={(e) => {getId(e)}} style={{cursor:"pointer"}} className="fa-solid fa-user"></i>
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
