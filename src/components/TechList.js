import React, { Component } from 'react';

class TechList extends Component {
    
    state = {
        techs: [
            'Node',
            'ReactJS',
            'React Native'
        ],
    }

    render() {
        return (
            <>
                <ul>
                    {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
                <input type="text"/>
                <button>Add</button>
            </>
        );
    }
}

export default TechList;
