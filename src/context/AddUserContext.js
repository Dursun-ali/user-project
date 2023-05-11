import {  createContext, useState,useEffect } from "react";
import axios from "axios";
const AddUsercontext = createContext();

    

export const UserProvider = ({ children }) => {

  const defaultSlider=localStorage.getItem('slider') 
    

  
    const[form,setForm]=useState();
    const [datas, setDatas] = useState([]); 
    const [loading, setLoading] = useState();
    const [myData, setMyData] = useState([]);
    const [number,setNumber]=useState(0);
    const [userDetail, setUserDetail] = useState();
    const [dataNumber,setDataNumber]=useState(8);
    const [idNumber,setIdNumber]=useState();
    const [newUser, setNewUser]=useState({});
    const [edit,setEdit] = useState();//!edit degerimiz ilk basta false;
    
    const SLİDER=localStorage.getItem('slider')
    // console.log(SLİDER);
    
    // console.log(JSON.parse(SLİDER));
      
    const [slider,setSlider]=useState(JSON.parse(SLİDER));
    const [replace,setReplace]=useState();
    const [replace1,setReplace1]=useState();
    const [replace2,setReplace2]=useState();
    const [replace3,setReplace3]=useState();
    const [replace4,setReplace4]=useState();
    const [replace5,setReplace5]=useState();
    

    useEffect(() => {
      localStorage.setItem('slider',JSON.stringify(slider))
    }, [slider]);


      var array=[{
        dark:{
            color:"white",
            backgroundColor:"#202020"
        },light:{
          backgroundColor:"#f5f5f5"
        }
      },{
        
        dark:{
            color:"white",
            backgroundColor:"#2f3641",
            borderBottom: "0.1px solid #474A56",
            borderTop: "0.1px solid #474A56"
        },light:{
          color:"#3d3d3dbe",
          backgroundColor:"#f9f9f9",

        }
      },{
        dark:{
          color:"white",
          backgroundColor:"#222831",
          borderBottom: "0.1px solid #474A56"
      },light:{
        color:"#282828",
        backgroundColor:"#FFFFFF"
      },
       
      },{
        dark:{
          color:"#EBECF1",
          backgroundColor:"#146C94"
      },light:{
        color:"#FFFFFF",
        backgroundColor:"#007BFF"
      }
      },{
        dark:{
          color:"white",
          backgroundColor:"#222831",
      },light:{
        color:"#282828",
        backgroundColor:"#FFFFFF"
      },
       
      }
      ,{
        dark:{
          boxShadow:  "0px 0px 0px 5px #04748b62",
          backgroundColor:"#222831",
          
      },light:{
        backgroundColor:"white",
      },
       
      } ]
      

      useEffect(()=>{
        if (slider) {
          setReplace(array[0].dark)
          setReplace1(array[1].dark)
          setReplace2(array[2].dark)
          setReplace3(array[3].dark)
          setReplace4(array[4].dark)
          setReplace5(array[5].dark)
        }else{
          setReplace(array[0].light)
          setReplace1(array[1].light)
          setReplace2(array[2].light)
          setReplace3(array[3].light)
          setReplace4(array[4].light)
          setReplace5(array[5].light)
        }
      },[slider])
    
     
  
    useEffect(() => {
      form && setMyData([...myData,form])
    }, [form])

    useEffect(() => {
        axios(`https://randomuser.me/api/?results=${dataNumber}`)
          .then((response) => setDatas(response.data.results))
          .catch((error) => console.log({ error }))
          .finally(() => {
            setLoading(false);
          });
      }, []);
      



    const values = {
        datas,
        setDatas,
        form,
        setForm,
        myData,
        setMyData,
        number,
        setNumber,
        userDetail,
        setUserDetail,
        dataNumber,
        setDataNumber,
        idNumber,
        setIdNumber,
        edit, 
        setEdit,
        newUser,
        setNewUser,
        slider,
        setSlider,
        replace,
        setReplace,
        replace1,
        setReplace1,
        replace2,setReplace2,
        replace3,setReplace3,
        replace4,setReplace4,
        replace5,setReplace5
        
    }
    
    return (
        <AddUsercontext.Provider value={values}> {children} </AddUsercontext.Provider> 
    );
};

export default AddUsercontext;