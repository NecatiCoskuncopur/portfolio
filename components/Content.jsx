import { styled } from '../stitches.config';


export default function Content({ header, title, description }) {
  return (
    <>
      <Button>{header}</Button>
      <Title>{title}</Title>
      <Text>{description}</Text>
    </>
  )
}


const Title = styled('h1', {
  fontSize: '$7',
  fontWeight: '$4',
  textAlign: 'left',
  fontFamily: '$subTitle',
  m: 0,
  mb: '30px',
  '@bp4': {
    fontSize: '$6',
    mb: '15px',
  }
});


const Button = styled('button', {
  fontSize: '$2',
  fontWeight: '$3',
  background: 'rgba(255, 255, 255, 0.08)',
  color: '$primary',
  height: '42px',
  width: '160px',
  br: '50px',
  pointerEvents: 'none',
  m: 0,
  mb: '10px',
})


const Text = styled('p', {
  color: '$color6',
  fontSize: '$2',
  lineHeight: '30px',
  maxWidth: '90%',
  m: 0,
  mb: '40px',
  '@bp6': {
    maxWidth: '100%',
  }
})