import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route }  from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/SignIn/index';

import PrivateRoute from './Components/auth/private';
import PublicRoute from './Components/auth/public';

import Dashboard from './Components/Dashbroad/index';
import AdminMatches from './Components/Dashbroad/matches/index';
import AddEditMatch from './Components/Dashbroad/matches/addEditMatches';
import AdminPlayers from './Components/Dashbroad/player/index';
import AddEditPlayers from './Components/Dashbroad/player/addEditPlayers';

import Team from './Components/team/index';
import Matches from './Components/Matches/index';

import Error from './Components/error';

const Routes = (props) =>{
    return(
        <Layout>
            <Switch>
                <PrivateRoute {...props} path="/admin_matches/add_matches/:id" exact component={AddEditMatch}/>
                <PrivateRoute {...props} path="/admin_matches/add_matches" exact component={AddEditMatch}/>
                <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches}/>
                <PrivateRoute {...props} path="/admin_players/add_players" exact component={AddEditPlayers}/>
                <PrivateRoute {...props} path="/admin_players/add_players/:id" exact component={AddEditPlayers}/>
                <PrivateRoute {...props} path="/admin_players" exact component={AdminPlayers}/>
                <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
                <PublicRoute {...props} restricted={false} path="/matches" exact component={Matches}/>
                <PrivateRoute {...props} path="/team" exact component={Team}/>
                <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn}/>
                <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
                <PublicRoute {...props} restricted={false}  exact component={Error}/>
            </Switch>
        </Layout>
    )
}

export default Routes;