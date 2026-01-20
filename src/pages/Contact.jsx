import React, { useEffect } from "react";
import ContactLayout from "../components/contact/ContactLayout";
import ContactFAQ from "../components/contact/ContactFAQ";

const Contact = () => {

    useEffect(() => {
        document.title = "Contact | Shakib";
      }, []);

    return (
        <>
            <div className=""><ContactLayout /></div>
            <div className=""><ContactFAQ /></div>
        </>
    );
};

export default Contact;