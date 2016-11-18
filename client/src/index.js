import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
<<<<<<< HEAD
import UserProfile from './userProfile';
import SearchPage from './SearchPage';
import './index.css';
=======
import UserProfile from './UserProfile';
import SearchPage from './SearchPage';
import CharityProfilePage from "./CharityProfilePage";
>>>>>>> e6233700dd9f32453763b3ea3b2274cbdd2282e3

ReactDOM.render (
	<Router history={browserHistory}>
		<Route path="/" component={App}/>
	    <Route path="/user" component={UserProfile} />
	   	<Route path="/search" component={SearchPage} />
<<<<<<< HEAD
=======
	   	<Route path="/charity/:id" component={CharityProfilePage} />
>>>>>>> e6233700dd9f32453763b3ea3b2274cbdd2282e3
	</Router>,
  document.getElementById('root')
);
