import React ,{useState} from "react";
import Sidebar from "../Sidebar/sidebar";
import "./user.css";
import { Button } from "@mui/material";
import Tables from "./table";
import Form from "./form";

function User() {

    let formContent = {
        id:"",
        name: "",
        age: "",
        email: "",
        gender: "",
        courses: "",
        city:"",
        state:"",
        error:{
          name: "",
          age: "",
          email: "",
          gender: "",
          courses: "",
          city:"",
          state:"",
        }
      }

      const [formData, setFormData] = useState(formContent);
    const [state,setState] = useState(true);
    const handleState= () => {
        setState(!state);
    }
    
    return(
        <>
        <div className="dashboard">
                <div className="dashboard-container">
                    <Sidebar/>
                    <div className="main">
                        <Button vairant="contained" onClick={handleState}>{state ? "Create User" : "View Users"}</Button>
                        <div className="main-container">
                            { state ?  <Tables change={state} changes={setState} formData={ formData} setFormData={ setFormData} />
                            : <Form formData={ formData} setFormData= { setFormData} formContent={ formContent} change={state} changes={setState} /> }
                           
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
}

export default User;