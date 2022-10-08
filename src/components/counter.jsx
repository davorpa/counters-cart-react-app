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
                    className="btn btn-secondary btn-sm m-1"
                    onClick={() => onIncrement(data)}
                >
                    Increment
                </button>
                <button
                    className="btn btn-secondary btn-sm m-1"
                    disabled={data.value === 0}
                    onClick={() => onDecrement(data)}
                >
                    Decrement
                </button>
                {onDelete && (
                    <button
                        className="btn btn-danger btn-sm m-2"
                        onClick={() => onDelete(data)}
                    >
                        Delete
                    </button>
                )}
            </div>
        );
    }

    getComponentClassName() {
        return "counters-item";
    }

    getBadgeClassName() {
        const { value } = this.props.data;
        const classes = ["badge"];
        classes.push(value === 0 ? "badge-warning" : "badge-primary");
        classes.push("m-2");
        return classes.join(" ");
    }

    formatValue() {
        const { value } = this.props.data;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
