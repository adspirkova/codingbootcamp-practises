import React from 'react';
import './Question.scss'
const Question = (props) => {
    let yesClass= props.isCorrect ;
    if (props.answer !== undefined && props.answer){
        if (props.isCorrect){
            yesClass = 'question-correct'
        } else {
            yesClass = 'question-incorrect'
        }
    }
    let noSelected = ''
    return (
        <div className='question-container'>
            <div className='question-text-wrapper'>
                <h3 className='question-number'>{props.number}</h3>
                <h3 className='question-text'>{props.children}</h3>
            </div>
            <div className='question-answers'>
                <button className={yesClass}
                onClick={() =>props.handleAnswerClick(props.number, true)}
                >Yes</button>
                <button className={noClass}
                onClick={()=>props.handleAnswerClick(props.number, false)}
                >No</button>
            </div>
        </div>
    )
}

export default Question;
