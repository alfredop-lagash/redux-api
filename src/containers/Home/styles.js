import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#e5e4e4',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF'
  },
  Button: {
    margin: theme.spacing(1)
  }
}));

export default useStyles;
