import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor: '#161616',
  },
  heading: {
    color: 'white',
    marginLeft: '10px',
    textDecoration: 'none',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 'fit-content',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 'fit-content',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    marginLeft: '30px',
    marginRight: '30px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down('sm')]: {
    appBar: {
      flexDirection: 'column',
    },
    profile: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
    toolbar: {
      width: 'auto',
    },
  },
}));