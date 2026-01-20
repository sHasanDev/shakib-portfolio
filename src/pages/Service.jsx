import React, { useEffect } from "react";
import ServiceHero from "../components/services/ServiceHero";
import ServicesGrid from "../components/services/ServicesGrid";
import PricingPlans from "../components/services/PricingPlans";
import FAQSection from "../components/services/FAQSection";

const Service = () => {

    useEffect(() => {
        document.title = "Service | Shakib";
      }, []);

    return (
        <>
            <div className=""><ServiceHero /></div>
            <div className=""><ServicesGrid /></div>
            <div className=""><PricingPlans /></div>
            <div className=""><FAQSection /></div>
        </>
    );
};

export default Service;