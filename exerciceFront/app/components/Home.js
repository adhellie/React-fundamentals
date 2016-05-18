import React from 'react';

import ReactRouter from 'react-router';
import Link from ReactRouter.Link;
class Home extends Component({
	render() {
		return (
			<div className ="jumbotron col-sm-12 text-center" >
				<h1>La webapp pour envoyer des colis</h1>
				<p claName="lead"> Fais livrer tes colis en un rien de temps !</p>
				<Link to="/pickup">
					<button type='button' className='btn btn-lag btn-success'>Get Started</button>
				</Link>
			</div>
		)
	}
});

export default Home;