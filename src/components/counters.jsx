import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {
        return (
            <div className={ this.getComponentClassName() }>
                <header>
                    <button
                        className="btn btn-primary btn-sm m-2"
                        onClick={ this.props.onReset }
                    >
                        Reset
                    </button>
                </header>
                { this.renderItems() }
            </div>
        );
    }

    getComponentClassName() {
        const classes = ["counters"];
        this.props.data.length === 0 && classes.push("no-data");
        return classes.join(" ");
    }

    renderItems() {
        const { data } = this.props;
        return data.map((item) => (
            <Counter key={ item.id }
                data={ item }
                onDelete={ this.props.onDelete }
                onIncrement={ this.props.onIncrement }
                onDecrement={ this.props.onDecrement } />
        ));
    }
}

export default Counters;