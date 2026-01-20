import React, { useEffect } from "react";

import Hero from '../components/home/Hero';
import TechnicalSkills from "../components/home/TechnicalSkills";
import PortfolioPreview from "../components/home/PortfolioPreview";

const Home = () => {

  useEffect(() => {
    document.title = "Home | Shakib";
  }, []);

  return (
    <>
      <div className=''>
        <div className="bg-[url(assets/images/5630939.jpg)] bg-cover"><Hero /></div>
        <div className=""><TechnicalSkills /></div>
        <div className=""><PortfolioPreview /></div>
        
        
        
      </div>
    </>
    
  );
};

export default Home;
