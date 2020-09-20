import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  dark: {
    color: 'white',
    backgroundColor: '#474B4F',
  },
  videoHomeClass: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    opacity: 0.9,
    '&:hover': {
      opacity: 0.7,
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
