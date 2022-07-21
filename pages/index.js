import Head from 'next/head'

import { styled } from '../stitches.config';
import { data } from 'data'

import {
  About,
  Navbar,
  Intro,
  Skills,
  Works,
  Footer
} from 'components'






export default function Home({ info }) {
  return (
    <Container>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        items={info.navigation}
      />
      <Intro
        intro={info.intro}
        stats={info.widget}
      />
      <About
        header={info.about.header}
        title={info.about.title}
        description={info.about.description}
        image={info.about.image}
        link={info.about.link}
      />
      <Skills
        header={info.skills.header}
        title={info.skills.title}
        description={info.skills.description}
        skills={info.skills.skillsDetail}
      />
      <Works
        header={info.works.header}
        title={info.works.title}
        works={info.works.works}
      />
      <Footer socialMedia={info.socialMedia} />

    </Container>
  )
};


const Container = styled('main', {
  width: '100%',
  backgroundColor: '$background'
});


export async function getStaticProps() {
  const info = data;
  return {
    props: {
      info
    }
  }
}

