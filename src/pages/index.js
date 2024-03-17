import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import PostsLink from "../components/sections/PostsLink"
import Footer from "../components/sections/footer"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <Features />
    <PostsLink />
    <Footer />
  </Layout>
)

export default IndexPage
