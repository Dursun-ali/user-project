import {  createContext, useState,useEffect } from "react";
import axios from "axios";
const AddUsercontext = createContext();

    

export const UserProvider = ({ children }) => {

    const[form,setForm]=useState();
    const [datas, setDatas] = useState([]); 
    const [loading, setLoading] = useState();
    const [myData, setMyData] = useState([]);
    const [number,setNumber]=useState(0);
    const [userDetail, setUserDetail] = useState();
    const [dataNumber,setDataNumber]=useState(8);
    const [idNumber,setIdNumber]=useState();
    const [newUser, setNewUser]=useState({});

    const [edit,setEdit] = useState();//!edit degerını bız burda false normalde
  
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
        
    }
    
    return (
        <AddUsercontext.Provider value={values}> {children} </AddUsercontext.Provider> 
    );
};

export default AddUsercontext;