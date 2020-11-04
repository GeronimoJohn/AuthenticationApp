import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>Contact page</h1>
        <p>This will be the contact details area</p>
        <a href="https://www.google.co.nz/" target="blank">
          Google
        </a>
      </Layout>
    </div>
  )
}

export default ContactPage
