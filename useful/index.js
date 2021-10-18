// import dynamic from 'next/dynamic'
// import {
//   SEO,
//   Hero,
//   About,
//   Transparency,
//   Layout,
//   MoreReason,
//   Visa,
//   SplitInEMI,
//   JoiningFees,
//   PayinThree,
//   Rewards,
//   OpenForBeta,
// } from "components";
// import Content from 'components/Content';

// const ScrollAnimation = dynamic(() => import('components/ScrollAnimation'))

// export default function Home() {
//   return (
//     <Layout>
//       <SEO />
//       <Hero />
//       <OpenForBeta />
//       <PayinThree />
//       <Rewards />
//       <SplitInEMI />
//       <JoiningFees /> 
//       <Visa />
//       <ScrollAnimation/>
//       <MoreReason />
//       <Transparency />
//       <About />
//       <Content 
//       title="Pay in 3 parts"
//       description="Pay for anything & everything and just pay 1/3rd every month. Nothing more, not even a rupee."
//       align="centergit"
//       src="https://www.xmple.com/wallpaper/black-yellow-graph-paper-grid-3840x2160-c2-000000-ffd700-l2-11-360-a-15-f-20.svg"
//       alt="default image"
//        />
//     </Layout>
//   );
// }

import React from 'react'
import Page from 'components/Page'
import { Layout } from 'components'
import StoryblokService from '../utils/storyblok-service'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      story: props.res.data.story
    }
  }
  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query)
    let res = await StoryblokService.get('cdn/stories/home', {
      "resolve_relations": "faetured-articles.articles"
    })
    return {
      res
    }
  }
  componentDidMount() {
    StoryblokService.initEditor(this)
  }
  render() {
    const contentOfStory = this.state.story.content

    return (
      <Layout>
        <Page content={contentOfStory} />
      </Layout>
    )
  }
}