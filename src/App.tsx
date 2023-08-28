import { Provider } from "react-redux";
import store from "./store/store";
import AppScaled from "./AppScaled";
function App() {
    return (
        <Provider store={store}>
            <AppScaled />
        </Provider>
    );
}

export default App;
