import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  dark: {
    color: 'white',
    backgroundColor: '#474B4F',
  },
  videoClass: {
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
  },
  img: {
    width: '100%',
    marginTop: '0',
  },
});
