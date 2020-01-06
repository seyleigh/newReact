import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../css/navbar.css";

const NavBar = props => {
    // console.log("Nav bar props", props);

    const { score, highScore, message, match } = props;
    return (
        <Navbar className="navbar-container" fixed="top">
            <Navbar.Text className="d-flex w-50 nav-title">
                Clicky React
            </Navbar.Text>
            <Navbar.Text className="d-flex w-50 justify-content-center">
                <span className={
                    score === 0 && props.match === false
                    ? "grey"
                    : match
                    ? "wrong"
                    : "right"
                }
                >
                    {message}
                </span>
            </Navbar.Text>
            <Navbar.Text className="navbar-text mt-1 w-50 text-right">
                Score: {score} | Best Score: {highScore}
            </Navbar.Text>
        </Navbar>
    );
};

export default NavBar;