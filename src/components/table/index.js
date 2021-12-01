import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function DataTable({votes}) {
  const classes = useStyles();
  const venuesData = useSelector(state => state.venues);
  const check = <Icon className="fa fa-check" style={{ color: '#fff' }} />

  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  return (
    <div className="container">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Participants</TableCell>
              {
                venuesData && venuesData.map((item, index) => {
                  return (
                    <TableCell key={index} align="center">
                      <h3 className="venue-name"><Link to={`/venue/${item.venue.id}`}>{item.venue.name}</Link></h3>
                      
                      {item && item.venue.categories.map((category, index)=>
                        <p className="venue-category" key={index}>{category.name}</p>
                      )}
                    </TableCell>
                    )

                })
              }
              
            </TableRow>
          </TableHead>
          <TableBody>
            {
              votes.map((vote, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {vote.participant}
                  </TableCell>
                  <TableCell align="center" className={vote.restaurant === '1' ? 'table-cell' : null}>{vote.restaurant === '1' ? check : null}</TableCell>
                  <TableCell align="center" className={vote.restaurant === '2' ? 'table-cell' : null}>{vote.restaurant === '2' ? check : null}</TableCell>
                  <TableCell align="center" className={vote.restaurant === '3' ? 'table-cell' : null}>{vote.restaurant === '3' ? check : null}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DataTable;
