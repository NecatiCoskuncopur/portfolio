import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, theme } = createStitches({
  theme: {
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
    },
    fontSizes: {
      1: "14px",
      2: "18px",
      3: "20px",
      4: "22px",
      5: "24px",
      6: "32px",
      7: "48px",
    },
    fontWeights: {
      1: 400,
      2: 500,
      3: 600,
      4: 700,
    },
    fonts: {
      heading: "'Inter', 'sans-serif'",
      subTitle: "'Roboto', 'sans-serif'",
      body: "'Poppins', 'sans-serif'"
    },
    radii: {
      1: "4px",
      2: "8px",
      3: "16px",
    },
    colors: {
      main: "#FFFFFF", //white
      black: '#000000',
      background: "#212529", //dark
      primary: '#FFB742', // yellow_orange
      color1: '#D49125', //brandy_puch
      color2: '#383E45', //bright_gray
      color3: '#292b2E', //shark
      color4: '#1C1C1C', //cod_gray
      color5: '#ACB8C4', //cadet_blue
      color6: '#D4D4D4', //alto
      color7: '#727172' //fedora,
    },
  },
  media: {
    bp1: "(max-width: 1536px)",
    bp2: "(max-width: 1280px)",
    bp3: "(max-width: 1024px)",
    bp4: "(max-width: 768px)",
    bp5: "(max-width: 640px)",
    bp6: "(max-width: 480px)",
  },
  utils: {
    m: (value) => ({ margin: value }),
    pa: (value) => ({ padding: value }),
    mx: (value) => ({ marginLeft: value, marginRight: value }),
    my: (value) => ({ marginTop: value, marginBottom: value }),
    mt: (value) => ({ marginTop: value }),
    mr: (value) => ({ marginRight: value }),
    mb: (value) => ({ marginBottom: value }),
    ml: (value) => ({ marginLeft: value }),
    px: (value) => ({ paddingLeft: value, paddingRight: value }),
    py: (value) => ({ paddingTop: value, paddingBottom: value }),
    pt: (value) => ({ paddingTop: value }),
    pr: (value) => ({ paddingRight: value }),
    pb: (value) => ({ paddingBottom: value }),
    pl: (value) => ({ paddingLeft: value }),
    br: (value) => ({ borderRadius: value }),
  },
});