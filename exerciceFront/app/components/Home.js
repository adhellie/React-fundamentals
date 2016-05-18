var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Home = React.createClass({
  render: function () {
		return (
			<div className ="jumbotron col-sm-12 text-center" style= {transparentBg}>
				<h1>La webapp pour envoyer des colis</h1>
				<p claName="lead"> Fais livrer tes colis en un rien de temps !</p>
				<Link to="/pickup">
					<button type='button' className='btn btn-lag btn-success'>Get Started</button>
				</Link>
			</div>
		)
	}
});

module.exports = Home;
