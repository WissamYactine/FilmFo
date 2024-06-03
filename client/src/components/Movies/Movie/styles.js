// import { blueGrey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode:  'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'start',
    // margin: '10px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  popoverRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundBlendMode: 'multiply',
    backdropFilter: 'blur(5px)',
  },
  closePop: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: '40px',
  },
});