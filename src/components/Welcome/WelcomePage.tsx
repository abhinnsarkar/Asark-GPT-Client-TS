import "./welcome.css";
import { Navigate, useNavigate } from "react-router-dom";
import WelcomeButtons from "./WelcomeButtons";

const WelcomePage = ({
    isLaptop,
    isPortrait,
}: {
    isLaptop: boolean;
    isPortrait: boolean;
}) => {
    const navigate = useNavigate();
    // console.log("getting thw landing page");
    // console.log("portrait ? ", isPortrait);

    if (localStorage.token) {
        return <Navigate to="/home" />;
    }

    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">ToDo</h1>
                    <p className="lead">Simple Todo App</p>
                    <WelcomeButtons
                        isLaptop={isLaptop}
                        isPortrait={isPortrait}
                        navigate={navigate}
                    />
                </div>
            </div>
        </section>
    );
};

export default WelcomePage;
