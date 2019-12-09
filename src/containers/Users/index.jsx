import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { goBack } from 'connected-react-router';
import { Container, Button } from '@material-ui/core';

import { setDeleteUser } from '../../actions/users';
import { DELETE_MSG, GO_BACK_MSG } from '../../config/messages';

const Users = () => {
  const dispatch = useDispatch();
  const { saveUsers } = useSelector(({ users }) => users);
  const handleGoback = useCallback(() => dispatch(goBack()), [dispatch]);
  const handleSetDeleteUser = useCallback(
    item => () => dispatch(setDeleteUser(item)),
    [dispatch]
  );

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
      <Button onClick={handleSetDeleteUser(index)}>{DELETE_MSG}</Button>
    </div>
  );

  return (
    <Container>
      <Button onClick={handleGoback} variant='contained' color='primary'>
        {GO_BACK_MSG}
      </Button>
      <div>{saveUsers.map(renderMenu)}</div>
    </Container>
  );
};

export default Users;
