import React, { useState, useEffect } from "react";
import { BiCalendar} from 'react-icons/bi';
import { BsClock} from 'react-icons/bs';
import {FiAlignCenter,FiSettings,FiZoomIn,FiZoomOut} from 'react-icons/fi';
import "./sidebar.css";
const Sidebar = ()=>{
    return(
    <div className="sidebar">
        <div>
        <BiCalendar style={{color:"white"}}/>
        </div>
        <div>
        <BsClock style={{color:"white"}}/>
        </div>
        <div>
        <FiAlignCenter style={{color:"white"}}/>
        </div>
        <div>
        <FiSettings style={{color:"white"}}/>
        </div>
        <div>
        <FiZoomIn style={{color:"white"}}/>
        </div>
        <div>
        <FiZoomOut style={{color:"white"}}/>
        </div>
    </div>
    )

}
export default Sidebar;