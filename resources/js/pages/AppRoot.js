import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

// components
import GlobalStyle from '../components/global/GlobalStyle';
import Routes from '../components/global/Routes';
import Redirector from '../components/global/Redirector';
import SessionManager from '../components/global/SessionManager';
import { ContextProvider } from '../components/global/ContextProvider';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import Notice from '../components/global/Notice';

const AppRoot = ({className}) => {
    return (
        <div className={className}>
            <ContextProvider>
                <SessionManager>
                    <Router>
                        <Redirector />
                        <Header />
                        <Notice />
                        <Routes />
                        <Footer />
                    </Router>
                </SessionManager>
            </ContextProvider>
            <GlobalStyle />
        </div>
    );
}

const StyledAppRoot = styled(AppRoot)`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export default StyledAppRoot;

// DOM element
if (document.getElementById('app_root')) {
    ReactDOM.render(<StyledAppRoot />, document.getElementById('app_root'));
}