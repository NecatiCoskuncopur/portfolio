import Image from 'next/image'
import { styled } from '../stitches.config';
import { motion } from 'framer-motion';
import Loader from './Loader';
import { useState, useEffect } from 'react';




export default function Footer({ socialMedia }) {
  const [data, setData] = useState(null);

  async function updateQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const { ...data } = await response.json();
    setData(data);

  }

  useEffect(() => {
    updateQuote();

    const interval = setInterval(() => {
      updateQuote()
    }, 10000)


    return () => clearInterval(interval)
  }, []);


  if (!data) return null;

  return (
    <Container>

      <Content>
        <Loader />
        <Text
          as={motion.p}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 2 }}
        >
          “{data.content}”
          <span>-{data.author}</span>
        </Text>

        <List>
          {
            socialMedia.map((item) => (
              <ListItem key={item.id}>
                <Anchor href={item.link}>
                  <Image src={item.icon} width={25} height={25} alt={item.platform} title={item.platform} />
                </Anchor>
              </ListItem>
            ))
          }
        </List>
      </Content>
      <Bottom >
        <Rights>&copy; Necati Coskuncopur | All Rights Reserved</Rights>
      </Bottom>
    </Container>
  )
}



const Container = styled('footer', {
  background: '$color4',
  height: 'auto',
  width: '100%',
  pt: '40px',
  color: '$main'
});


const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center'
});


const Text = styled('p', {
  maxWidth: '480px',
  height: '110px',
  my: '10px',
  mx: 'auto',
  color: '$color5',
  fontSize: '$3',
  '@bp6': {
    maxWidth: '350px',
  },
  span: {
    display: 'block',
    textAlign: 'right',
    mt: '10px',
    opacity: 0.5
  }
});




const List = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mt: '16px',
  mx: 0,
  mb: '48px',
  pa: 0,
});


const ListItem = styled('li', {
  my: 0,
  mx: '10px'
});


const Anchor = styled('a', {
  transition: '0.5s',
  display: 'inline-block',
  '&:hover': {
    transform: 'translateY(-10px)'
  }
});


const Bottom = styled('div', {
  backgroundColor: '$color4',
  filter: 'brightness(65%)',
  width: '100%',
  py: '20px',
  px: 0,
  textAlign: 'center',
});


const Rights = styled('p', {
  fontSize: '$1',
  wordSpacing: '2px',
  textTransform: 'capitalize'
});

