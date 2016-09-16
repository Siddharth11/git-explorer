import * as types from './action-types'

const updateSecletedRepo = repoName => {
	return {
		type: types.UPDATE_SELECTED_REPO,
		repoSelected: repoName
	}
}

export default updateSecletedRepo