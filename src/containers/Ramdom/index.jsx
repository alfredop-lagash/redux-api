import React, { useState } from 'react';
// import { goBack } from 'connected-react-router';
// import { useDispatch } from 'react-redux';

import usersApi from '../../services/ramdom';
import useMount from '../../hooks/useMount';

const Ramdom = () => {
  // const dispatch = useDispatch();

  // const handleGoback = useCallback(() => dispatch(goBack()), [dispatch]);
  const [users, setUsers] = useState([]);

  useMount(async () => {
    const { data } = await usersApi().getUsers();

    if (Array.isArray(data.results)) {
      setUsers(data.results);
    }
  });

  return (
    <div>
      <div>
        {users.map(({ email }) => (
          <p>{email}</p>
        ))}
      </div>
    </div>
  );
};

export default Ramdom;
