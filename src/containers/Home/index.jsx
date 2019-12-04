import React, {useCallback} from 'react';
import { Container, Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { RAMDOM } from '../../routes/paths';


import useStyles from './styles';

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleNavigate = useCallback(path => () => dispatch(push(path)), [
        dispatch
      ]);
    return(
        <Container className={classes.container} maxWidth={false}>
            <Button onClick={handleNavigate(RAMDOM)} variant="contained" color="primary">Ramdom Users</Button>
            <Button onClick={handleNavigate(RAMDOM)} variant="contained" color="secondary">Users</Button>
        </Container>
    )
}

export default Home;