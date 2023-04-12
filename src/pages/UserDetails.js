import React,{useContext} from "react";
import './userDetails.css'
import { Link } from "react-router-dom";
import AddUserContex from "../context/AddUserContext";



const UserDetails= () =>{

    const{datas,setDatas}=useContext(AddUserContex) 
    const{myData,setMyData}=useContext(AddUserContex)
    const{number,setNumber}=useContext(AddUserContex)
    const{idNumber,setIdNumber}=useContext(AddUserContex) 
    const {dataNumber,setDataNumber}=useContext(AddUserContex)



    return( 
     <>
    <div className="main-details-container">
        <div className="details-section">
            <div className="details-container">
                <div className="row">
                 
                    { idNumber<dataNumber ?  
                    <>
                        
                     <div style={{padding:0,borderRadius:"12px"}} className="col-4">
                    <div className="firstDetails" >
                        <div className="firstDetailsWrapper">
                        <div className="d-flex justify-content-center">
                            <p className="first-details-p">User Details</p>
                        </div>
                        <div className="d-flex justify-content-center ">
                        <img className="rounded-circle details-img" src={ datas? datas[idNumber].picture.large : "kullanıcı secilmedi"} width={"130px"} height={"130px"} alt="" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <p className="second-details-p">{ datas? datas[idNumber].name.first: "kullanıcı seçilmedi"} {  datas? datas[idNumber].name.last: "kullanıcı seçilmedi"}</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div  className="detailsButton">
                            <Link className="userListLink" to='/'>Go To User List</Link> 
                            </div>
                        </div>
                        </div>
                      
                    </div>
                    </div>

                    
                    <div style={{padding:0,borderRadius:"12px"}} className="col-8 ">
                    <div className="secondDetails">
                        <div className="secondDetailsWrapper" >
                        <div style={{paddingTop:0}} className="d-flex secondWriteWrapper">
                            <div className="secondWriteIcon"><i className="fa-solid fa-envelope"></i></div>
                            <div className="secondWrite-div">Email : </div>
                            <div className="secondWriteLast-div">{  datas? datas[idNumber].email: "kullanıcı seçilmedi"}</div>
                        </div>
                        <div className="d-flex secondWriteWrapper">
                            <div className="secondWriteIcon"><i className="fa-solid fa-phone"></i></div>
                            <div className="secondWrite-div">Mobile : </div>
                            <div className="secondWriteLast-div">{  datas? datas[idNumber].phone: "kullanıcı seçilmedi"}</div>
                        </div>
                        <div className="d-flex secondWriteWrapper">
                            <div className="secondWriteIcon"><i style={{fontSize:"24px"}} className="fa-solid fa-person-half-dress"></i></div>
                            <div className="secondWrite-div">Gender : </div>
                            <div className="secondWriteLast-div">{  datas? datas[idNumber].gender: "kullanıcı seçilmedi"}</div>
                        </div>
                        <div className="d-flex secondWriteWrapper">
                            <div className="secondWriteIcon"><i className="fa-solid fa-user"></i></div>                           
                            <div className="secondWrite-div">Age : </div>
                            <div className="secondWriteLast-div">{  datas? datas[idNumber].dob.age: "kullanıcı seçilmedi"}</div>
                        </div>
                        </div>
                     
                    </div>
                    </div>
                        
                    </>
                :
                <>
               
                <div style={{padding:0,borderRadius:"12px"}} className="col-4">
                    <div className="firstDetails" >
                        <div className="firstDetailsWrapper">
                        <div className="d-flex justify-content-center">
                            <p className="first-details-p">User Details</p>
                        </div>
                        <div className="d-flex justify-content-center ">
                        <img className="rounded-circle details-img" src={ myData? myData[idNumber-dataNumber]?.PhotoUrl: "kullanıcı secilmedi"} width={"130px"} height={"130px"} alt="" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <p className="second-details-p">{ myData? myData[idNumber-dataNumber]?.FirstName: "kullanıcı seçilmedi"} {  myData? myData[idNumber-dataNumber].LastName: "kullanıcı seçilmedi"}</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div  className="detailsButton">
                            <Link className="userListLink" to='/'>Go To User List</Link> 
                            </div>
                        </div>
                        </div>
                      
                    </div>
                    </div>

                    
                    <div style={{padding:0,borderRadius:"12px"}} className="col-8 ">
                    <div className="secondDetails">
                        <div className="secondDetailsWrapper" >
                        <div style={{paddingTop:0}} className="d-flex secondWriteWrapper">
                            <div className="secondWriteIcon"><i className="fa-solid fa-envelope"></i></div>
                            <div className="secondWrite-div">Email : </div>
                            <div className="secondWriteLast-div">{  myData? myData[idNumber-dataNumber]?.Email: "kullanıcı seçilmedi"}</div>
                        </div>
                        <div className="d-flex secondWriteWrapper">
                            <div className="secondWriteIcon"><i className="fa-solid fa-phone"></i></div>
                            <div className="secondWrite-div">Mobile : </div>
                            <div className="secondWriteLast-div">{  myData? myData[idNumber-dataNumber]?.Mobile: "kullanıcı seçilmedi"}</div>
                        </div>
                        <div className="d-flex secondWriteWrapper">
                            <div className="secondWriteIcon"><i style={{fontSize:"24px"}} className="fa-solid fa-person-half-dress"></i></div>
                            <div className="secondWrite-div">Gender : </div>
                            <div className="secondWriteLast-div">{  myData? myData[idNumber-dataNumber]?.Gender: "kullanıcı seçilmedi"}</div>
                        </div>
                        <div className="d-flex secondWriteWrapper">
                            <div className="secondWriteIcon"><i className="fa-solid fa-user"></i></div>                           
                            <div className="secondWrite-div">Age : </div>
                            <div className="secondWriteLast-div">{  myData? myData[idNumber-dataNumber]?.Age: "kullanıcı seçilmedi"}</div>
                        </div>
                        </div>
                     
                    </div>
                    </div>
                </>    
                
                }
                </div>
            </div>
        </div>
    </div>
     </>
    )
}
export default UserDetails;