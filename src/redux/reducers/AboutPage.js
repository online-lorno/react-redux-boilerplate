import { RESET_ABOUT_PAGE } from '../../constants/actionTypes';

const initialState = {};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case RESET_ABOUT_PAGE:
			return {
				...initialState
			};
		default:
			return state;
	}
}
