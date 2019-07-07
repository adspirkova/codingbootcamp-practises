import React from 'react';

const Chapter = (props) => {
    let doneClass= props.finished ;
    if (props.finished){
        doneClass = 'day-finished'
    } else {
        doneClass = 'day'
    }
      return (
        <div className='container'>
            <div className={doneClass}
            onClick={() =>props.handleAnswerClick(props.index, true)}
            >
                <p>
                {props.day}
                </p>
                <p>
                    {props.date}
                </p>
            </div>
            <div className='lesson'>
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
      )
}

export default Chapter
