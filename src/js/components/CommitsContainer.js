import React from 'react'
import CommitLayout from './CommitLayout'
import { connect } from 'react-redux'
import store from '../store'
import saveCommits from '../actions/saveCommits'

const CommitList = React.createClass({
    
    bottomReached() {
        console.log('Bottom Reached')
    },

    render() {

        let list = this.props.data.map(el => {
            return (
                <CommitLayout commitData={el} key={el.commit.author.date}/>
            )
        })

        return (
            <div className="commitsWrapper">
                {list}
            </div>
        )
    }
})

const CommitsContainer = React.createClass({

    loadCommit() {
        let commitsURL = `https://api.github.com/repos/facebook/${this.props.repoSelected}/commits`

        fetch(commitsURL, {
                method: 'GET'
            })
            .then(res => res.json())
            .then(data => {
                store.dispatch(saveCommits(data))
            })

    },

    componentDidMount() {
        this.loadCommit()
    },

    render() {
        return (
            <CommitList data={this.props.commits}/>
        )
    }
})

const mapStateToProps = store => {
    return {
        repoSelected: store.repoSelected,
        commits: store.filteredCommits
    }
}

export default connect(mapStateToProps)(CommitsContainer)
