import { Component } from 'react'
import axios from 'axios'

class Jeopardy extends Component {

    state = {
        question: {},
        score: 0,
        answer: ""
    }

    //get a new random question from the API and add it to the data object in state
    getNewQuestion(score) {
        axios.get('http://jservice.io/api/random')
        .then(result => {
            let state = {}
            if(score) {
                state = {score: score, answer: ""}
            }
            state.question = result.data[0]
            this.setState(state)
        })
        .catch(err => {
            console.log(err)
        })
    }

    //when the component mounts, get the first question
    componentDidMount() {
        this.state.question.question ? console.log("Question exists") : this.getNewQuestion()
    }

    handleChange = (e) => {
        this.setState({answer: e.target.value})
    }

    checkAnswer = () => {
        if (this.state.answer === this.state.question.answer) {
            let score = this.state.score + 1
            this.getNewQuestion(score)
        }
        
    }

    //display the results on the screen
    render() {
        return (
            <div>
                <h1>Question: {this.state.question.question}</h1>
                <h2>Title: {this.state.question.category && this.state.question.category.title}</h2>
                <input 
                    name="answer" 
                    placeholder="Answer Here" 
                    onChange={this.handleChange} 
                    value={this.state.answer}
                />
                <button onClick={this.checkAnswer}>Answer!</button>
                <h3>Score: {this.state.score}</h3>
            </div>
        )
    }
}

export default Jeopardy