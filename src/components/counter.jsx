import React, { Component } from "react";

class Counter extends Component {
    render() {
        const { data, onDelete, onIncrement, onDecrement } = this.props;
        return (
            <div className={this.getComponentClassName()}>
                <span className={this.getBadgeClassName()}>
                    {this.formatValue()}
                </span>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => onIncrement(data)}
                >
                    Increment
                </button>
                <button
                    className="btn btn-secondary btn-sm"
                    disabled={data.value === 0}
                    onClick={() => onDecrement(data)}
                >
                    Decrement
                </button>
                {onDelete && (
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => onDelete(data)}
                    >
                        Delete
                    </button>
                )}
            </div>
        );
    }

    getComponentClassName() {
        const { value } = this.props.data;
        const classes = ["counters-item", "d-flex", "flex-row", "flex-nowrap"];
        value === 0 && classes.push("none");
        return classes.join(" ");
    }

    getBadgeClassName() {
        const { value } = this.props.data;
        const classes = ["badge"];
        classes.push(value === 0 ? "badge-warning" : "badge-primary");
        return classes.join(" ");
    }

    formatValue() {
        const { value } = this.props.data;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
