import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useNetlifyIdentity } from "react-netlify-identity-widget"

const SecondPage = () => {
  const identity = useNetlifyIdentity(
    "https://gatsby-netlify-identity-functions.netlify.com"
  )

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>This page needs login.</p>
    
      {identity && identity.user ? (
        <>
          <p style={{color: "red"}}>Hello {identity.user.user_metadata.full_name} - You are logged in.</p>
          <p style={{color: "red", padding: 20, borderStyle:"solid", borderWidth:2, borderColor:"green"}}>This is only readable when you are logged in</p>
        </>
      ) : null}

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
export default SecondPage
