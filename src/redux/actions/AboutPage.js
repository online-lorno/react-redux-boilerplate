/* eslint-disable import/prefer-default-export */
import { RESET_ABOUT_PAGE } from '../../constants/actionTypes';

export function reset() {
	return async (dispatch) => {
		dispatch({
			type: RESET_ABOUT_PAGE
		});
	};
}
