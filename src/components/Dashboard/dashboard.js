import React from "react";
import Sidebar from "../Sidebar/sidebar";
import "./dashboard.css";
function Dashboard(){
    return(

        <>
            <div className="dashboard">
                <div className="dashboard-container">
                    <Sidebar/>
                    <div className="main">
                        <div className="main-container">
                            <div className="main-options">
                                <div className="main-option">
                                    <h3>Welcome to the React Session</h3>
                                </div>
                                <div className="main-option">
                                    <img src=" https://tse4.mm.bing.net/th?id=OIP.QQ6TOcuTisxnw6sW0_yjgwHaDt&pid=Api&P=0" alt="react-pic" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Dashboard;