import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export default makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '30vh',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  dark: {
    color: 'white',
    backgroundColor: '#6B6E70',
  },
  light: {
    color: 'black',
    backgroundColor: 'white',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  modalButton: {
    align: 'right',
  },
}));

const ErrorTextTypography = withStyles({
  root: {
    color: '‎#FF0000',
  },
})(Typography);

export { ErrorTextTypography };
