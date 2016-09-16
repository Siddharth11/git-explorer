import React from 'react'
import Header from './Header'
import RepoList from './RepoList'
import cleanData from '../utils/cleanData'
// import loadData from '../utils/loadData'
import { connect } from 'react-redux'
import store from '../store'
import saveRepos from '../actions/saveRepos'

const RepoContainer = React.createClass({

    loadData(url) {
        fetch(url, {
                method: 'GET'
            })
            .then(res => res.json())
            .then(d => {
                let data = cleanData(d)
                store.dispatch(saveRepos(data))
            })
    },

    componentDidMount() {
        if (!this.props.repos.length) {
            this.loadData(this.props.url)
        }
    },

    render() {
        return (
            <RepoList data={this.props.repos}/>
        )
    }
})

const mapStateToProps = store => {
    return {
        repos: store.repos,
        url: store.mainURL
    }
}

export default connect(mapStateToProps)(RepoContainer)
