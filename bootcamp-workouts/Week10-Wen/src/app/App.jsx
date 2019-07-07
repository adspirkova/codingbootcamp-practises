import React from 'react';
import Chapter from './Chapter.jsx'


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chapter: [
                {
                    day: 'Tue',
                    date: '4.9',
                    title: 'Lorem ipsum',
                    text: 'Blanditiis ullam dolores in suscipit facere fuga voluptatem aliquam ea magni, quam,consequatur, illo ex perspiciatis omnis sunt cumque velit quos quibusdam!',
                    finished: false,
                },
                {
                    day: 'Wen',
                    date: '5.9',
                    title: 'Blanditiis ullam dolores',
                    text: 'Suscipit facere fuga voluptatem aliquam ea magni, quam,consequatur, illo ex perspiciatis omnis sunt cumque velit quos quibusdam!',
                    finished: false,
                }
            ]
        }
    }

    handleAnswerClick = (chapterNumber) => {
        this.setState(prevState => {
            return {
                chapter: prevState.chapter.map((chapter,index) => {
                    if (index === chapterNumber -1 && chapter.finished == false) {
                        console.log(`I marked the lesson number ${chapterNumber} as finished!`)
                        chapter.finished = true;
                        return chapter
                    } else if (index === chapterNumber -1 && chapter.finished == true) {
                        console.log(`I marked the lesson number ${chapterNumber} as unfinished!`)
                        chapter.finished = false;
                        return chapter
                    }
                    return chapter
                })
            }
        })
    }



    render() {
        const chapterComponents = this.state.chapter.map((chapter, index) => {
        const chapterNumber = index + 1
        return (
            <>
                <Chapter
                key={`chapter-${chapterNumber}`}
                day ={chapter.day}
                date ={chapter.date}
                title ={chapter.title}
                text ={chapter.text}
                finished= {chapter.finished}
                handleAnswerClick={this.handleAnswerClick}
                index = {chapterNumber}
                />
                < Chapter
                key={`chapter-${chapterNumber}`}
                day ={chapter.day}
                date ={chapter.date}
                title ={chapter.title}
                text ={chapter.text}
                finished= {chapter.finished}
                handleAnswerClick={this.handleAnswerClick}
                index = {chapterNumber}
                />
            </>
        )
        })
        return (
            <>
            {chapterComponents}
            </>
        )
    }
}