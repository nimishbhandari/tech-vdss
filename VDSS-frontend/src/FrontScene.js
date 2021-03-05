import Contact from "./Components/ContactForm";
import ScrollElement from "./Components/ScrollLink/ScrollElement";
import Footer from "./Components/Footer";
import React, { useState } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Domain from "./Components/Domains/Domain";
import About from "./Components/AboutUs/About";

function IndexPage(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Contact isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className=" wrapper background">
                <ScrollElement name="home">
                    <Home isOpen={isOpen} setIsOpen={setIsOpen} />
                </ScrollElement>
            </div>
            <ScrollElement name="about">
                <About />
            </ScrollElement>
            <ScrollElement name="domains">
                <Domain />
            </ScrollElement>
            <ScrollElement name="footer">
                <Footer />
            </ScrollElement>
        </>
    )
}

export default IndexPage;