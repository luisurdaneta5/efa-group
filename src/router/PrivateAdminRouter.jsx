import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateAdminRouter = ({ type, children }) => {
	//const type = localStorage.getItem("codeType");
	// const { type } = useSelector((state) => state.auth.user);
	const token = localStorage.getItem("token");

	if (!token) {
		return <Navigate to='/' />;
	} else if (type !== 1) {
		return <Navigate to='/' />;
	} else {
		return children;
	}
};
