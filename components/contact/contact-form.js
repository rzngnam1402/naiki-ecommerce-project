import React, { useRef } from "react";
import classes from './contact-form.module.css'

const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://naiki-ecommerce-project.vercel.app';

const ContactForm = () => {

    console.log(server);
    const nameInputRef = useRef();
    const phoneInputRef = useRef();
    const emailInputRef = useRef();
    const messageInputRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredMessage = messageInputRef.current.value;

        const newCustomer = {
            enteredName,
            enteredPhone,
            enteredEmail,
            enteredMessage,
        };

        fetch(`${server}/api/contacts`, {
            method: "POST",
            body: JSON.stringify(newCustomer),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                return response.json().then((data) => {
                    throw new Error(data.message || "Something went wrong!");
                });
            })
        alert("Form submitted successfully !");
    }

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
                            ref={nameInputRef}
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            ref={emailInputRef}
                        />
                        <input
                            type="number"
                            placeholder="Phone Number"
                            ref={phoneInputRef}
                        />
                        <input type="text" placeholder="Address" />
                        <textarea
                            placeholder="Say something...."
                            ref={messageInputRef}
                        ></textarea>
                        <button onClick={submitFormHandler}>Submit</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;