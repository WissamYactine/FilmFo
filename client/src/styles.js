import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    padding: '0px 50px 0px 50px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000022',
  },
  heading: {
    color: 'white',
    marginLeft: '10px'
},
  image: {
    marginLeft: '15px',
  },
}));