import React from 'react';

class NumberPad extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="number-pad">
                <div className="top-row-btns">
                    <button className="btn btn-1" onClick={e => {this.props.bowl(e)}} value={1} >1</button>
                    <button className="btn btn-2" onClick={e => {this.props.bowl(e)}} value={2} >2</button>
                    <button className="btn btn-3" onClick={e => {this.props.bowl(e)}} value={3} >3</button>
                </div>
                <div className="mid-row-btns">
                    <button className="btn btn-1" onClick={e => {this.props.bowl(e)}} value={4} >4</button>
                    <button className="btn btn-2" onClick={e => {this.props.bowl(e)}} value={5} >5</button>
                    <button className="btn btn-3" onClick={e => {this.props.bowl(e)}} value={6} >6</button>
                </div>
                <div className="bottom-row-btns">
                    <button className="btn btn-1" onClick={e => {this.props.bowl(e)}} value={7} >7</button>
                    <button className="btn btn-2" onClick={e => {this.props.bowl(e)}} value={8} >8</button>
                    <button className="btn btn-3" onClick={e => {this.props.bowl(e)}} value={9} >9</button>
                </div>
                <div className="strike">
                    <button className="btn btn-10" onClick={e => {this.props.bowl(e)}} value={10} >strike</button>
                </div>
            </div>
        )
    }
}

export default NumberPad;