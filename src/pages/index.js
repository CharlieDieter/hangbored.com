import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import FormSection from "../components/FormSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Hangbored" />
    <Hero />
    <FormSection />
  </Layout>
)

export default IndexPage
