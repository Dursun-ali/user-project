import React, { useContext, useEffect, useState } from "react";
import "./addUser.css";
import { Link } from "react-router-dom";
import AddUserContex from "../context/AddUserContext";


const AddUser = () => {
  const { form, setForm } = useContext(AddUserContex);
  const { edit, setEdit } = useContext(AddUserContex);
  const { newUser, setNewUser } = useContext(AddUserContex);
  const { dataNumber,setDataNumber} = useContext(AddUserContex);
  const { idNumber,setIdNumber} = useContext(AddUserContex);
  const {myData, setMyData}=useContext(AddUserContex);
  const {datas, setDatas}=useContext(AddUserContex);

  const [names, setNames] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState(newUser.Age);
  const [gender, setGender] = useState(newUser.Gender);
  const [photoUrl, setPhotoUrl] = useState(newUser.PhotoUrl);
  const [mobile, setMobile] = useState(newUser.Mobile);
  const [mailControl, setMailControl] = useState(false)
  const onChangeInput = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }


    useEffect(()=>{
      setNames(newUser.FirstName);
      setLastName(newUser.LastName);
      setEmail(newUser.Email);
      setAge(newUser.Age);
      setGender(newUser.Gender);
      setPhotoUrl(newUser.PhotoUrl);
      setMobile(newUser.Mobile);

    },[newUser])

    

  const change = () => {
    myData[idNumber-dataNumber].FirstName=names;
    myData[idNumber-dataNumber].LastName=lastName;
    myData[idNumber-dataNumber].Email=email;
    myData[idNumber-dataNumber].Mobile=mobile;
    myData[idNumber-dataNumber].Gender=gender;
    myData[idNumber-dataNumber].Age=age;
    myData[idNumber-dataNumber].PhotoUrl=photoUrl;    
  }
  const dataChange = () =>{
    datas[idNumber].name.first=names;
    datas[idNumber].name.last=lastName;
    datas[idNumber].email=email;
    datas[idNumber].phone=mobile;
    datas[idNumber].gender=gender;
    datas[idNumber].age=age;
    datas[idNumber].picture.large=photoUrl;
    

  }

  const userSave = () => {
    setForm(newUser);
  };

  function validateEmail(e, inputText) {
    inputText ? 
    document.getElementsByClassName('my-mail-input')[0].style.color="black": document.getElementsByClassName('my-mail-input')[0].style.color="red";

  }

  return (
    <>
      <div className="main-addUser-container">
        <div className="addUser-section">
          <div className="addUser-container">
            <div className="row">
              <div
                style={{ borderRadius: "12px" }}
                className="col-xl-6 col-lg-7 col-md-8 col-sm-9 m-auto form-container"
              >
                <div style={{ padding: "72px 36px" }} className="row">
                  <div className="col-12 col-md-6">
                    <div className="input-div">
                      <div className="field">
                        <input
                          onChange={onChangeInput}
                          // value={}
                          name="FirstName"
                          type="text"
                          required
                          autoComplete="off"
                          id="username"
                        />
                        <label
                          htmlFor="username"
                          title="First Name"
                          data-title="First Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="input-div">
                      <div className="field">
                        <input
                          onChange={onChangeInput}
                          // value={edit ? newUser.LastName : lastName}
                          name="LastName"
                          type="text"
                          required
                          autoComplete="off"
                          id="username"
                        />
                        <label
                          htmlFor="username"
                          title="Last Name"
                          data-title="Last Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="input-div">
                      <div className="field">
                        <input
                          onChange={onChangeInput}
                          // value={edit ? newUser.Age : age}
                          name="Age"
                          type="text"
                          required
                          autoComplete="off"
                          id="username"
                        />
                        <label
                          htmlFor="username"
                          title="Age"
                          data-title="Age"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="input-div">
                      <div className="field">
                        <input
                          onChange={onChangeInput}
                          // value={edit ? newUser.Gender : gender}
                          type="text"
                          name="Gender"
                          required
                          autoComplete="off"
                          id="username"
                        />
                        <label
                          htmlFor="username"
                          title="Gender"
                          data-title="Gender"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12  ">
                    
                    <div className="input-div">
                      <div className="secondField  ">
                        <input
                          onChange={(e)=>{setNewUser({ ...newUser, [e.target.name]: e.target.value });

                          var mailControl = e.target.value.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)
                          validateEmail(e, mailControl)
                        }}
                          // value={edit ? newUser.Email : email}
                          type="text"
                          name="Email"
                          required
                          autoComplete="off"
                          id="username"
                          className="my-mail-input"
                        />
                        <label
                          htmlFor="username"
                          title="Email"
                          data-title="Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 ">
                    <div className="input-div">
                      <div className="secondField">
                        <input
                          onChange={onChangeInput}
                          // value={edit ? newUser.PhotoUrl : photoUrl}
                          type="text"
                          name="PhotoUrl"
                          required
                          autoComplete="off"
                          id="username"
                        />
                        <label
                          htmlFor="username"
                          title="Photo Url"
                          data-title="Photo Url"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 ">
                    <div className="input-div">
                      <div className="secondField">
                      
                        <input
                          onChange={(e)=>{setNewUser({ ...newUser, [e.target.name]: e.target.value });
                        ;var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                           e.target.value =  !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');}}
                          //  value={edit ? newUser.Mobile : mobile}
                          type="tel"
                          name="Mobile"
                          required
                          autoComplete="off"
                          id="username"
                        />
                        <label
                          htmlFor="username"
                          title="Mobile"
                          data-title="Mobile"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12  button-div">
                    <div
                      onClick={ ()=>{
                        if (edit) {
                          userSave()
                        }else{
                          if (idNumber<dataNumber) {
                            dataChange()
                          }else{
                            change()
                          }
                        }
                      }
                         
                      }
                      className="button-add"
                    >
                      <Link
                        className="linkAddUser d-flex justify-content-center "
                        to="/"
                      >
                      { edit ? <>ADD USER</>:<>EDIT USER</>}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddUser;
