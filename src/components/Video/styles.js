import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  light: {
    color: 'black',
    backgroundColor: 'white',
    '&:hover': {
      '-webkit-transform': 'scale(1.15)',
      transform: 'scale(1.15)',
      'z-index': 1000,
      position: 'relative',
    },
    '-webkit-transition': 'all 0.9s ease',
    transition: 'all 0.9s ease',
    borderColor: '#bbb',
  },
  dark: {
    color: 'white',
    backgroundColor: '#474B4F',
    '&:hover': {
      '-webkit-transform': 'scale(1.15)',
      transform: 'scale(1.15)',
      'z-index': 1000,
      position: 'relative',
    },
    '-webkit-transition': 'all 0.9s ease',
    transition: 'all 0.9s ease',
  },
  videoHomeClass: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    opacity: 0.9,
    '&:hover': {
      opacity: 1,
    },
  },
  text: {
    paddingLeft: '5%',
    paddingRight: '5%',
    height: '4em',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  img: {
    width: '100%',
    marginTop: '0',
  },
});
