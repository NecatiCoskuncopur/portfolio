import { globalCss } from '../stitches.config';


const globalStyles = globalCss({
  '*': {
    m: 0,
    p: 0,
    boxSizing: 'border-box',
    border: 'none',
    listStyle: 'none',
    '&:focus': {
      outline: 'none',
    }
  },
  body: {
    m: 0,
    pa: 0,
    backgroundColor: '$background',
    fontFamily: '$body'
  },
  a: {
    color: 'inherit',
    textDecoration: 'none'
  }
});


function MyApp({ Component, pageProps }) {
  globalStyles();
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
