import React, { useContext, useState } from "react";
import './userDetails.css'
import { Link, useParams } from "react-router-dom";
import AddUserContex from "../context/AddUserContext";


const UserDetails = () => {

    const { datas, setDatas } = useContext(AddUserContex)
    const { myData, setMyData } = useContext(AddUserContex)
    const { number, setNumber } = useContext(AddUserContex)
    const { idNumber, setIdNumber } = useContext(AddUserContex)
    const { dataNumber, setDataNumber } = useContext(AddUserContex)
    const { edit, setEdit } = useContext(AddUserContex)

    const { replace, setReplace } = useContext(AddUserContex);

    const { dataLoading, setDataLoading } = useContext(AddUserContex)



//    ? burdan params tarafından tutulan bilgimizi almıs oluyoruz.
    const{id}=useParams();
    console.log(id);
//  * dikkatttt et yukarıya  !!!!
    // ! bu hemen asagımızda bulunan kısmımız useParams deneme kısmımız ile ilgilidir.
    return (
        <>
            <div style={dataLoading} >
    <div className="position-absolute" style={{left:0, right:0, top:0, bottom:0,display:'flex',
    justifyContent:'center',
    alignItems: 'center'}}>
    <div className="datas-loading"></div>
    </div>
    </div>

            <div style={replace} className="main-details-container">
                <div className="details-section">
                    <div className="details-container">
                        <div style={replace} className="row d-flex justify-content-center details-row">
                            {id < dataNumber ?
                                <>
                                    <div style={{ padding: 0 }} className="col-md-6 col-10">

                                        <div className="first-details-p d-flex">
                                            <div style={{ display: "flex", alignItems: "center" }}>

                                                <Link className="userListLink" to='/' >
                                                    <div className="detailsButton">
                                                        <i className="fa-sharp fa-solid fa-chevron-left"></i>
                                                    </div>


                                                </Link>
                                            </div>
                                            <div style={replace}>User Details</div>

                                        </div>
                                    </div>
                                    <div style={{ padding: 0 }} className="col-md-6 col-2">
                                        <div className="exit-button d-flex justify-content-end">


                                        </div>
                                    </div>




                                    <div style={{ padding: 0, borderRadius: "12px" }} className="col-md-4 col-sm-12">
                                        <div className="firstDetails" >
                                            <div className="firstDetailsWrapper">
                                                <div className="d-flex justify-content-center">
                                                </div>
                                                <div className="d-flex justify-content-center ">
                                                    <img className="rounded-circle details-img" src={datas.length==8 && datas[id].picture.large} alt="" />
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <p style={replace} className="second-details-p">{datas.length==8 && datas[id].name.first} {datas.length==8 && datas[id].name.last}</p>
                                                </div>
                                                <div className="d-flex justify-content-center ">
                                                    <Link style={{ textDecoration: "none" }} to='/EditUser'>
                                                        <div onClick={() => { console.log(datas[idNumber]); setEdit(true) }} className="editButton ">
                                                            Edit Profile
                                                        </div>
                                                    </Link>

                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div style={{ padding: 0, borderRadius: "12px" }} className="col-md-8 col-sm-12 ">
                                        <div className="secondDetails">
                                            <div style={replace} className="secondDetailsWrapper" >
                                                <div className="d-flex secondWriteWrapper1">
                                                    <div className="secondWriteIcon"><i className="fa-solid fa-envelope"></i></div>
                                                    <div style={replace} className="secondWrite-div">Email : </div>
                                                    <div style={replace} className="secondWriteLast-div">{datas.length==8 && datas[id].email}</div>
                                                </div>
                                                <div className="d-flex secondWriteWrapper">
                                                    <div className="secondWriteIcon"><i className="fa-solid fa-phone"></i></div>
                                                    <div style={replace} className="secondWrite-div">Mobile : </div>
                                                    <div style={replace} className="secondWriteLast-div">{datas.length==8 && datas[id].phone}</div>
                                                </div>
                                                <div className="d-flex secondWriteWrapper">
                                                    <div className="secondWriteIcon"><i style={{ fontSize: "24px" }} className="fa-solid fa-person-half-dress"></i></div>
                                                    <div style={replace} className="secondWrite-div">Gender : </div>
                                                    <div style={replace} className="secondWriteLast-div">{datas.length==8 && datas[id].gender}</div>
                                                </div>
                                                <div className="d-flex secondWriteWrapper">
                                                    <div className="secondWriteIcon"><i className="fa-solid fa-user"></i></div>
                                                    <div style={replace} className="secondWrite-div">Age : </div>
                                                    <div style={replace} className="secondWriteLast-div">{datas.length==8 && datas[id].dob.age}</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </>
                                :
                                <>
                                    <div style={{ padding: 0 }} className="col-md-6 col-10">

                                        <div className="first-details-p d-flex">
                                            <div style={{ display: "flex", alignItems: "center" }}>

                                                <Link className="userListLink" to='/' >
                                                    <div className="detailsButton">
                                                        <i className="fa-sharp fa-solid fa-chevron-left"></i>
                                                    </div>


                                                </Link>
                                            </div>
                                            <div style={replace}>User Details</div>

                                        </div>
                                    </div>
                                    <div style={{ padding: 0 }} className="col-md-6 col-2">
                                        <div className="exit-button d-flex justify-content-end">


                                        </div>
                                    </div>




                                    <div style={{ padding: 0, borderRadius: "12px" }} className="col-md-4 col-sm-12">
                                        <div className="firstDetails" >
                                            <div className="firstDetailsWrapper">
                                                <div className="d-flex justify-content-center">
                                                </div>
                                                <div className="d-flex justify-content-center ">
                                                    <img className="rounded-circle details-img" src={ myData[idNumber - dataNumber]?.PhotoUrl } alt="" />
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <p style={replace} className="second-details-p">{ myData[idNumber - dataNumber]?.FirstName } { myData[idNumber - dataNumber]?.LastName }</p>
                                                </div>
                                                <div className="d-flex justify-content-center ">
                                                    <Link style={{ textDecoration: "none" }} to='/AddUser'>
                                                        <div onClick={() => { console.log(myData[idNumber - dataNumber]); setEdit(true) }} className="editButton ">
                                                            Edit Profile
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div style={{ padding: 0, borderRadius: "12px" }} className="col-md-8 col-sm-12 ">
                                        <div className="secondDetails">
                                            <div style={replace} className="secondDetailsWrapper" >
                                                <div className="d-flex secondWriteWrapper1">
                                                    <div className="secondWriteIcon"><i className="fa-solid fa-envelope"></i></div>
                                                    <div style={replace} className="secondWrite-div">Email : </div>
                                                    <div style={replace} className="secondWriteLast-div">{ myData[idNumber - dataNumber]?.Email }</div>
                                                </div>
                                                <div className="d-flex secondWriteWrapper">
                                                    <div className="secondWriteIcon"><i className="fa-solid fa-phone"></i></div>
                                                    <div style={replace} className="secondWrite-div">Mobile : </div>
                                                    <div style={replace} className="secondWriteLast-div">{ myData[idNumber - dataNumber]?.Mobile }</div>
                                                </div>
                                                <div className="d-flex secondWriteWrapper">
                                                    <div className="secondWriteIcon"><i style={{ fontSize: "24px" }} className="fa-solid fa-person-half-dress"></i></div>
                                                    <div style={replace} className="secondWrite-div">Gender : </div>
                                                    <div style={replace} className="secondWriteLast-div">{ myData[idNumber - dataNumber]?.Gender }</div>
                                                </div>
                                                <div className="d-flex secondWriteWrapper">
                                                    <div className="secondWriteIcon"><i className="fa-solid fa-user"></i></div>
                                                    <div style={replace} className="secondWrite-div">Age : </div>
                                                    <div style={replace} className="secondWriteLast-div">{ myData[idNumber - dataNumber]?.Age }</div>
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