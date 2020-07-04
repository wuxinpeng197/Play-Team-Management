import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../UI/tag';
import AdminPlayers from '../player';

class Matches extends Component{

    state = {
        isLoading: true,
        Matches:[]
    }

    componentDidMount(){
        firebaseMatches.once('value').then((snapshot)=>{
            const matches = firebaseLooper(snapshot);
            console.log(matches)
            this.setState({
                isLoading: false,
                Matches: reverseArray(matches)
            })
        })
    }

    render(){
        return(
          
            <AdminLayout>
                <div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Local & Away</TableCell>
                                    <TableCell>Final</TableCell>
                                    <TableCell>Results</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { this.state.Matches?
                                this.state.Matches.map((matches,i)=>(
                                    <TableRow key={i}>
                                            <TableCell>
                                                <Link to={`/admin_matches/add_matches/${matches.id}`}>
                                                    {matches.date}
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                <Link to={`/admin_matches/add_matches/${matches.id}`}>
                                                    {matches.away} <strong>-</strong> {matches.local}
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                            { matches.final === "Yes" ?
                                                    <span className="matches_tag_red">Final</span>
                                                    :
                                                    <span className="matches_tag_grenn">Not played yet</span>
                                                }
                                            </TableCell>
                                            <TableCell>
                                            {matches.resultAway} <strong>-</strong> {matches.resultLocal}
                                            </TableCell>
                                        </TableRow>
                                ))
                                :null
                                }
                            </TableBody>
                        </Table>
                    </Paper>
                    <div className="admin_progress">
                        { this.state.isloading ?
                            <CircularProgress thickness={7} style={{color:'#98c5e9'}}/>
                            :''
                        }
                    </div>
                </div>
            </AdminLayout>
        )
    }

}

export default Matches;