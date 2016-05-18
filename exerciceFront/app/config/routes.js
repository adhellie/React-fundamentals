var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var LocationFormContainer = require('../containers/LocationFormContainer');


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='pickup' header = 'Retrait' component={LocationFormContainer}></Route>
      <Route path='shipping/:pickup' header = 'Livraison' component={LocationFormContainer}></Route>

    </Route>
  </Router>
);

module.exports = routes;
