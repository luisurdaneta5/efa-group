import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ScrollToTop } from "./helpers/ScrollToTop";
import { store } from "./store/store";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	//<React.StrictMode>
	<Provider store={store}>
		<PayPalScriptProvider
			options={{
				"client-id": "AUKGki0iSFxUS0sVb_meLmJNapdsp0ypiZ22oHhpwwj6cE4aGacIJEvs51jq1SQ7gTWZvZ31YSP4wklb",
			}}
		>
			<BrowserRouter>
				<ScrollToTop />
				<App />
			</BrowserRouter>
		</PayPalScriptProvider>
	</Provider>
	//</React.StrictMode>
);
