import React,{useContext} from "react";
import './userDetails.css'
import { Link, useParams } from "react-router-dom";
import AddUserContex from "../context/AddUserContext";

const UserDetails= () =>{

    // const params=useParams();
    // console.log(params);
    const{datas,setDatas}=useContext(AddUserContex) 
    const{myData,setMyData}=useContext(AddUserContex)
    const{number,setNumber}=useContext(AddUserContex)
    const{idNumber,setIdNumber}=useContext(AddUserContex) 
    const {dataNumber,setDataNumber}=useContext(AddUserContex)
    const { edit, setEdit } = useContext(AddUserContex)


    return( 
     <>
    <div className="main-details-container">
        <div className="details-section">
            <div className="details-container">
                <div style={{padding:0,margin:0}} className="row d-flex justify-content-center">
                 
                    { idNumber<dataNumber ?  
                    <>  
                    <div style={{padding:0}} className="col-md-6 col-10">
                    <p className="first-details-p">User Details</p>
                    </div>
                    <div style={{padding:0}} className="col-md-6 col-2">
                    <div className="exit-button d-flex justify-content-end">
                            
                            <Link className="userListLink" to='/' >
                            <div  className="detailsButton">
                            <i className="fa-sharp fa-solid fa-arrow-right-from-bracket"></i>
                            </div>
                            </Link>
                            
                        </div>
                    </div>
                    
               
                    

                     <div style={{padding:0,borderRadius:"12px"}} className="col-md-4 col-sm-12">
                    <div className="firstDetails" >
                        <div className="firstDetailsWrapper">
                        <div className="d-flex justify-content-center">
                        </div>
                        <div className="d-flex justify-content-center ">
                        <img className="rounded-circle details-img" src={ datas? datas[idNumber].picture.large : "kullanıcı secilmedi"}  alt="" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <p className="second-details-p">{ datas? datas[idNumber].name.first: "kullanıcı seçilmedi"} {  datas? datas[idNumber].name.last: "kullanıcı seçilmedi"}</p>
                        </div>
                        <div className="d-flex justify-content-center ">
                            <Link to='/AddUser'>
                            <div onClick={()=>{console.log(datas[idNumber]);setEdit(true)}} className="editButton ">
                            Edit Profile
                            </div> 
                            </Link>
                         
                        </div>
                        </div>
                      
                    </div>
                    </div>

                    
                    <div style={{padding:0,borderRadius:"12px"}} className="col-md-8 col-sm-12 ">
                    <div className="secondDetails">
                        <div className="secondDetailsWrapper" >
                        <div className="d-flex secondWriteWrapper1">
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
               <div style={{padding:0}} className="col-md-6 col-10">
                    <p className="first-details-p">User Details</p>
                    </div>
                    <div style={{padding:0}} className="col-md-6 col-2">
                    <div className="exit-button d-flex justify-content-end">
                            <div  className="detailsButton">
                            <Link className="userListLink" to='/'><i className="fa-sharp fa-solid fa-arrow-right-from-bracket"></i></Link> 
                            </div>
                        </div>
                    </div>
                    
               
                    

                     <div style={{padding:0,borderRadius:"12px"}} className="col-md-4 col-sm-12">
                    <div className="firstDetails" >
                        <div className="firstDetailsWrapper">
                        <div className="d-flex justify-content-center">
                        </div>
                        <div className="d-flex justify-content-center ">
                        <img className="rounded-circle details-img" src={ myData? myData[idNumber-dataNumber]?.PhotoUrl: "kullanıcı secilmedi"}  alt="" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <p className="second-details-p">{ myData? myData[idNumber-dataNumber]?.FirstName: "kullanıcı seçilmedi"} {  myData? myData[idNumber-dataNumber]?.LastName: "kullanıcı seçilmedi"}</p>
                        </div>
                        <div className="d-flex justify-content-center ">
                        <Link to='/AddUser'>
                            <div onClick={()=>{console.log(myData[idNumber-dataNumber]);setEdit(true)}} className="editButton ">
                            Edit Profile
                            </div> 
                        </Link>
                        </div>
                        </div>
                      
                    </div>
                    </div>

                    
                    <div style={{padding:0,borderRadius:"12px"}} className="col-md-8 col-sm-12 ">
                    <div className="secondDetails">
                        <div className="secondDetailsWrapper" >
                        <div className="d-flex secondWriteWrapper1">
                            <div className="secondWriteIcon"><i className="fa-solid fa-envelope"></i></div>
                            <div className="secondWrite-div">Email : </div>
                            <div className="secondWriteLast-div">{ myData? myData[idNumber-dataNumber]?.Email: "kullanıcı seçilmedi"}</div>
                        </div>
                        <div className="d-flex secondWriteWrapper">
                            <div className="secondWriteIcon"><i className="fa-solid fa-phone"></i></div>
                            <div className="secondWrite-div">Mobile : </div>
                            <div className="secondWriteLast-div">{ myData? myData[idNumber-dataNumber]?.Mobile: "kullanıcı seçilmedi"}</div>
                        </div>
                        <div className="d-flex secondWriteWrapper">
                            <div className="secondWriteIcon"><i style={{fontSize:"24px"}} className="fa-solid fa-person-half-dress"></i></div>
                            <div className="secondWrite-div">Gender : </div>
                            <div className="secondWriteLast-div">{ myData? myData[idNumber-dataNumber]?.Gender: "kullanıcı seçilmedi"}</div>
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