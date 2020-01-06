import React from "react";
import ChoiceItem from "./ChoiceItem";
import Score from "./Score";
import Footer from "./Footer";
import choices from "../data/choices.json";
import NavBar from "./Navbar";
import "../css/choices.css";

class Choices extends React.Component {
    state = {
        choices: choices,
        randomChoices: [],
        chosen: [],
        score: 0,
        highScore: 0,
        match: false,
        message: "Click a pic to start, but don't click the same one twice."
    };

    componentDidMount() {
        const randomChoices = choices.sort(() => {
            return Math.random() - 0.5;
        });
        this.setState({ randomChoices });
    }

    handleClickEvent = id => {
        console.log("handle click event", id);
        this.setState({ chosen: [...this.state.chosen, id] });
        this.handleCheckChosen(id);
        this.handleShuffleChoices();
    };

    handleShuffleChoices = () => {
        const randomChoices = this.state.randomChoices.sort(() => {
            return Math.random() - 0.5;
        });
        this.setState({ randomChoices });
    };

    handleCheckChosen = id => {

        if (this.state.chosen.includes(id)) {
            this.setState({ message: "You clicked that already" });
            this.setState({ match: true });
        } else {
            this.setState({ score: this.state.score + 1 });

            if (this.state.score >= this.state.highScore) {
                this.setState({ highScore: this.state.highScore + 1 });
            }
            this.setState({ message: "Niiice, keep going"});
        } 
    };

    restartState = () => {
        this.setState({ score: 0 });
        this.setState({ match: false });
        this.setState({ chosen: [] });
        this.setState({ message: "Click a pic to begin"});
    };

    render() {
        let renderScore = this.state.match;
        let score;

        if (renderScore) {
            score = <Score score={this.state.score} restartState={this.restartState} />;
        }
        return (
            <div>
                {score}
                    <div className="img-container">
                        {this.state.randomChoices.map(choices => (
                            <ChoiceItem
                            key={choices.id}
                            choices={choices}
                            handleClickEvent={this.handleClickEvent}
                            />
                        ))}
                        </div>
                <NavBar
                score={this.state.score}
                highScore={this.state.highScore}
                message={this.state.message}
                match={this.state.match}
                />
                <Footer />
            </div>
         );
    }
}

export default Choices;