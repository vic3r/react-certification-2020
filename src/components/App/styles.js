import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  dark: {
    backgroundColor: '#222629',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
  },
  light: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
});

export default useStyles;
