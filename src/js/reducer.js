import initialState from './initialState'
import * as types from './actions/action-types'

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case types.UPDATE_HEADER_TITLE:
            return Object.assign({}, state, {
                title: action.title
            })

        case types.HIDE_SEC_HEADER_COMPONENTS:
            return Object.assign({}, state, {
                hideSecondary: action.hideSecondary
            })

        case types.SAVE_REPOS:
            return Object.assign({}, state, {
                repos: action.repos
            })

        case types.SAVE_COMMITS:
            return Object.assign({}, state, {
                commits: action.commits,
                filteredCommits: action.commits
            })

        case types.UPDATE_SELECTED_REPO:
            return Object.assign({}, state, {
                repoSelected: action.repoSelected
            })
            
        case types.FILTER_COMMITS:

            let fc = state.commits.filter(c => {
                let msg = c.commit.message.toLowerCase(),
                    inputQ = action.filterInputQuery.toLowerCase()
                return msg.search(inputQ) !== -1
            });

            return Object.assign({}, state, {
                filteredCommits: fc
            })

        default:
            return state
    }
}

export default reducer
