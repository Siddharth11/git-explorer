import * as types from './action-types'

const saveCommits = commits => {
	return {
		type: types.SAVE_COMMITS,
		commits
	}
}

export default saveCommits