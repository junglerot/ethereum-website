'use client'
import React from 'react';
import MouseDownLink from '../components/MouseDownLink';
import ContentBlock from '../components/page/Content';

const HomePage = (props: any) => {
  return (
    <ContentBlock isHomePage>
      <div id="content-body" className="disable--selection">
        <h1>Welcome to the Infinite Garden</h1>
        <MouseDownLink href="/infinitegarden" id="next-navigation">
          <object data="/assets/double-spirale.svg" width="50" height="50" aria-labelledby="Next"> Next</object>
          <span> Explore </span>
        </MouseDownLink>
      </div>
    </ContentBlock>
  )
}

export default HomePage;