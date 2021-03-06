import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import dayjs from 'dayjs';

// components
import GlobalStyle from '../components/global/GlobalStyle';
import Routes from '../components/global/Routes';
import Initializer from '../components/global/Initializer';
import { ContextProvider } from '../components/global/ContextProvider';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import Notice from '../components/global/Notice';
import Overlay from '../components/global/Overlay';
import WaitingOverlay from '../components/global/WaitingOverlay';
import Modal from '../components/global/Modal';
import smoothscroll from 'smoothscroll-polyfill';

// dayjsのi18n対応
dayjs.locale('ja');
smoothscroll.polyfill();
const setFillHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
window.addEventListener('resize', setFillHeight);

setFillHeight();

const AppRoot = ({className}) => {
  return (
    <div className={className}>
      <ContextProvider>
        <WaitingOverlay />
        <Overlay />
        <Modal />
        <Initializer>
          <Router>
            <Header />
            <Notice />
            <Routes />
            <Footer />
          </Router>
        </Initializer>
      </ContextProvider>
      <GlobalStyle />
    </div>
  );
};

AppRoot.propTypes = {
  className: PropTypes.string
};

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