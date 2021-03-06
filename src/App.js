import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { routerParams } from '@red-hat-insights/insights-frontend-components';
import { connect } from 'react-redux';
import { matchPath } from 'react-router-dom';

import { Routes } from './Routes';
import './App.scss';

class App extends Component {
    componentDidMount () {
        insights.chrome.init();
        insights.chrome.identifyApp('insights');
        this.appNav = insights.chrome.on('APP_NAVIGATION', event => {
            if (!matchPath(location.href, { path: `${document.baseURI}insights/${event.navId}` })) {
                this.props.history.push(`/${event.navId}`);
            }
        });
    }

    componentWillUnmount () {
        this.appNav();
    }

    render () {
        return (
            <Routes childProps={ this.props }/>
        );
    }
}

App.propTypes = {
    history: PropTypes.object
};

export default routerParams(connect(
    null,
    null
)(App));
