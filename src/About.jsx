import React from "react";
// import { NavLink } from "react-router-dom";
import web from '../src/images/img.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Common from "./Common";

const About = (props) => {
    return (
        <>
         <Common name="Welcome to About page" imgsrc={web} visit="/contact" btname="Contact Now"/>
        </>
    )
}
export default About;