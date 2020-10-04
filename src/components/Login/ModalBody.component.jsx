import React, { useState } from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
} from '@material-ui/core';
import useStyles, { ErrorTextTypography } from './styles';
import { useAuth } from '../../providers/Auth';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
};

const ModalBody = ({ closeModal }) => {
  const classes = useStyles();
  const { login, authenticated } = useAuth();
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [fields, setFields] = useState({
    username: '',
    password: '',
  });

  const authenticate = () => {
    login(fields);
    setIsPasswordValid(authenticated);
  };

  const handleChange = (prop) => (event) => {
    setFields({ ...fields, [prop]: event.target.value });
  };

  return (
    <div style={modalStyle} className={classes.paper}>
      <Grid align="center" container spacing={0}>
        <Grid item xs={12}>
          <Typography fontSize="4vw" variant="h4" gutterBottom>
            Login
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ErrorTextTypography color="secondary" fontSize="3vw" variant="h6">
            {isPasswordValid ? '' : 'Invalid Password'}
          </ErrorTextTypography>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              id="username-input"
              type="username"
              onChange={handleChange('username')}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password-input"
              type="password"
              onChange={handleChange('password')}
            />
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <></>
        </Grid>
        <Grid item xs={5}>
          <Button
            className={classes.modalButton}
            fontSize="2vw"
            color="secondary"
            onClick={closeModal}
          >
            Cancel
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            className={classes.modalButton}
            fontSize="2vw"
            color="primary"
            onClick={authenticate}
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
      </Grid>
    </div>
  );
};

export default ModalBody;
