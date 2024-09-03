import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode:  'darken',
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
  details: {
    display: 'flex',
    justifyContent: 'start',
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