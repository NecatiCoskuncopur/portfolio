import { motion } from 'framer-motion';
import { styled } from '../stitches.config';



const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5
      },
      y: {
        yoyo: Infinity,
        duration: 0.25
      },
    }
  }
};


export default function Loader() {
  return (
    <Load
      as={motion.div}
      variants={loaderVariants}
      animate='animationOne'
    >

    </Load>
  )
};


const Load = styled('div', {
  width: '10px',
  height: '10px',
  my: '40px',
  mx: 'auto',
  br: '50%',
  backgroundColor: '$main',
})