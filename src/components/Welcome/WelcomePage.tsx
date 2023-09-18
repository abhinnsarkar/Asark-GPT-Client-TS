import "./welcome.css";
import { useNavigate } from "react-router-dom";
import WelcomeButtons from "./WelcomeButtons";
import { useEffect } from "react";
import setAuthToken from "../../shared/utils/setAuthToken";

const WelcomePage = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}: {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setAuthToken();

            navigate("/home");
        } else {
            navigate("/");
        }
    }, []);

    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Asark-GPT</h1>
                    <p className="lead">
                        Industry leading AI Assistant owned by OpenAI
                    </p>
                    <WelcomeButtons
                        horizontalLaptop={horizontalLaptop}
                        verticalPhone={verticalPhone}
                        horizontalPhone={horizontalPhone}
                    />
                </div>
            </div>
        </section>
    );
};

export default WelcomePage;
