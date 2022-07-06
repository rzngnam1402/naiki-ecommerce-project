import React from 'react'
import Banner from '../../components/banner/banner'
import ContactForm from '../../components/contact/contact-form'
import ContactHeader from '../../components/contact/contact-header'

const ContactPage = () => {
    return (
        <div>
            <ContactHeader />
            <Banner />
            <ContactForm />
        </div>
    )

}

export default ContactPage