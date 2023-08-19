const logout = () => {
    localStorage.clear();
    window.location.pathname = "/welcome";
};

export default logout;
