import { Provider } from "react-redux";
import store from "./store/store";
import AppScaled from "./AppScaled";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Provider store={store}>
            {/* <Router> */}
            <AppScaled />
            {/* </Router> */}
        </Provider>
    );
}

export default App;
