import React from "react";
// import { NavLink } from "react-router-dom";
import web from '../src/images/img1.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Common from "./Common";
const Home = () => {
    return (
        <>
        <Common name="Grow your buisness" imgsrc={web} visit="/service" btname="Get started"/>
        </>      
    )
}

export default Home;
