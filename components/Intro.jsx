import Image from 'next/image'
import Widget from './Widget'
import { motion } from 'framer-motion';
import { containerVariants } from '../variants';
import { styled } from '../stitches.config';


export default function Intro({ intro, stats }) {
  return (
    <>
      <Container id='intro' as={motion.div} variants={containerVariants} initial={containerVariants.offscreen} whileInView={containerVariants.onscreen}>
        <Name >Hi, I am <span>{intro.name}</span> 👋</Name>
        <Title>{intro.title}</Title>
        <Text>{intro.description}</Text>

        <Wrapper>
          <Image src={intro.avatar} alt='pp' width={300} height={300} objectFit='contain' />
        </Wrapper>


      </Container>
      <Widget stats={stats} />
    </>
  )
};


const Container = styled('div', {
  width: '100%',
  fontFamily: '$heading',
  color: '$main',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  pt: '100px',
  '@bp6': {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
});


const Text = styled('p', {
  fontSize: '$5',
  mt: 0,
  mx: 0,
  mb: '24px',
  '@bp4': {
    fontSize: '$3'
  },
  '@bp6': {
    display: 'none',
  }
});


const Wrapper = styled('div', {
  br: '50%',
  overflow: 'hidden',
  '@bp6': {
    width: '250px',
    height: '250px',
  }
});


const Name = styled('h1', {
  fontWeight: '$4',
  fontSize: '$6',
  mt: 0,
  mx: 0,
  mb: '24px',
  '@bp4': {
    fontSize: '$4'
  },
  '@bp6': {
    fontSize: '$2'
  },
  span: {
    color: '$primary',
    borderBottom: '1px solid $primary'
  }
});


const Title = styled('div', {
  fontSize: '$5',
  fontWeight: '$4',
  mt: 0,
  mx: 0,
  mb: '24px',
  backgroundClip: 'text',
  '@bp4': {
    fontSize: '$3'
  },
  '@bp6': {
    fontSize: '$1'
  }
})