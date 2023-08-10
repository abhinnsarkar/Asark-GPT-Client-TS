import { useSelector } from "react-redux";
import { RootState } from "../../store/store"; // Replace with the correct path to your RootState type

const useGetIsLoggedIn = () => {
    const isLoggedIn =
        useSelector((state: RootState) => state.auth.token) ||
        localStorage.token;

    if (isLoggedIn) {
        return true;
    } else {
        return false;
    }
};

export default useGetIsLoggedIn;
