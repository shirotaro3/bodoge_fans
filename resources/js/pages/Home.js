import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// components
import Header from '../components/Header'

// pages
import UsersRegistration from './users/Registration';

const FirstView = () => {
    return (
        <div>
            FirstView
            <Link to='/users/registration'>ユーザー登録</Link>
        </div>
    )
}

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