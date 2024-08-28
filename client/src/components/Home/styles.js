import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '10px',
    color: 'white',
  },
  gridContainer: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
    pagination: {
      marginTop: '30px',
      marginBottom: '30px',
      backgroundColor: '#0d0d0d',
      width: 'fit-Content',
      [theme.breakpoints.down('md')]: {
        marginTop: '80px',
      },
    }, 
    favorite: {
      border: '2px solid #3f51b5',
      color: 'yellow',
      marginBottom: '10px',
      padding: '5px 10px 5px 10px',
    },
    favoritePaper: {
      marginBottom: '10px',
      padding: '5px 10px 5px 10px',
      backgroundColor: '#0d0d0d',
      color: 'yellow',
    },
}))