import * as types from './action-types'

const filterCommits = str => {
	return {
		type: types.FILTER_COMMITS,
		filterInputQuery: str
	}
}

export default filterCommits