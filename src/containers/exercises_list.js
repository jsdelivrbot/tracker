import React, { Component } from 'react';
import { connect } from 'react-redux';

 class ExercisesList extends Component {

    renderList() {
        return this.props.exercises.map((exercises) => {
            return(
                <li key={exercises.title} className="list-group-item">{exercises.title}</li>
            )
        })
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStatoToProps(state) {
    return {
        exercises: state.exercises
    };
}

export default connect(mapStatoToProps)(ExercisesList);