import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  container: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    paddingTop: '56.25%',
  },
  videoClass: {
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    width: '100%',
    height: '100%',
    scrolling: 'no',
    position: 'absolute',
  },
  text: {
    padding: '3%',
  },
  dark: {
    color: 'white',
    backgroundColor: '#6B6E70',
    flexGrow: 1,
  },
  light: {
    color: 'black',
    flexGrow: 1,
  },
});
