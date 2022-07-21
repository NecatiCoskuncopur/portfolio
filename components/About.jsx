import Image from 'next/image'
import Content from './Content'

import { styled } from '../stitches.config';
import { motion } from 'framer-motion';
import { containerVariants } from 'variants';
import Button from './Button';



export default function About({ image, header, title, description, link }) {
  return (
    <Container as={motion.div} variants={containerVariants} initial={containerVariants.offscreen} whileInView={containerVariants.onscreen} >
      <Card>
        <Image src={image} width={620} height={590} alt='mysterious man image' />
      </Card>
      <Card  >
        <Content header={header} title={title} description={description} />
        <Button text='Download CV' href={link} />
      </Card>

    </Container >
  )
}


const Container = styled('div', {
  width: '100%',
  display: 'flex',
  pa: '70px 50px',
  alignItems: 'center',
  color: '$main',
  '@bp4': {
    flexDirection: 'column',
  }
});


const Card = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  '&:not(:last-child)': {
    ml: '50px',
  },
  '@bp4': {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    '&:not(:last-child)': {
      display: 'none',
    },
    '&:not(:first-child)': {
      ml: 0,
    }
  }
});




