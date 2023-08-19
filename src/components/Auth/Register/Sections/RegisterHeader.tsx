import AuthHeader from "../../Sections/AuthHeader";

const RegisterHeader = ({
    horizontalLaptop,
    verticalPhone,
    horizontalPhone,
}: {
    horizontalLaptop: boolean;
    verticalPhone: boolean;
    horizontalPhone: boolean;
}) => {
    return (
        <AuthHeader
            horizontalLaptop={horizontalLaptop}
            verticalPhone={verticalPhone}
            horizontalPhone={horizontalPhone}
            header="Sign Up"
        />
    );
};

export default RegisterHeader;
