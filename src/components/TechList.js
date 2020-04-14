import React, { Component } from 'react';
import TechItem from "./TechItem";

class TechList extends Component {
    
    state = {
        newTech: '',
        techs: [],
    }

    componentDidMount() {
        const techs = localStorage.getItem('techs') ? JSON.parse(localStorage.getItem('techs')) : [];
        this.setState({ techs });
    }

    componentDidUpdate(_, prevState, snapshot) {
        if(prevState.techs !== this.state.techs) {
            localStorage.setItem('techs', JSON.stringify(this.state.techs));
        }
    }

    handleInputChange = e => {
        this.setState({ newTech: e.target.value });
    }

    handleRemoveButton = (tech) => {
        this.setState({
            techs: this.state.techs.filter(item => item !== tech)
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            techs: [...this.state.techs, this.state.newTech],
            newTech: '',
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {
                        this.state.techs.map(tech =>
                            <TechItem
                                key={tech}
                                tech={tech}
                                onDelete={() => this.handleRemoveButton(tech)}
                            />
                        )
                    }
                </ul>
                <input
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.newTech}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default TechList;
