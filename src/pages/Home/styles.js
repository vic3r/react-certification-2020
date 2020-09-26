import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  light: {
    color: '#222629',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '1%',
    height: '100vh',
    width: 'inherit',
  },
  dark: {
    color: '#474B4F',
    textAlign: 'center',
    backgroundColor: '#222629',
    padding: '1%',
    height: 'inherit',
    width: 'inherit',
  },
  title: {
    paddingTop: '6vh',
    fontSize: '6vh',
    fontWeight: 200,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    borderBottom: '4px solid rgba(0, 0, 0, 0.2)',
    marginBottom: '20px',
    textAlign: 'left',
    paddingLeft: '2%',
  },
});
