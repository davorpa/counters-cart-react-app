import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        data: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ],
    };

    render() {
        return (
            <div className={ this.getComponentClassName() }>
                <header>
                    <button
                        className="btn btn-primary btn-sm-m-2"
                        onClick={ this.handleReset }
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
        this.state.data.length === 0 && classes.push("no-data");
        return classes.join(" ");
    }

    renderItems() {
        const { data } = this.state;
        return data.map((item) => (
            <Counter key={ item.id }
                data={ item }
                onDelete={ this.handleDelete } />
        ));
    }

    handleDelete = ({ id }) => {
        let { data } = this.state;
        data = data.filter((item) => item.id !== id);
        this.setState({ data });
    }

    handleReset = () => {
        let { data } = this.state;
        data = data.map((item) => ({ ...item, value: 0 }));
        this.setState({ data });
    }
}

export default Counters;