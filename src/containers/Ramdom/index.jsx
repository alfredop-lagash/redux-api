import React, { useCallback } from 'react';
import { goBack, push } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button } from '@material-ui/core';

import { USERS } from '../../routes/paths';
import { setRamdom, setSaveUsers } from '../../actions/users';
import usersApi from '../../services/ramdom';
import { useMount } from '../../hooks';
import { GO_BACK_MSG, USERS_MSG, SAVE_USER_MSG } from '../../config/messages';

const Ramdom = () => {
  const dispatch = useDispatch();

  const { ramdomUsers, saveUsers } = useSelector(({ users }) => users);

  const handleGoback = useCallback(() => dispatch(goBack()), [dispatch]);

  const handleSetRamdom = useCallback(item => dispatch(setRamdom(item)), [
    dispatch
  ]);

  const handleSendSave = useCallback(
    item => () => dispatch(setSaveUsers(item)),
    [dispatch]
  );

  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  useMount(async () => {
    const { data } = await usersApi().getUsers();

    if (Array.isArray(data.results)) {
      handleSetRamdom(data.results);
    }
  });
  const renderMenu = (menu, index) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 400
      }}
    >
      <p style={{ width: 300 }}>{menu.name}</p>
      <Button onClick={handleSendSave(index)}>{SAVE_USER_MSG}</Button>
    </div>
  );

  return (
    <Container>
      <Button onClick={handleGoback} variant='contained' color='primary'>
        {GO_BACK_MSG}
      </Button>
      <Button
        onClick={handleNavigate(USERS)}
        variant='contained'
        color='secondary'
      >
        {USERS_MSG}
      </Button>

      <div>{ramdomUsers.map(renderMenu)}</div>
      <div>
        {saveUsers.map(({ name }) => (
          <p>{name}</p>
        ))}
      </div>
    </Container>
  );
};

export default Ramdom;
