import React, { useContext, useState } from "react";
import "./addUser.css";
import { Link } from "react-router-dom";
import AddUserContex from "../context/AddUserContext";

const AddUser = () => {
  const { form, setForm } = useContext(AddUserContex)
  const [newUser, setNewUser] = useState({});

  const onChangeInput = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }
   
  const userSave =()=>{
    setForm(newUser)
  }
  
  return (
    <>

      <div className="main-addUser-container">
        <div className="addUser-section">
          <div className="addUser-container">
            <div className="row">
              <div
                style={{ borderRadius: "12px" }}
                className="col-xl-6 col-lg-7 col-md-8 col-sm-9 m-auto form-container">
                <div style={{ padding: "72px 36px" }} className="row">
                  
                    <div className="col-12 col-md-6">
                      <div className="input-div">
                        <div className="field">
                          <input onChange={onChangeInput} name="FirstName" type="text" required autoComplete="off" id="username" />
                          <label htmlFor="username" title="First Name" data-title="First Name" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="input-div">
                        <div className="field">
                          <input onChange={onChangeInput} name="LastName" type="text" required autoComplete="off" id="username" />
                          <label htmlFor="username" title="Last Name" data-title="Last Name" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="input-div">
                        <div className="field">
                          <input onChange={onChangeInput} name="Age" type="text" required autoComplete="off" id="username" />
                          <label htmlFor="username" title="Age" data-title="Age" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="input-div">
                        <div className="field">
                          <input onChange={onChangeInput} type="text" name="Gender" required autoComplete="off" id="username" />
                          <label htmlFor="username" title="Gender" data-title="Gender" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12  ">
                      <div className="input-div">
                        <div className="secondField ">
                          <input onChange={onChangeInput} type="text" name="Email" required autoComplete="off" id="username" />
                          <label htmlFor="username" title="Email" data-title="Email" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 ">
                      <div className="input-div">
                        <div className="secondField"  >
                          <input onChange={onChangeInput} type="text" name="PhotoUrl" required autoComplete="off" id="username" />
                          <label htmlFor="username" title="Photo Url" data-title="Photo Url" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 ">
                      <div className="input-div">
                        <div className="secondField">
                          <input onChange={onChangeInput} type="text" name="Mobile" required autoComplete="off" id="username" />
                          <label htmlFor="username" title="Mobile" data-title="Mobile" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12  button-div" >
                      <div onClick={userSave} className="button-add">
                        <Link className="linkAddUser d-flex justify-content-center " to='/'>
                          ADD USER
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

