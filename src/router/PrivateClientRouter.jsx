import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateClientRouter = ({ children }) => {
	const type = localStorage.getItem("codeType");
	const token = localStorage.getItem("token");

	if (token) {
		if (type === "0") {
			return children;
		} else {
			return <Navigate to='/' />;
		}
	} else {
		return <Navigate to='/' />;
	}

	// if (!token) {
	// 	return <Navigate to='/' />;
	// } else if (type !== 0) {
	// 	return <Navigate to='/' />;
	// } else {
	// 	return children;
	// }
};
