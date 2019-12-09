import React from 'react';
import useForm from 'react-hook-form';
import {
  TextField,
  Dialog,
  IconButton,
  DialogContent,
  makeStyles,
  Button,
  DialogActions,
  DialogTitle
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const Formulario = ({ First, Last, Email }) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      FirstName: `${First}`,
      LastName: `${Last}`,
      Email: `${Email}`
    }
  });
  const onSubmit = data => {
    console.log(data);
  };

  const useStyles = makeStyles(theme => ({
    form: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: 'fit-content'
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120
    },
    formControlLabel: {
      marginTop: theme.spacing(1)
    }
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSuccessful = () => {
    if (!(errors.FirstName || errors.LastName || errors.Email)) {
      setOpen(false);
    }
  };

  return (
    <div className={classes.form}>
      <IconButton aria-label='edit' onClick={handleClickOpen} color='primary'>
        <EditIcon />
      </IconButton>
      <Dialog open={open} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Edit User</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <TextField
              id='1'
              label='First Name'
              name='FirstName'
              fullWidth
              error={errors.FirstName && true}
              helperText={errors.FirstName && errors.FirstName.message}
              margin='normal'
              inputRef={register({ required: 'This field is requred' })}
            />
            <TextField
              id='2'
              label='Last Name'
              name='LastName'
              fullWidth
              error={errors.LastName && true}
              helperText={errors.LastName && errors.LastName.message}
              margin='normal'
              inputRef={register({ required: 'This field is requred' })}
            />
            <TextField
              id='3'
              label='Email Name'
              name='Email'
              fullWidth
              error={errors.Email && true}
              helperText={errors.Email && errors.Email.message}
              margin='normal'
              inputRef={register({
                required: 'This field is requred',
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                  message: 'Invalid email'
                }
              })}
            />
          </DialogContent>
          <DialogActions>
            <Button
              type='submit'
              color='primary'
              onClick={handleCloseSuccessful}
            >
              Save
            </Button>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default Formulario;
