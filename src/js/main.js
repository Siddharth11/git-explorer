import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import RepoContainer from './components/RepoContainer'
import CommitsContainer from './components/CommitsContainer'
import App from './components/App'

import store from './store'
import { Provider } from 'react-redux'

import updateHeaderTitle from './actions/updateHeaderTitle'
import hideSecHeaderComponents from './actions/hideSecHeaderComponents'
import updateSelectedRepo from './actions/updateSelectedRepo'


const wrapper = document.querySelector('#wrapper')

render(
    <Provider store={store}>
        <Router history={browserHistory}>
        	<Route path='/' component={App}>
        		<IndexRoute component={RepoContainer} />
        		<Route path='/:repoName' component={CommitsContainer} />
        	</Route>  
        </Router>
    </Provider>,
    wrapper
)