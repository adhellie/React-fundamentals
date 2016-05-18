import React form 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } = 'react-router';
import Main form '../components/Main';
import Home form '../components/Home';
import LocationFormContainer form '../containers/LocationFormContainer';


render((
  <Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home}/>
			<Route path='pickup' header = 'Retrait' component={LocationFormContainer}></Route>
			<Route path='shipping/:pickup' header = 'Livraison' component={LocationFormContainer}></Route>
		</Route>
	</Router>
), document.body)

