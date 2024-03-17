import React from 'react';
import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"

import Navigation from "../components/common/navigation/navigation"
import Footer from "../components/sections/footer"


const PostsPage = () => (
  <Layout>
    <SEO title="posts" />
    <Navigation />
    <Footer />
  </Layout>
)

export default PostsPage
