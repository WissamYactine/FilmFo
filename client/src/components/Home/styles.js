import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    gridContainer: {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column-reverse',
      },
    },
    appBarSearch: {
      borderRadius: 4,
      marginBottom: '1rem',
      display: 'flex',
      // padding: '16px',
      padding: '10px',
      color: 'white',
  },
    pagination: {
      borderRadius: 4,
      marginTop: '1rem',
      padding: '16px',
    }
}))