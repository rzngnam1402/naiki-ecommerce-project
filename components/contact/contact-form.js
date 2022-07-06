import React, { useState } from "react";
import classes from './contact-form.module.css'

const ContactForm = () => {
    return (
        <>
            <form className={classes.contact_form}>
                <div className={classes.container}>
                    <div className={classes.header}>
                        <h1>Please leave us some comments !</h1>
                    </div>
                    <div className={classes.content}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                        />
                        <input
                            type="number"
                            placeholder="Phone Number"
                        />
                        <input type="text" placeholder="Address" />
                        <textarea
                            placeholder="Say something...."
                        ></textarea>
                        <button>Submit</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;