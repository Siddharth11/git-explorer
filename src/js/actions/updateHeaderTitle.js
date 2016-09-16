import * as types from './action-types'

const updateHeaderTitle = title => {
	return {
		type: types.UPDATE_HEADER_TITLE,
		title
	}
}

export default updateHeaderTitle