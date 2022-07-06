import React from 'react'
import Banner from '../../components/banner/banner'
import ContactBanner from '../../components/contact/contact-banner'
import ContactForm from '../../components/contact/contact-form'
import ContactHeader from '../../components/contact/contact-header'

const ContactPage = () => {
    return (
        <div>
            <ContactHeader />
            <ContactBanner />
            <ContactForm />
        </div>
    )

}

export default ContactPage