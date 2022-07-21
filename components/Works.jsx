import Image from 'next/image';
import Content from './Content';

import { styled } from '../stitches.config';
import { motion } from 'framer-motion';
import { containerVariants } from '../variants';


export default function Works({ header, title, works }) {
  return (
    <Container id='works' as={motion.div} variants={containerVariants} initial={containerVariants.offscreen} whileInView={containerVariants.onscreen}>
      <Content header={header} title={title} />
      <List>
        {works?.map((work) => (
          <li key={work.id}>
            <Box >
              <Image src={work.image} width={390} height={290} layout='responsive' objectFit='cover' alt='work' />
              <div>
                <Name>{work.name}</Name>
                <Links>
                  <Anchor href={work.github} target='_blank' rel="noopener noreferrer" title='Github'>
                    <Image src='/img/icons/github.svg' width={100} height={50} />
                  </Anchor>
                  <Anchor href={work.live} target='_blank' rel="noopener noreferrer" title='Live Demo'>
                    <Image src='/img/icons/live.svg' width={100} height={50} />
                  </Anchor>
                </Links>
              </div>

            </Box>
          </li>
        ))}
      </List>
    </Container>
  )
};


const Container = styled('div', {
  width: '100%',
  py: '70px',
  px: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  color: '$main',
  '@bp6': {
    py: '70px',
    px: '50px'
  }
});


const List = styled('ul', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridColumnGap: '30px',
  gridRowGap: '30px',
  m: 0,
  '@bp2': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: '15px',
    gridRowGap: '15px',
    pl: 0,
    mb: 0,
  },
  '@bp4': {
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridRowGap: '15px',
  },
  '@bp6': {
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridRowGap: 0,
  }
});


const Box = styled('div', {
  width: '390px',
  height: '290px',
  br: '$1',
  display: 'block',
  position: 'relative',
  overflow: 'hidden',
  '@bp6': {
    width: '320px',
    height: '290px',
    m: 0,
    pa: 0,
  },
  div: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '45%',
    background: '$black',
    opacity: 0.8,
    py: 0,
    px: '21px',
    transform: `translateY(100%)`,
    transition: '0.3s transform',
    textAlign: 'center',
  },
  '&:hover': {
    div: {
      transform: `translateY(0)`,
    }
  }
});


const Name = styled('h2', {
  fontSize: '$6',
  fontWeight: '$4',
  color: '$main',
  mt: '10px'
});


const Links = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mb: '20px',
});


const Anchor = styled('a', {
  width: '40px',
  height: '40px',
  backgroundColor: '$primary',
  br: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.3s transform',
  '&:not(:last-child)': {
    mr: '10px'
  },
  '&:hover': {
    transform: 'scale(1.2)'
  }
})