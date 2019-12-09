/* eslint-disable react/jsx-no-literals */
import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import useMount from '../../hooks/useMount';
import usersApi from '../../services/ramdom';
import { HOME } from '../../routes/paths';

import Formulario from './Formulario';

const Users = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const handleNavigate = useCallback(path => () => dispatch(push(path)), [
    dispatch
  ]);

  useMount(async () => {
    const { data } = await usersApi().getUsers();

    if (Array.isArray(data.results)) {
      setUsers(data.results);
    }
  });

  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper
    },
    margin: { margin: theme.spacing(1) },
    inline: {
      display: 'inline'
    },
    title: {
      margin: theme.spacing(4, 4, 2)
    },
    Button: {
      margin: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <div>
            <Typography variant='h4' className={classes.title}>
              Users
              <IconButton
                aria-label='home'
                onClick={handleNavigate(HOME)}
                className={classes.Button}
              >
                <HomeIcon color='primary' />
              </IconButton>
            </Typography>
          </div>
          <List className={classes.root}>
            {users.map(user => (
              <ListItem alignItems='flex-start' key={user.email}>
                <ListItemAvatar>
                  <Avatar src={user.picture.large} />
                </ListItemAvatar>
                <ListItemText
                  primary={`${user.name.first} ${user.name.last}`}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component='span'
                        variant='body2'
                        className={classes.inline}
                        color='textPrimary'
                      >
                        {user.email}
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Formulario
                  First={user.name.first}
                  Last={user.name.last}
                  Email={user.email}
                />
                <IconButton aria-label='delete' className={classes.margin}>
                  <DeleteIcon color='secondary' />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Users;
