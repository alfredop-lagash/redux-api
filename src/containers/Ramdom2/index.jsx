/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-no-literals */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import useForm from 'react-hook-form';

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

const Formulario = ({ First, Last, Email }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.form}>
      <IconButton aria-label='edit' color='primary' onClick={handleClickOpen}>
        <EditIcon color='primary' />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Edit User</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id='1'
              name='First Name'
              style={{ margin: 6 }}
              fullWidth
              margin='normal'
              ref={register}
            />
            <TextField
              id='2'
              name='Last Name'
              style={{ margin: 6 }}
              fullWidth
              margin='normal'
              ref={register}
            />
            <TextField
              id='3'
              name='Email'
              style={{ margin: 6 }}
              fullWidth
              margin='normal'
              ref={register}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button type='submit' color='primary'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Formulario;
