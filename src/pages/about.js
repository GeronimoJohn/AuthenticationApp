import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About page</h1>
        <p>This is the bio of the page</p>
        <Link to="/contact">Contact Me</Link>
      </Layout>
    </div>
  )
}

export default AboutPage
