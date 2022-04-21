import React, { useState, useEffect } from 'react'
import java from '../../Question/java';
import javascript from '../../Question/Javascript';
import php from '../../Question/Php';
import { Chart } from './Chart';
import { useHistory } from 'react-router-dom';
const Submit = () => {
    let [data, setdata] = useState([])
    let [inc, setinc] = useState(0);
    const history = useHistory();
    useEffect(() => {
        if (sessionStorage.getItem("subject") === "java") {
            setdata(java.mcq);
            java.mcq.map((ob, i) => {
                if (sessionStorage.getItem(`q${i + 1}`) === ob.ans) {
                    setinc(++inc);
                }
            })
        }
        else if (sessionStorage.getItem("subject") === "php") {
            setdata(php.mcq);
            php.mcq.map((ob, i) => {
                if (sessionStorage.getItem(`q${i + 1}`) === ob.ans) {
                    setinc(++inc);
                }
            })
        }
        else {
            setdata(javascript.mcq);
            javascript.mcq.map((ob, i) => {
                if (sessionStorage.getItem(`q${i + 1}`) === ob.ans) {
                    setinc(++inc);
                }
            })
        }
    }, []);

    const retake = () => {
        sessionStorage.clear();
        history.push("/");
    }

    return (
        < div >
            <div style={{ "textAlign": "center", "fontSize": "4rem", "color": "orange", "margin": "1rem", "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
                <div style={{ "width": "50%" }}> <p>Result {sessionStorage.getItem("name")}</p></div>
                <div style={{ "width": "50%" }}>Press to retake the text <button style={{ "fontSize": "2.5rem", "padding": "1rem", "borderRadius": "2rem", "backgroundColor": "rgba(57, 104, 192, 0.616) ", "color": "white" }} onClick={() => retake()}>Click here</button></div>
            </div>
            <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "marginTop": "3rem" }}>
                <div style={{ "width": "50%", "borderRight": ".2rem solid black", "paddingLeft": "2rem", "paddingRight": "6rem" }}>
                    {data.map((val, i) => {
                        return (<div key={i} style={{ "width": "100%", "padding": "1rem" }}>
                            <h1 style={{ "textAlign": "center", "paddingBottom": "2.5rem" }}>{`${i + 1}->${val.ques}`}</h1>
                            <div style={{ "display": "flex", "justifyContent": "space-around", "alignItems": "center" }}>
                                <div style={{ "display": "flex", "border": ".1rem solid grey", "padding": ".8rem", "justifyContent": "space-around", "alignItems": "center", "width": "50%", "fontSize": "2rem" }}>
                                    <span style={{ "padding": ".2rem", "fontSize": "2rem", "textAlign": "center" }}>selected : <span style={sessionStorage.getItem(`q${i + 1}`) === val.ans ? { "backgroundColor": "green", "padding": ".5rem", "color": "white" } : { "backgroundColor": "red", "padding": ".5rem", "color": "white" }}> {sessionStorage.getItem(`q${i + 1}`)}</span>
                                    </span>
                                </div>
                                <div style={{ "display": "flex", "padding": "1rem", "justifyContent": "space-around", "alignItems": "center", "border": ".1rem solid grey", "width": "50%", "fontSize": "2rem", }}>
                                    <span>Correct : <span style={{ "fontSize": "2rem", "padding": ".5rem", "color": "white", "width": "10.8rem", "textAlign": "center", "backgroundColor": "green" }}>
                                        {val.ans}</span></span>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
                <div style={{ "width": "50%" }}><Chart right={inc}></Chart></div>
            </div>
        </ div>
    )
}

export default Submit
// console.log(data.mcq.map((val, ind) => { return <><p>val</p></> }))