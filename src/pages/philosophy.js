import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/Layout"
import Subpage from "../components/Subpage"
import SEO from "../components/SEO"

const PageContainer = styled.div`
  margin: 6rem auto 4rem;
  max-width: 760px;
  padding: 2rem;
`

const Image = styled(Img)`
  margin: 2rem auto;
`

const PhilosophyPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "philosophy.png" }) {
        childImageSharp {
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Philosophy of Subtraction" />
      <Subpage>
        <PageContainer>
          <h1>Our Philosophy</h1>
          <p>
            The EF is committed to a philosophy of subtraction. This mean
            resisting the natural tendency of organizations to grow and
            accumulate value within themselves, and ensure instead that this
            value is created outside the Foundation in the broader Ethereum
            ecosystem.
          </p>

          <Image
            fluid={data.file.childImageSharp.fluid}
            alt="Ethereum Foundation Philosophy"
          />

          <p>
            Instead of capturing opportunities for ourselves, we distribute
            those opportunities to the community. Instead of pulling everything
            in-house, we push our resources out to teams across the ecosystem.
            We don’t compete with the ecosystem — we are thrilled when other
            organizations create value, because that means Ethereum is becoming
            more decentralized and sustainable.
          </p>
        </PageContainer>
      </Subpage>
    </Layout>
  )
}

export default PhilosophyPage
