import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  div: {
    display: 'flex',
    flexDirection: 'row',
  },
  container: {
    width: 'fit-content',
    height: 'fit-content',
  },
  media: {
    paddingBottom: '10%',
  },
  card: {
    justifyContent: 'space-between',
    borderRadius: '15px',
    color: 'white',
    backgroundColor: '#000050',
  },
  title: {
    padding: '0 16px',
  },
  year: {
    padding: '0 30px',
  },
  summary: {
    padding: '50px 0 0 0',
    margin: '0 20px 0 20px',
    justifyContent: 'start',
  },
  details: {
    display: 'flex',
    direction: 'row',
    position: 'relative',
    padding: '30px 0 0 0',
  },
  rating: {
    display: 'flex',
    justifyContent: 'start',
    padding: '0 0 20px 0',
  },
  genre: {
    display: 'flex',
    flexDirection: 'row',
    padding: '20px 0 40px 0',
  },
  box: {
    margin: '0 0 0 5px',
    
  },
  favorite: {
    position: 'absolute',
    bottom: '50px',
    right: '20px',
    justifyContent: 'start',
    color: 'yellow',
    
  },
  [theme.breakpoints.down('sm')]: {
    div: {
      display: 'flex',
      flexDirection: 'column',
    },
    media: {
      width: '290px',
      height: '400px',
    },
    favorite: {
      position: 'relative',
      right: '0',
      bottom: '213px',
      float: 'right',
    },
    title: {
      fontSize: '35px',
    },
  },
}));