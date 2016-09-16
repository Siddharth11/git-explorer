import * as types from './action-types'

const hideSecHeaderComponents = hideSecondary => {
	return {
		type: types.HIDE_SEC_HEADER_COMPONENTS,
		hideSecondary
	}
}

export default hideSecHeaderComponents