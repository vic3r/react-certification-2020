import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { FormControl, InputLabel, Input, Button, Typography } from '@material-ui/core';
import useStyles from './styles';
import { useAuth } from '../../providers/Auth';
import { storage } from '../../utils/storage';
import { AUTH_STORAGE_KEY } from '../../utils/constants';

function getModalStyle() {
  return {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  };
}

const ModalBody = ({ closeModal }) => {
  const classes = useStyles();
  const { login } = useAuth();
  const history = useHistory();

  const [modalStyle] = useState(getModalStyle);
  const [fields, setFields] = useState({
    username: '',
    password: '',
  });

  const authenticate = () => {
    login(fields);
    const authState = storage.get(AUTH_STORAGE_KEY);
    if (authState) {
      closeModal();
      history.push('/');
    }
  };
  const handleChange = (prop) => (event) => {
    setFields({ ...fields, [prop]: event.target.value });
  };

  return (
    <div style={modalStyle} className={classes.paper}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <FormControl>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input id="username-input" type="username" onChange={handleChange('username')} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password-input" type="password" onChange={handleChange('password')} />
      </FormControl>
      <div className={classes.modalButton}>
        <Button onClick={closeModal}>Cancel</Button>
        <Button onClick={authenticate}>Login</Button>
      </div>
    </div>
  );
};

export default ModalBody;
