import React, { useContext, useEffect, useState } from "react";
import "./addUser.css";
import { Link } from "react-router-dom";
import AddUserContex from "../context/AddUserContext";


const AddUser = () => {
  const { form, setForm } = useContext(AddUserContex);
  const { edit, setEdit } = useContext(AddUserContex);
  const { newUser, setNewUser } = useContext(AddUserContex);
  const { dataNumber, setDataNumber } = useContext(AddUserContex);
  const { idNumber, setIdNumber } = useContext(AddUserContex);
  const { myData, setMyData } = useContext(AddUserContex);
  const { datas, setDatas } = useContext(AddUserContex);

  const [names, setNames] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState(newUser.Age);
  const [gender, setGender] = useState(newUser.Gender);
  const [photoUrl, setPhotoUrl] = useState(newUser.PhotoUrl);
  const [mobile, setMobile] = useState(newUser.Mobile);
  const [mailControl, setMailControl] = useState(false)
  const [color, setColor] = useState();
  const [lenght, setLenght] = useState();
  const [mailLenght, setMailLenght] = useState(0);


  const {replace,setReplace}=useContext(AddUserContex);
  const {replace1,setReplace1}=useContext(AddUserContex);
  const {replace2,setReplace2}=useContext(AddUserContex);
  const {replace3,setReplace3}=useContext(AddUserContex);
  const {replace4,setReplace4}=useContext(AddUserContex);
  const {replace5,setReplace5}=useContext(AddUserContex);
 


  useEffect(() => {
    if (lenght == undefined) {
      setLenght(0)
    }
    if (color == undefined) {
      setColor("black")
    }
  }, [])


  const onChangeInput = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (!edit) {
      setNewUser("")
    }
  }, [edit])

  useEffect(() => {
    if (mailLenght == 0) {
      setColor("black")
    }
  }, [mailLenght])

  useEffect(() => {
    if (edit) {

      if (idNumber < dataNumber) {
        document.getElementsByClassName('name-user-input')[0].value = datas[idNumber].name.first == undefined ? "" : datas[idNumber].name.first;
        document.getElementsByClassName('LastName-user-input')[0].value = datas[idNumber].name.last == undefined ? "" : datas[idNumber].name.last;
        document.getElementsByClassName('Age-user-input')[0].value = datas[idNumber].dob.age == undefined ? "" : datas[idNumber].dob.age;
        document.getElementsByClassName('Gender-user-input')[0].value = datas[idNumber].gender == undefined ? "" : datas[idNumber].gender;
        document.getElementsByClassName('Email-user-input')[0].value = datas[idNumber].email == undefined ? "" : datas[idNumber].email;
        document.getElementsByClassName('PhotoUrl-user-input')[0].value = datas[idNumber].picture.large == undefined ? "" : datas[idNumber].picture.large;
        document.getElementsByClassName('Mobile-user-input')[0].value = datas[idNumber].phone == undefined ? "" : datas[idNumber].phone;

      } else {
        document.getElementsByClassName('name-user-input')[0].value = myData[idNumber - dataNumber].FirstName == undefined ? "" : myData[idNumber - dataNumber].FirstName;
        document.getElementsByClassName('LastName-user-input')[0].value = myData[idNumber - dataNumber].LastName == undefined ? "" : myData[idNumber - dataNumber].LastName;
        document.getElementsByClassName('Age-user-input')[0].value = myData[idNumber - dataNumber].Age == undefined ? "" : myData[idNumber - dataNumber].Age;
        document.getElementsByClassName('Gender-user-input')[0].value = myData[idNumber - dataNumber].Gender == undefined ? "" : myData[idNumber - dataNumber].Gender;
        document.getElementsByClassName('Email-user-input')[0].value = myData[idNumber - dataNumber].Email == undefined ? "" : myData[idNumber - dataNumber].Email;
        document.getElementsByClassName('PhotoUrl-user-input')[0].value = myData[idNumber - dataNumber].PhotoUrl == undefined ? "" : myData[idNumber - dataNumber].PhotoUrl;
        document.getElementsByClassName('Mobile-user-input')[0].value = myData[idNumber - dataNumber].Mobile == undefined ? "" : myData[idNumber - dataNumber].Mobile;
      }
    } else {
      document.getElementsByClassName('name-user-input')[0].value = "";
      document.getElementsByClassName('LastName-user-input')[0].value = "";
      document.getElementsByClassName('Age-user-input')[0].value = "";
      document.getElementsByClassName('Gender-user-input')[0].value = "";
      document.getElementsByClassName('Email-user-input')[0].value = "";
      document.getElementsByClassName('PhotoUrl-user-input')[0].value = "";
      document.getElementsByClassName('Mobile-user-input')[0].value = "";
    }

  }, [edit])



  const change = () => {

    if (color == "black" && (lenght >= 14 || lenght < 1)) {
      myData[idNumber - dataNumber].FirstName = document.getElementsByClassName('name-user-input')[0].value;
      myData[idNumber - dataNumber].LastName = document.getElementsByClassName('LastName-user-input')[0].value;
      myData[idNumber - dataNumber].Email = document.getElementsByClassName('Email-user-input')[0].value;
      myData[idNumber - dataNumber].Mobile = document.getElementsByClassName('Mobile-user-input')[0].value;
      myData[idNumber - dataNumber].Gender = document.getElementsByClassName('Gender-user-input')[0].value;
      myData[idNumber - dataNumber].Age = document.getElementsByClassName('Age-user-input')[0].value;
      myData[idNumber - dataNumber].PhotoUrl = document.getElementsByClassName('PhotoUrl-user-input')[0].value;
    }

  }
  const dataChange = () => {
    if (color == "black" && (lenght >= 14 || lenght < 1)) {
      datas[idNumber].name.first = document.getElementsByClassName('name-user-input')[0].value;
      datas[idNumber].name.last = document.getElementsByClassName('LastName-user-input')[0].value;
      datas[idNumber].email = document.getElementsByClassName('Email-user-input')[0].value;
      datas[idNumber].phone = document.getElementsByClassName('Mobile-user-input')[0].value;
      datas[idNumber].gender = document.getElementsByClassName('Gender-user-input')[0].value;
      datas[idNumber].dob.age = document.getElementsByClassName('Age-user-input')[0].value;
      datas[idNumber].picture.large = document.getElementsByClassName('PhotoUrl-user-input')[0].value;
    }
  }

  const userSave = () => {
    if (color == "black" && (lenght >= 14 || lenght < 1)) {
      setForm(newUser);
    }
  };

  function validateEmail(e, inputText) {

    if (inputText || document.getElementsByClassName('my-mail-input')[0].value.lenght == 0) {
      document.getElementsByClassName('my-mail-input')[0].style.color = "black";
      setColor("black")
    } else {
      document.getElementsByClassName('my-mail-input')[0].style.color = "red";
      setColor("red")
    }
  }

  return (
    <>

      <div style={replace} className="main-addUser-container">
        <div className="addUser-section">
          <div className="addUser-container">
            <div  className="row">
              <div
                style={{ borderRadius: "12px" }}
                className="col-xl-6 col-lg-7 col-md-8 col-sm-9 m-auto form-container"
              >
                <div style={replace5} className="row add-edit-row">
                  <div className="col-12 col-md-6">
                    <div className="input-div">
                      <div className="field">
                        <input
                        style={replace4}
                          onChange={(e) => {
                            setNewUser({ ...newUser, [e.target.name]: e.target.value });
                          }}
                          name="FirstName"
                          type="text"
                          required
                          autoComplete="off"
                          id="username"
                          className="name-user-input"
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
                        style={replace4}
                          onChange={onChangeInput}
                          name="LastName"
                          type="text"
                          required
                          autoComplete="off"
                          id="username"
                          className="LastName-user-input"
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
                        style={replace4}
                          onChange={onChangeInput}
                          name="Age"
                          type="text"
                          required
                          autoComplete="off"
                          id="username"
                          className="Age-user-input"

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
                        style={replace4}
                          onChange={onChangeInput}
                          type="text"
                          name="Gender"
                          required
                          autoComplete="off"
                          id="username"
                          className="Gender-user-input"

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
                      <div className="secondField">
                        <input
                        style={replace4}
                          onChange={(e) => {
                            setNewUser({ ...newUser, [e.target.name]: e.target.value });
                            setMailLenght(e.target.value.length);
                            var mailControl = e.target.value.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)
                            validateEmail(e, mailControl)
                          }}
                          type="text"
                          name="Email"
                          required
                          autoComplete="off"
                          id="username"
                          className="my-mail-input Email-user-input "
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
                        style={replace4}
                          onChange={onChangeInput}
                          type="text"
                          name="PhotoUrl"
                          required
                          autoComplete="off"
                          id="username"
                          className="PhotoUrl-user-input"

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
                        style={replace4}
                          onChange={(e) => {
                            setNewUser({ ...newUser, [e.target.name]: e.target.value });
                            ; var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : ''); setLenght(e.target.value.length)
                          }}
                          type="tel"
                          name="Mobile"
                          required
                          autoComplete="off"
                          id="username"
                          className="Mobile-user-input"

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
                    
                      onClick={() => {
                        if (edit) {
                          if (idNumber < dataNumber) {
                            dataChange()
                          } else {
                            change()
                          }
                        } else {
                          userSave()
                        }
                      }
                      }
                    >
                      {
                        color == "black" && (lenght >= 14 || lenght < 1) ? <>
                          <Link
                            className="linkAddUser"
                            to="/"
                          >
                            {edit ? <div style={replace3} className="buttonClass">EDIT USER</div> : <div style={replace3} className="buttonClass">ADD USER</div>}
                          </Link></>
                          :
                          <>
                            {edit ? <div style={replace3} className="buttonClass" onClick={() => alert("lütfen tüm bilgileri eksiksiz giriniz")}> EDIT USER</div> : <div style={replace3} className="buttonClass" onClick={() => alert("lütfen tüm bilgileri eksiksiz giriniz")}> ADD USER</div>}
                          </>
                      }
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


