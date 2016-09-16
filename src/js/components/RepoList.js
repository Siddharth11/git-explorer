import React from 'react'
import RepoLayout from './RepoLayout'
import store from '../store'
import { connect } from 'react-redux'

const RepoList = React.createClass({
    render() {

        let nodes = this.props.data.map(el => {
            return (
                <RepoLayout item={el} key={el.key} />
            )
        })

        return (
            <div className="main">
                {nodes}
            </div>
        )
    }
})

export default RepoList