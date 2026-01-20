import React, { useEffect } from "react";
import AboutMe from "../components/about/AboutMe";
import MyJourney from "../components/about/MyJourney";
import CoreValues from "../components/about/CoreValues";

const About = () => {

    useEffect(() => {
        document.title = "About | Shakib";
      }, []);

    return (
        <>
            <div className="">
                <div className=""><AboutMe /></div>
                <div className=""><MyJourney /></div>
                <div className=""><CoreValues /></div>
            </div>

        </>
    );
};

export default About;