import React from 'react';
import Scoreboard from './Scoreboard.jsx';
import NumberPad from './NumberPad.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputNumber: 0,
            leftStanding: 10,
            frame: 1,
            attempt: 1,
            score: 0,
            framesBowled: []
        };

        this.bowl = this.bowl.bind(this);
    };

    bowl(e) {
        this.setState({ inputNumber: e.target.value });

        let pinsDown = Number(e.target.value);
        let frame = this.state.frame;
        let attempt = this.state.attempt;
        let totalScore = this.state.score;
        let pinsUp = this.state.leftStanding;
        let framesCompleted = this.state.framesBowled;

        if (frame < 11 && attempt === 1) {
            if  (pinsDown !== 10) {
                totalScore += pinsDown;
                pinsUp -= pinsDown;
                framesCompleted.push(pinsDown);
                this.setState({ score: totalScore });
                this.setState({ attempt: 2 });
                this.setState({ leftStanding: pinsUp });
                this.setState({ framesBowled: framesCompleted });
            } else {
                totalScore += 30;
                frame += 1;
                framesCompleted.push('x', 0);
                this.setState({ score: totalScore });
                this.setState({ frame: frame });
                this.setState({ framesBowled: framesCompleted });
            };
        };

        if (frame < 11 && attempt === 2) {
            if (pinsDown !== pinsUp && pinsDown + framesCompleted[framesCompleted.length - 1] < 10) {
                totalScore += pinsDown;
                frame += 1;
                framesCompleted.push(pinsDown);
                this.setState({ score: totalScore });
                this.setState({ attempt: 1 });
                this.setState({ frame: frame });
                this.setState({ leftStanding: 10 });
                this.setState({ framesBowled: framesCompleted })
            }

            if (pinsDown === pinsUp) {
                totalScore += pinsDown;
                frame += 1;
                framesCompleted.push(pinsDown);
                this.setState({ score: totalScore });
                this.setState({ attempt: 1 });
                this.setState({ frame: frame });
                this.setState({ leftStanding: 10 });
                this.setState({ framesBowled: framesCompleted })
            }
        };
    };

    render() {
        return (
            <div>
                <Scoreboard
                    framesBowled={this.state.framesBowled}
                />
                <NumberPad bowl={this.bowl} />
            </div>
        )
    };
};

export default App;