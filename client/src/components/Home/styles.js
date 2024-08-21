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
      // style={{width: '30%', flex: 'row', justifyContent: 'center'}}
      width: '30%',
      flex: 'row',
      justifyContent: 'end',
      borderRadius: 4,
      marginTop: '1rem',
      padding: '10px',
      // backgroundColor: 'black',
      // color: 'yellow',
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