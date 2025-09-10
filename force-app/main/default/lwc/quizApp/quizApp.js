import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={} //to store answers
 
    myQuestions=[
        {
            id:"Question 1",
            question: "Which of this is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctanswer:"c"

        },
        {
            id:"Question 2",
            question: "Which of this file is invalid in LWC folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctanswer:"b"

        },
        {
            id:"Question 3",
            question: "Which of this is not a diractive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track "
            },
            correctanswer:"c"

        }
    ]

    changeHandler(event){
        console.log("name", event.target.name)
        console.log("value", event.target.value)
        const {name,value} = event.target
        this.selected= {...this.selected, [name]:value}
        console.log("selected", this.selected)
    }

    submitHandler(){
    }
    resetHandler(){
        
    }

    




}