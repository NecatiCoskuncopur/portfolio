import { styled } from '../stitches.config';


export default function Button({ href, text }) {
  return (
    <Anchor href={href} target='_blank' >{text}</Anchor>
  )
};


const Anchor = styled('a', {
  br: '50px',
  backgroundColor: '$background',
  border: '2px solid $primary',
  height: '54px',
  width: '148px',
  color: '$main',
  fontSize: '$1',
  fontWeight: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all .35s',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  '&:before': {
    content: "",
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '-100%',
    left: '0',
    background: '$primary',
    zIndex: -1,
    opacity: 0.5,
    transition: 'all .35s',
  },
  '&:after': {
    content: "",
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '-100%',
    left: '0',
    background: '$primary',
    zIndex: -1,
    transition: 'all .35s',
    transitionDelay: '.2s'
  },
  '&:hover': {
    '&:before': {
      top: 0,
    },
    '&:after': {
      top: 0,
    }
  }
});
