module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      xs: '412px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      fullhd: '1440px'
    },
    colors: {
      transparent: 'transparent',
  
      black: 'rgb(0, 0, 0)',
  
      white: 'rgb(255, 255, 255)',
      'white-25': 'rgb(255, 255, 255, 0.25)',
      'white-40': 'rgba(255, 255, 255, 0.4)',
      'white-90': 'rgba(255, 255, 255, 0.9)',
  
      dark: 'rgb(0, 22, 39)', // #001627
      light: 'rgb(249, 249, 249)',
  
      blue: 'rgb(0, 87, 155)', // #00579b
      'blue-green': 'rgb(17,92,102)', // #115C66
      'blue-legacy': 'rgb(45, 159, 209)',
      'blue-legacy-80': 'rgba(45, 159, 209, 0.8)',
  
      'cyan-dark': 'rgb(30,161,179)', // #1EA1B3
      cyan: 'rgb(38, 198, 218)', // #26C6DA
      'cyan-light': 'rgb(98, 211, 226)',
  
      'grey-darker': 'rgb(79, 109, 122)',
      'grey-darker-10': 'rgba(79, 109, 122, 0.1)',
      'grey-darker-30': 'rgba(79, 109, 122, 0.3)',
      'grey-darker-40': 'rgba(79, 109, 122, 0.4)',
      'grey-darker-50': 'rgba(79, 109, 122, 0.5)',
      'grey-darker-80': 'rgba(79, 109, 122, 0.8)',
  
      'grey-dark': 'rgb(114, 138, 149)', // #728a95
      'grey-dark-60': 'rgba(114, 138, 149, 0.6)',
      'grey-dark-80': 'rgb(114, 138, 149, 0.8)',
  
      grey: 'rgb(192, 214, 223)',
      'grey-35': 'rgba(192, 214, 223, 0.35)',
      'grey-50': 'rgba(192, 214, 223, 0.5)',
      'grey-80': 'rgba(192, 214, 223, 0.8)',
  
      'grey-light': 'rgb(219, 232, 238)',
      'grey-light-35': 'rgb(219, 232, 238, 0.35)',
      'grey-light-50': 'rgb(219, 232, 238, 0.5)',
      'grey-light-80': 'rgb(219, 232, 238, 0.8)',
  
      'grey-lighter': 'rgb(243, 247, 249)',
  
      'grey-tag': 'rgb(233,241,245)', // #e9f1f5
  
      'red-dark': 'rgb(184, 0, 54)',
      red: 'rgb(255, 37, 47)', // #ff252f
      'orange-dark': 'rgb(223, 94, 69)', // # #df5e45
  
      yellow: 'rgb(230, 170, 40)', // #e6aa28
      'yellow-darker': 'rgb(204, 150, 35)', // #cc9623
  
      green: 'rgb(20, 204, 97)',
      'green-dark': 'rgb(16, 171, 80)', // #10AB50
      
      'peacock-blue': 'rgb(0, 87, 155)', // #00579b
  
      'apple-green': 'rgb(126, 211, 33)', // #7ed321
      'apple-green-darker': 'rgba(106, 179, 29)',
  
      tealish: 'rgb(30, 161, 179)', // #1ea1b3
      squash: 'rgb(230, 170, 40)',
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
    },
    backgroundColor: theme => theme('colors'), // bg-{color}
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: { // bg-{size}
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.300', 'currentColor'),
    }),
    borderRadius: { // rounded{-side?}{-size}
      none: '0',
      sm: '.125rem', // 2px
      normal: '.1875rem', // 3px
      default: '.25rem', // 4px
      lg: '.5rem', // 8px
      full: '9999px',
    },
    borderWidth: { // border{-side?}{-width?}
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
      '16': '16px',
  },
    boxShadow: { // shadow-{-size?}
      'button-hover': '0 5px 15px -2px rgba(0, 22, 39, 0.35)',
      card: '0 1px 2px 0 rgba(79, 109, 122, 0.05), 0 1px 3px 0 rgba(79, 109, 122, 0.1)',
      'card-hover':
          '0 1px 2px 0 rgba(79, 109, 122, 0.05), 0 1px 3px 0 rgba(79, 109, 122, 0.1),' +
          ' 0 10px 30px 0 rgba(0, 22, 39, 0.35)',
      'campaign-metric': '0 1px 2px 0 rgba(79, 109, 122, 0.05), 0 1px 3px 0 rgba(79, 109, 122, 0.1), ' +
          '0 5px 15px 0 rgba(0, 22, 39, 0.15)',
      default: '0 2px 4px 0 rgba(0,0,0,0.10)',
      sm: '0 1px 2px 0 rgba(79, 109, 122, 0.05), 0 1px 3px 0 rgba(79, 109, 122, 0.1)',
      md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      outline: '0 0 0 3px rgba(52,144,220,0.5)',
      none: 'none',
  },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    fill: {
      current: 'currentColor',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      '0': '0',
      default: '1',
    },
    flexShrink: {
      '0': '0',
      default: '1',
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      '7': '0.75rem', // 12px
      '6': '0.875rem', // 14px
      '5': '1rem', // 16px
      '4': '1.125rem', // 18px
      '3': '1.25rem', // 20px
      '2': '1.875rem', // 30px
      '1': '2.875rem', // 46px
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '76-1/2': '19.125rem',
      '85': '21.25rem', // 340px
      full: '100%',
      screen: '100vh',
    }),
    inset: {
      '0': '0',
      auto: 'auto',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    maxHeight: {
      full: '100%',
      screen: '100vh',
    },
    maxWidth: {
      '5': '1.25rem',
      '80': '20rem',
      '84': '21rem', // 336px
      '120': '30rem',
      full: '100%',
    },
    minHeight: {
      '0': '0',
      '80vh': '80vh',
      full: '100%',
      screen: '100vh',
    },
    minWidth: {
      '0': '0',
      '3-3/4': '0.9rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '10': '2.5rem', // 40px
      '31-1/2': '7.5rem',
      '40': '10rem',
      '48': '12rem',
      full: '100%',
    },
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: { // opacity-{size}
      '0': '0',
      '25': '0.25',
      '50': '0.5',
      '75': '0.75',
      '100': '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
    },
    padding: theme => ({
      ...theme('spacing'),
    }),
    stroke: {
      current: 'currentColor',
    },
    textColor: theme => theme('colors'),
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '68': '17rem',
      '80': '20rem',
      '84': '21rem', // 336px
      '178-3/4': '44.6875rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      full: '100%',
      screen: '100vw',
    }),
    zIndex: { // z-{size}
      auto: 'auto',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
    },
  },
  variants: {
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
  },
  corePlugins: {},
  plugins: [],
}
