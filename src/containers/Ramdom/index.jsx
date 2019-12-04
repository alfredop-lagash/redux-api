import React, { useCallback } from 'react';
import { goBack } from 'connected-react-router';
import { useDispatch } from 'react-redux';

const Ramdom = () => {
  const dispatch = useDispatch();

  const handleGoback = useCallback(() => dispatch(goBack()), [dispatch]);

  return (
    <div>
      <h1>Ramdoms Users</h1>
      <button onClick={handleGoback}>Go Back</button>
    </div>
  );
};

export default Ramdom;
