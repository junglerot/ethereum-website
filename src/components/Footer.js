import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

import { motion, AnimatePresence } from "framer-motion"

import styled from "styled-components"

import devconLogo from "../images/devcon-logo.svg"
import blogLogo from "../images/ethereum-line-logo.svg"
import canary from "../images/canary.svg"

// TODO use gatsby-image for star
// import star from "../images/star.png"

const StyledFooter = styled(motion.footer)`
  background-color: rgba(255, 255, 255, 0.15);
  bottom: 0;
  font-size: 0.875rem;
`

const FooterContentDiv = styled(motion.div)`
  padding: 32px;
  transform-origin: bottom center;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 24px;
  }
`

const FooterChildDiv = styled(motion.div)`
  @media (max-width: 768px) {
    padding: 16px;
  }
`
const FooterDivContact = styled(FooterChildDiv)`
  flex: 0 1 200px;
  @media (max-width: 768px) {
    flex: 0 1 150px;
    padding: 0;
  }
`
const FooterDivCanary = styled(FooterChildDiv)`
  flex: 0 1 600px;
  /* TODO confirm with Tomo */
  font-size: 0.75rem;
  @media (max-width: 768px) {
    flex: 0 1 600px;
    order: 3;
  }
`

const CanaryContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const CanaryContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  @media (max-width: 768px) {
    padding-left: 0;
  }
`

const FooterDivLinks = styled(FooterChildDiv)`
  display: flex;
  justify-content: space-between;
  flex: 0 1 160px;
  @media (max-width: 768px) {
    flex: 0 1 140px;
    padding: 0;
  }
`

const IconContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`

const ImageAndTextLink = styled.a`
  display: flex;
  flex-direction: column;
`

// TODO footer should "push up" the rest of the content (including constellation)
const Footer = () => {
  const [isOpen, toggleOpen] = useState(false)

  const footerToggleIcon = isOpen ? faChevronDown : faChevronUp
  return (
    <>
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          color: `white`,
          padding: `32px`,
        }}
      >
        <div>© Ethereum Foundation, {new Date().getFullYear()}</div>
        {/* TODO star image behind chevron */}
        <IconContainer onClick={() => toggleOpen(!isOpen)}>
          <FontAwesomeIcon icon={footerToggleIcon} />
        </IconContainer>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <StyledFooter
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 1.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <FooterContentDiv
              variants={{ collapsed: { scale: 0.9 }, open: { scale: 1 } }}
              transition={{ duration: 0.8 }}
            >
              <FooterDivContact>
                <strong>General Contact:</strong>
                <div style={{ marginBottom: `16px` }}>
                  <a href="mailto:info@ethereum.org">info@ethereum.org</a>
                </div>
                <strong>Press Contact:</strong>
                <div>
                  <a href="mailto:press@ethereum.org">press@ethereum.org</a>
                </div>
              </FooterDivContact>
              <FooterDivCanary>
                <CanaryContainer>
                  <img src={canary} alt="Ethereum Foundation Blog Logo" />
                  <CanaryContent>
                    <div style={{ marginBottom: `16px` }}>
                      The Ethereum Foundation (Stiftung Ethereum) has never been
                      contacted by any agency anywhere in the world in a way
                      which requires that contact not to be disclosed.
                    </div>
                    <div>
                      Stiftung Ethereum will publicly disclose any sort of
                      inquiry from government agencies that falls outside the
                      scope of regular business operations.
                    </div>
                  </CanaryContent>
                </CanaryContainer>
              </FooterDivCanary>
              <FooterDivLinks>
                {/* TODO style links */}
                <ImageAndTextLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://devcon.org"
                >
                  <img src={devconLogo} alt="Devcon Logo" />
                  Devcon.org
                </ImageAndTextLink>
                <ImageAndTextLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://blog.ethereum.org"
                >
                  <img src={blogLogo} alt="Ethereum Foundation Blog Logo" />
                  Blog
                </ImageAndTextLink>
              </FooterDivLinks>
            </FooterContentDiv>
          </StyledFooter>
        )}
      </AnimatePresence>
    </>
  )
}

export default Footer
