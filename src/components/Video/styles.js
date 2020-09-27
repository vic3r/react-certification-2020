import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  light: {
    color: '#90949C',
    backgroundColor: '#E9EBEE',
    '&:hover': {
      '-webkit-transform': 'scale(1.15)',
      transform: 'scale(1.15)',
      'z-index': 1000,
      position: 'relative',
    },
    '-webkit-transition': 'all 0.9s ease',
    transition: 'all 0.9s ease',
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
    '&:hover $textDescription': {
      opacity: 1,
      display: 'block',
      fontSize: 12,
      transition: 'all ease-in-out .5s',
    },
    '&:hover $text': {
      height: '4em',
      transition: 'all ease-in-out .5s',
    },
    transition: 'all ease-in-out 1s',
  },
  text: {
    paddingLeft: '5%',
    paddingRight: '5%',
    height: '3em',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  textDescription: {
    display: 'inline',
    fontSize: 0,
  },
  img: {
    width: '100%',
    marginTop: '0',
  },
});
