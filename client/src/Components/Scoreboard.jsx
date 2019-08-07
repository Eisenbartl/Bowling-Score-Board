import React from 'react';

const Scoreboard = props => (
    <div className="scoreboard">
        <div className="frame frame1">
            <p>1</p>
            <div className="scorebox">
                <p className="first-roll">{props.framesBowled[0]}</p>
                <p className="second-roll">{props.framesBowled[1]}</p>
            </div>
        </div>
        <div className="frame frame2">
            <p>2</p>
            <div className="scorebox">
                <p className="first-roll">{props.framesBowled[2]}</p>
                <p className="second-roll">{props.framesBowled[3]}</p>
            </div>
        </div>
        <div className="frame frame3">
            <p>3</p>
            <div className="scorebox">
                <p className="first-roll">{props.framesBowled[4]}</p>
                <p className="second-roll">{props.framesBowled[5]}</p>
            </div>
        </div>
        <div className="frame frame4">
            <p>4</p>
            <div className="scorebox">
                <p className="first-roll">{props.framesBowled[6]}</p>
                <p className="second-roll">{props.framesBowled[7]}</p>
            </div>
        </div>
        <div className="frame frame5">
            <p>5</p>
            <div className="scorebox">
                <p className="first-roll">{props.framesBowled[8]}</p>
                <p className="second-roll">{props.framesBowled[9]}</p>
            </div>
        </div>
        <div className="frame frame6">
            <p>6</p>
            <div className="scorebox">
                <p className="first-roll">{props.framesBowled[10]}</p>
                <p className="second-roll">{props.framesBowled[11]}</p>
            </div>
        </div>
        <div className="frame frame7">
            <p>7</p>
            <div className="scorebox">
                <p className="first-roll">{props.framesBowled[12]}</p>
                <p className="second-roll">{props.framesBowled[13]}</p>
            </div>
        </div>
        <div className="frame frame8">
            <p>8</p>
            <div className="scorebox">
                <p className="first-roll">{props.framesBowled[14]}</p>
                <p className="second-roll">{props.framesBowled[15]}</p>
            </div>
        </div>
        <div className="frame frame9">
            <p>9</p>
            <div className="scorebox">
                <p className="first-roll">{props.framesBowled[16]}</p>
                <p className="second-roll">{props.framesBowled[17]}</p>
            </div>
        </div>
        <div className="frame frame10">
            <p>10</p>
            <div className="scorebox">
                <p className="first-roll">{props.framesBowled[18]}</p>
                <p className="second-roll">{props.framesBowled[19]}</p>
            </div>
        </div>
    </div>
);

export default Scoreboard;