import { createContext, useState } from "react";
import runChat from "../config/gemini";
import axios from 'axios';

export const Context = createContext();

const ContextProvider = (props) => {

    const [prevPrompts, setPrevPrompts] = useState([]);
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")
    // const [mat , setMatData] = useState("")

    function delayPara(index, nextWord) {
        setTimeout(function () {
            setResultData(prev => prev + nextWord)
        }, 75 * index);
    }
    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);

        // for name of material

        let responseM;
    
        // Add prefix string here
        let inputToSendM;
        if (prompt !== undefined) {
            // If prompt is provided, use it with prefix
            inputToSendM = "i am sending you a text after a colon. mention the materials talked like for example Aluminum, copper, steel, plastics, wood, concrete, glass, ceramincs, etc . in your response only mention the name of the material i mentioned in that text: " + prompt;
            setRecentPrompt(prompt);
        } else {
            // If prompt is not provided, use user input with prefix
            inputToSendM = "i am sending you a text after a colon. mention the materials talked like for example Aluminum, copper, steel, plastics, wood, concrete, glass, ceramincs, etc . in your response only mention the name of the material i mentioned in that text: " + input;
            setPrevPrompts(prev => [...prev, input]);
            setRecentPrompt(input);
        }
         
        responseM = await runChat(inputToSendM);
        console.log(responseM);
        // For grade of material
        let responseG;
    
        // Add prefix string here
        let inputToSendG;
        if (prompt !== undefined) {
            // If prompt is provided, use it with prefix
            inputToSendG = "i am sending you a text after a colon. mention the name(exact alphanumeric value as mentioned in the text or received data, the grade should not be changed) of the material grade (which is the composition of which it is made of like for steel it can be AISI 1018 or AISI 304, Aluminum can be AA1100 or AA6061, copper can be C1100 or C17000, plastics can be HDPE or PVC or ABS, wood can be softwood or hardwood, concrete can be portland cement or aggregates, ceramics can be alumina or zirconia. i dont want the product descriptions or dimensions to be shown :  " + prompt;
            setRecentPrompt(prompt);
        } else {
            // If prompt is not provided, use user input with prefix
            inputToSendG = "i am sending you a text after a colon. mention the name(exact alphanumeric value as mentioned in the text or received data, the grade should not be changed) of the material grade (which is the composition of which it is made of like for steel it can be AISI 1018 or AISI 304, Aluminum can be AA1100 or AA6061, copper can be C1100 or C17000, plastics can be HDPE or PVC or ABS, wood can be softwood or hardwood, concrete can be portland cement or aggregates, ceramics can be alumina or zirconia. i dont want the product descriptions or dimensions to be shown :  " + input;
            setPrevPrompts(prev => [...prev, input]);
            setRecentPrompt(input);
        }
    
        responseM = await runChat(inputToSendG);
        console.log(responseG);

            //  Rest of your code remains unchanged..
        // let responseArray = responseM.split('**');
        // let newArray = "";
        // for (let i = 0; i < responseArray.length; i++) {
        //     if (i === 0 || i % 2 !== 1) {
        //         newArray += responseArray[i]
        //     }
        //     else {
        //         newArray += "<b>" + responseArray[i] + "</b>"
        //     }
        // }
        // console.log(newArray);
        // responseArray = newArray.split('*').join("</br>").split(" ");
        // for (let i = 0; i < responseArray.length; i++) {
        //     const nextWord = responseArray[i];
        //     delayPara(i, nextWord + " ")
        // }
        // setLoading(false);
        // setInput("")

        const reqs = { 
            grade : responseG,
            material : responseM
        }
        axios.post(`http://0.0.0.0:8000/sellerdata`, { reqs })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

      let fres;
      axios.post('/api/get_objects/') 
      .then(res => {
        fres = res;
        
      })
      .catch(error => {
        console.error('Error fetching objects:', error);
      });
    


        // Rest of your code remains unchanged..
        // let responseArray = response.split('**');
        // let newArray = "";
        // for (let i = 0; i < responseArray.length; i++) {
        //     if (i === 0 || i % 2 !== 1) {
        //         newArray += responseArray[i]
        //     }
        //     else {
        //         newArray += "<b>" + responseArray[i] + "</b>"
        //     }
        // }
        // console.log(newArray);
        // responseArray = newArray.split('*').join("</br>").split(" ");
        // for (let i = 0; i < responseArray.length; i++) {
        //     const nextWord = responseArray[i];
        //     delayPara(i, nextWord + " ")
        // }
        // setLoading(false);
        // setInput("")
    }

    const newChat = async () => {
        setLoading(false);
        setShowResult(false);
    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider