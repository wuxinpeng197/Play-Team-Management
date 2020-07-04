import React 			from 'react';
// import PageTitle 	from 'component/page-title/index.jsx';
import {Link}     from 'react-router-dom';
 
class Error extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
		
				<div className="not_found_container">
						<div>SORRY! PAGE IS NOT FOUND</div>
                        <button><Link to='/'>CLICK TO BACK HOME</Link></button>
				</div>

		)
	}
}
export default Error;
