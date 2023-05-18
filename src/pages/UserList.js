import React, { useState, useEffect, useContext } from "react";
import "./userList.css";
import { Routes, Route, Link, NavLink, useParams } from "react-router-dom";
import AddUserContex from "../context/AddUserContext";
import { Typography, colors } from "@mui/material";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Icon } from '@mui/material';
import { SvgIcon } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Paper } from '@mui/material';
import FilterAltSharpIcon from '@mui/icons-material/FilterAltSharp';
import FilterAltOffSharpIcon from '@mui/icons-material/FilterAltOffSharp';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';





const Home = () => {


  const defaultInput = localStorage.getItem('chexbox')

  const { datas, setDatas } = useContext(AddUserContex)
  const { myData, setMyData } = useContext(AddUserContex)
  const { number, setNumber } = useContext(AddUserContex)
  const { dataNumber, setDataNumber } = useContext(AddUserContex)
  const { idNumber, setIdNumber } = useContext(AddUserContex)
  const { edit, setEdit } = useContext(AddUserContex)
  const { newUser, setNewUser } = useContext(AddUserContex)
  const { slider, setSlider } = useContext(AddUserContex);

  const { replace, setReplace } = useContext(AddUserContex);
  const { replace1, setReplace1 } = useContext(AddUserContex);
  const { replace2, setReplace2 } = useContext(AddUserContex);
  const { replace3, setReplace3 } = useContext(AddUserContex);
  const { replace4, setReplace4 } = useContext(AddUserContex);

  const { dataLoading, setDataLoading } = useContext(AddUserContex);


  const ChexboxParse = localStorage.getItem('slider')

  //? bu kısım denemek ıcindir
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#212121',
    color: "white",
    border: '4px solid #0091ae',
    boxShadow: 24,
    borderRadius: "8px",
    p: 4
  }
  const secondStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#f5f5f5',
    color: 900,
    border: '4px solid #e0e0e0',
    boxShadow: 24,
    borderRadius: "8px",
    p: 4
  }

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [touch, setTouch] = useState();
  const [buttonWrite, setButtonWrite] = useState("NO FILTER")

  useEffect(() => {
    touch ? setButtonWrite("FILTER") : setButtonWrite("NO FILTER")
  }, [touch])



  const getId = (e) => {
    setIdNumber(e.target.id)
  }


  useEffect(() => {
    document.querySelector('#chexboxInput').checked = JSON.parse(defaultInput);
    // idNumber==undefined&&setIdNumber("()")
  }, [])

  // todo : yapılacak tek sey chexbox olan ınput degerımızı hafızada tutmak
  useEffect(() => {
    var isInputChecked = document.querySelector('#chexboxInput').checked;
    localStorage.setItem('chexbox', JSON.stringify(isInputChecked))
  }, [slider])



  return (
    <>

      <div style={dataLoading} >
        <div className="position-absolute" style={{
          left: 0, right: 0, top: 0, bottom: 0, display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className="datas-loading"></div>
        </div>
      </div>


      <div style={replace} className="main-user-container">

        {/* <Typography variant="h1">h1 heading</Typography>
        <Typography variant=" h1 button">h1 heading</Typography>
        <Button variant="outlined" color="error" size="small">Outlined</Button>
        <Button variant="contained" color="error" size="large">Contained</Button>

 */}





        {/* <Card sx={{ minWidth: 275, backgroundColor: "gray" }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              hello
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card> */}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={slider ? style : secondStyle}>
            <Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#0288d1" }} variant="h5" component="h2">
              <InfoIcon sx={{ marginRight: "5px" }} /> INFO
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              On this page, you can add people, update people and access contact details.
            </Typography>
          </Box>
        </Modal>




        <div style={replace2} className="user-section">
          <div className="user-header-container">
            <div style={{ paddingTop: "32px", position: "relative" }} className="row">
              <div className="col-6 d-flex align-items-end">
                <div style={replace4} className="userWrite">Users List</div>


              </div>
              <div className="col-6 ">
                <label className="darkOrLight-label">
                  <input onClick={() => { slider ? setSlider(false) : setSlider(true) }} id="chexboxInput" className="darkOrLight-label-input" type='checkbox' />
                  <span style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }} className='slider'></span>
                </label>

                <div
                  className="button-container d-flex justify-content-end"
                >
                  <Button onClick={handleOpen} sx={{ marginRight: "16px" }} variant="outlined" size="medium">
                    <InfoIcon sx={{ marginRight: "5px" }} fontSize="small" />
                    INFO
                  </Button>
                  <Button sx={{ marginRight: "16px" }} onClick={() => { setTouch(!touch) }} variant="contained">
                    <FilterAltSharpIcon sx={touch ? { display: "block" } : { display: "none" }} />
                    <FilterAltOffSharpIcon sx={!touch ? { display: "block" } : { display: "none" }} />
                    {buttonWrite}
                  </Button>

                  <Link className="link-add" to="/AddUser">
                  <Button onClick={() => { setEdit(false) }} variant="contained" size="large" disableElevation>
                  <PersonAddAltSharpIcon sx={{marginRight:"8px"}}/>
                    <Typography variant="subtitle2 ">
                      ADD USER
                    </Typography>
                  </Button>
                  </Link>
                </div>

              </div>
            </div>

            <div style={{ margin: 0 }} className="row secondRow">
              <div style={{ paddingRight: 0, paddingLeft: 0 }} className="col">
                <div style={replace1} className="title-container">Photo</div>
              </div>
              <div style={{ padding: 0 }} className="col ">
                <div style={replace1} className="title-container">Name</div>
              </div>
              <div
                style={{ paddingRight: 0, paddingLeft: 0 }}
                className="col"
              >
                <div style={replace1} className="title-container">surname</div>
              </div>
              <div style={{ padding: 0 }} className="col-3  ">
                <div style={replace1} className="title-container">Mobile</div>
              </div>
              <div style={{ padding: 0 }} className="col-3 ">
                <div style={replace1} className="title-container">Email</div>
              </div>
              <div style={{ paddingLeft: 0, paddingRight: 0 }} className="col">
                <div style={replace1} className="title-container">User Details</div>
              </div>
            </div>

            {datas.map((oItem, oIndex) => {
              return (
                <div key={oIndex} className="row">
                  <div style={{ paddingRight: 0 }} className="col  ">
                    <div style={replace2} className="second-title-container">
                      <img
                        className="list-img rounded-circle"
                        src={oItem.picture.large}
                        alt=""
                      />
                    </div>
                  </div>
                  <div style={{ padding: 0 }} className="col ">
                    <div style={replace2} className="second-title-container">
                      {oItem.name.first}
                    </div>
                  </div>
                  <div style={{ paddingLeft: 0, paddingRight: 0 }} className="col  ">
                    <div style={replace2} className="second-title-container">
                      {oItem.name.last}
                    </div>
                  </div>
                  <div style={{ padding: 0 }} className="col-3  ">
                    <div style={replace2} className="second-title-container">{oItem.phone}</div>
                  </div>
                  <div style={{ padding: 0 }} className="col-3 ">
                    <div style={replace2} className="second-title-container">{oItem.email}</div>
                  </div>
                  <div style={{ paddingLeft: 0 }} className="col  ">
                    <div style={replace2} className="second-title-container">
                      <Link className="userLink" to={`UserDetails/${oIndex.toString()}`}>
                        {/* <button style={replace3} className="button-class-detail">{`${idNumber} TH DETAIL`}</button> */}
                        <i id={oIndex} onClick={(e) => { getId(e) }} style={replace2} className="fa-solid fa-user user-icons"></i>
                      </Link>
                    </div>
                  </div>
                </div>

              )
            })}

            {
              (myData.length >= 1) &&
              myData.map((oItem, oIndex) => {
                return (
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
                    <div style={{ paddingLeft: 0, paddingRight: 0 }} className="col  ">
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

                        <Link className="userLink" to={`UserDetails/${(oIndex + dataNumber).toString()}`}>
                          {/* <button style={replace3} className="button-class-detail">{`${idNumber} TH DETAIL`}</button> */}
                          <i id={oIndex + dataNumber} onClick={(e) => { getId(e) }} style={replace2} className="fa-solid fa-user"></i>
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
