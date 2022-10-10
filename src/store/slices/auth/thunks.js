import { setLogin, startLoading } from "./authSlices";

export const startLoginWithEmailAndPassword = (email, password) => {
	return async (dispatch) => {
		await dispatch(startLoading());
		dispatch(setLogin({ uid: "123", displayName: "Luis Urdaneta" }));
	};
};
