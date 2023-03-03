import { Navigate } from "react-router-dom";

export const PrivateClientRouter = ({ type, children }) => {
	// const type = localStorage.getItem("codeType");
	const token = localStorage.getItem("token");

	if (!token) {
		return <Navigate to='/' />;
	} else if (type !== 0) {
		return <Navigate to='/' />;
	} else {
		return children;
	}
};
