import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
    state = {
        data: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    };

    render() {
        let { data } = this.state;
        return (
            <React.Fragment>
                <NavBar badge={this.getBadgeValue()} />
                <main className="container">
                    <Counters
                        data={data}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }

    getBadgeValue() {
        return this.state.data.filter((item) => item.value > 0).length;
    }

    handleIncrement = (item) => {
        let { data } = this.state;
        const index = data.indexOf(item);
        data = [...data];
        data[index] = { ...item };
        data[index].value++;
        this.setState({ data });
    };

    handleDecrement = (item) => {
        let { data } = this.state;
        const index = data.indexOf(item);
        data = [...data];
        data[index] = { ...item };
        data[index].value--;
        this.setState({ data });
    };

    handleDelete = ({ id }) => {
        let { data } = this.state;
        data = data.filter((item) => item.id !== id);
        this.setState({ data });
    };

    handleReset = () => {
        let { data } = this.state;
        data = data.map((item) => ({ ...item, value: 0 }));
        this.setState({ data });
    };
}

export default App;
