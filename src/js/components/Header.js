import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import store from '../store'
import hideSecHeaderComponents from '../actions/hideSecHeaderComponents'
import updateHeaderTitle from '../actions/updateHeaderTitle'
import filterCommits from '../actions/filterCommits'


const HomeBtn = React.createClass({

    homeBtnClicked() {     
        store.dispatch(updateHeaderTitle('Facebook Repos'))
        store.dispatch(hideSecHeaderComponents(true))
    },

    render() {
        if (!this.props.hide) {
            return (
                <Link to='/' onClick={this.homeBtnClicked}>
            		<img src="img/home.svg" className="homeBtn"/>
            	</Link>
            )
        } else {
            return null
        }
    }
})

const SearchBar = React.createClass({

    inputUpdate(e) {
        store.dispatch(filterCommits(e.target.value))
    },

    render() {
        if (!this.props.hide) {
            return (
                <input 
            		type='search' 
            		className='filterCommitsInput'
            		placeholder='Enter commit keywords'
                    onChange={this.inputUpdate}
            	/>
            )
        } else {
            return null
        }
    }
})

const Header = React.createClass({
    render() {
        return (
            <div className='header'>
            	<HomeBtn hide={this.props.hideSecondary} />
            	<div className='title'>{this.props.title}</div>
            	<SearchBar  hide={this.props.hideSecondary} />
            </div>
        )
    }
})

const mapStateToProps = store => {
    return {
        hideSecondary: store.hideSecondary,
        title: store.title
    }
}

export default connect(mapStateToProps)(Header)
