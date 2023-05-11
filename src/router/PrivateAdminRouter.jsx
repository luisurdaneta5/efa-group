import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateAdminRouter = ({ children }) => {
	const type = localStorage.getItem("codeType");
	const token = localStorage.getItem("token");

	if (token) {
		if (type === "1") {
			return children;
		} else {
			return <Navigate to='/' />;
		}
	} else {
		return <Navigate to='/' />;
	}

	// if (!token) {
	// 	return <Navigate to='/' />;
	// } else if (type !== 1) {
	// 	return <Navigate to='/' />;
	// } else {
	// 	return children;
	// }
};
