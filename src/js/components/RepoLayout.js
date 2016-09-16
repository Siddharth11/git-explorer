import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import store from '../store'
import hideSecHeaderComponents from '../actions/hideSecHeaderComponents'
import updateHeaderTitle from '../actions/updateHeaderTitle'
import updateSelectedRepo from '../actions/updateSelectedRepo'

const StatsItem = React.createClass({
    render() {
        return (
            <div>
                <img src={this.props.img} />
                <span className='text'>
                    {this.props.text}
                </span>
            </div>
        )
    }
})

const RepoLayout = React.createClass({

    viewCommitsClicked() {
        store.dispatch(updateHeaderTitle(this.props.item.name))
        store.dispatch(hideSecHeaderComponents(false))
        store.dispatch(updateSelectedRepo(this.props.item.name))
    },

    render() {
        let redirectUrl = `/${this.props.item.name}`
        return (
            <div className="repo grid-view">
                <Link to={redirectUrl}>
                    <div 
                        className="viewCommits" 
                        onClick={this.viewCommitsClicked}>
                        View Commits
                    </div>
                </Link>    
                <div className="name">
                    <a href={this.props.item.url}>{this.props.item.name}</a>
                </div>
                <div className="desc">{this.props.item.desc}</div>
                <div className="stats">
                    <StatsItem img='img/star.svg' text={this.props.item.stars} />
                    <StatsItem img='img/fork.svg' text={this.props.item.forks} />
                    <StatsItem img='img/issue.svg' text={this.props.item.issues} />
                </div>
            </div>
        )
    }
})

export default connect()(RepoLayout)
