import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        let { onReset } = this.props;
        return (
            <div className={this.getComponentClassName()}>
                <header>
                    <button
                        className="btn btn-primary btn-sm m-2"
                        onClick={onReset}
                    >
                        Reset
                    </button>
                </header>
                {this.renderItems()}
            </div>
        );
    }

    getComponentClassName() {
        const { data } = this.props;
        const classes = ["counters"];
        data.length === 0 && classes.push("no-data");
        return classes.join(" ");
    }

    renderItems() {
        const { data, onDelete, onIncrement, onDecrement } = this.props;
        return data.map((item) => (
            <Counter
                key={item.id}
                data={item}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
            />
        ));
    }
}

export default Counters;
