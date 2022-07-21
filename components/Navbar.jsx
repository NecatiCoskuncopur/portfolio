import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { styled } from '../stitches.config';


export default function Navbar({ items }) {
  const [open, setOpen] = useState(false)
  return (
    <Container>

      <Link href='/'>
        <a>
          <Wrapper as={motion.div} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 75 }}>
            <Image style={{ cursor: 'pointer' }} src='/img/logo.svg' width={90} height={56} alt='logo' />

          </Wrapper>
        </a>
      </Link>
      <List as={motion.ul} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: 'spring' }}>
        {
          items.map((item, index) => (
            <ListItem
              key={index}
              css={{
                display: 'inline',
                mr: '30px',
                fontWeight: '$3',
                color: '$color5',
                transition: '0.2s color ease-in',
                cursor: 'pointer',
                position: 'relative',
                '&::before': {
                  content: item.name,
                  transition: 'all 0.5s ease-in-out',
                  color: '$primary',
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  width: 0,
                  overflow: 'hidden',
                },
                '&:hover': {
                  '&::before': {
                    width: '100%',
                  }
                },
                '@bp6': {
                  display: 'none'
                }
              }}
            >
              <Link href={item.href}><a>{item.name}</a></Link></ListItem>
          ))
        }
      </List>
      <Hamburger onClick={() => setOpen(!open)}>
        <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 0.2, type: 'spring' }} />
        <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 0.4, type: 'spring' }} />
        <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 0.6, type: 'spring' }} />
      </Hamburger>
      <Menu onClick={() => setOpen(false)} style={{ right: open ? '0px' : '-50vw' }}>
        {
          items.map((item, index) => (
            <li key={index}><Link href={item.href}><a>{item.name}</a></Link></li>
          ))
        }
      </Menu>
    </Container>
  )
};


const Container = styled('div', {
  height: '66px',
  width: '100%',
  backgroundColor: '$color4',
  color: '$color5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  py: 0,
  px: '100px',
  fontSize: '$2',
  position: 'fixed',
  zIndex: 9999,
  top: 0,
  overflow: 'hidden',
  '@bp4': {
    py: 0,
    px: '20px'
  }
});


const Wrapper = styled('div', {
  br: '50%',
  overflow: 'hidden',
  '@bp4': {
    width: '70px',
    height: '45px'
  }
});


const List = styled('ul', {
  display: 'flex',
  alignItems: 'center'
});


const ListItem = styled('li', {});


const Hamburger = styled('div', {
  display: 'none',
  width: '25px',
  height: '20px',
  cursor: 'pointer',
  '@bp6': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  div: {
    width: '100%',
    height: '3px',
    backgroundColor: '$main'
  }
});


const Menu = styled('ul', {
  display: 'none',
  position: 'fixed',
  width: '50%',
  height: 'calc(100vh - 66px)',
  backgroundColor: '$color4',
  top: '66px',
  zIndex: 9999,
  m: 0,
  pa: 0,
  fontWeight: '$4',
  color: '$color5',
  transition: 'all 1s ease',
  br: '$4',
  opacity: 0.9,
  '@bp6': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});









