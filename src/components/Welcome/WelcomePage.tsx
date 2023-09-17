import "./welcome.css";
import { Navigate, useNavigate } from "react-router-dom";
import WelcomeButtons from "./WelcomeButtons";
import useGetIsLoggedIn from "../../shared/utils/getIsLoggedIn";
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
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (localStorage.getItem("token")) {
    //         setAuthToken();
    //         navigate("/home");
    //     }
    // }, [navigate]);

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            // console.log("user logged in");
            setAuthToken(); // Assuming this sets the authentication token
            // redirect("/home"); // Assuming this redirects to the home page
            navigate("/home"); // Assuming this redirects to the home page
        } else {
            // console.log("user NOT logged in, go back to welcome page");
            // redirect("/"); // Assuming this redirects to the welcome page
            navigate("/");
        }
    }, []); // Empty dependency array to ensure the effect runs once on mount

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
                        // navigate={navigate}
                    />
                </div>
            </div>
        </section>
    );
};

export default WelcomePage;
