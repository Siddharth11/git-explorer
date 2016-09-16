import * as types from './action-types'

const saveRepos = repos => {
	return {
		type: types.SAVE_REPOS,
		repos
	}
}

export default saveRepos