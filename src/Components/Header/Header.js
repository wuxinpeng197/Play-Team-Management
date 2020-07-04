import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import { CityLogo } from '../UI/icons';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <AppBar
                position="fixed"
                style={{
                    backgroundColor:'#191970',
                    boxShadow: 'none',
                    padding:'10px 0',
                    borderBottom: '2px solid #00285e'
                }}
            >
                <Toolbar style={{display:'flex'}}>
                    <div style={{flexGrow: 1}}>
                        <div className="header_logo">
                            <CityLogo
                                link={true}
                                linkTo="/"
                                width="70px"
                                height="70px"
                            />
                        </div>  
                    </div>
                    <Link to="/">
                        <Button color="inherit">HOME</Button>
                    </Link>

                    <Link to="/team">
                        <Button color="inherit">Team members</Button>
                    </Link>
                    <Link to="/matches">
                        <Button color="inherit">Matches</Button>
                    </Link>
                    <Link to="/dashboard">
                        <Button color="inherit">Sign In</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;