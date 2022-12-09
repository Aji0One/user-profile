import React ,{useState,useEffect} from "react";
import Sidebar from "../Sidebar/sidebar";
import "../Users/user.css";
import { Button,Box ,TextField} from "@mui/material";
import Card from "./card";
import axios from "axios";

function Profile () {

    const [val,setVal]= useState("");
    const [state, setState]= useState(false);
    const [response,setResponse]= useState();
    const handleChange=(e) => {
        setVal(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setState(!state)
    }

   useEffect( () => {
        async function fetchData () {
        await axios.get(`https://632138b082f8687273ae2989.mockapi.io/guvi/crud/user/${val}`).then((res) => {setResponse(res.data);} )
        }
        fetchData();
        
    },[val])
        
    
    return(
        <>
        <div className="dashboard">
                <div className="dashboard-container">
                    <Sidebar/>
                    <div className="main">
                    <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch'},
        }}
       
        autoComplete="off"
        style={{ padding: "20px" }}
        onSubmit={(e)=> handleSubmit(e)}
        
      >
        <TextField id="id" 
        label="Enter Your Id" 
        name="id"
        variant="standard" 
       type="number"
     value={val}
     onChange={handleChange}

        /><br />{val.length> 0 ? <Button variant="outline" type= "submit" > Submit</Button>:<Button disabled></Button> }
        </Box>
                        <div className="main-container">
                            {val.length > 0 && state? <Card res= {response} />: <></>}
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;