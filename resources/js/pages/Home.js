import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

// components
import Header from '../components/Header';

// pages
import FirstView from './FirstView';
import UsersRegistration from './users/Registration';

const Home = () => {
    return (
        <div className="container mt-5">
            <Router>
                <Header />
                <Route exact path='/' component={FirstView} />
                <Route path='/users/registration' component={UsersRegistration} />
            </Router>
        </div>
    );
}

export default Home;

// DOM element
if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}