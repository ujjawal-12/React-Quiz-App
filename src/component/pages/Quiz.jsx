import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Circle from './Circle'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Javascript from "../../Question/Javascript";
import java from "../../Question/java";
import php from "../../Question/Php";
import javascript from '../../Question/Javascript';

const Quiz = () => {
    let [data, setdata] = useState([]);
    let [qno, setqno] = useState(1);
    let [checkedState, setCheckedState] = useState(new Array(4).fill(false));
    let [selectedchkbox, setselectedchkbox] = useState([]);
    let [field, setfld] = useState("");
    let [que, setque] = useState({ type: " ", ques: " ", ans: " ", option: [] });
    const history = useHistory();
    useEffect(() => {
        if (sessionStorage.getItem("subject") === "java") {
            setque(java.mcq[0]);
            setdata(java.mcq);
        }
        else if (sessionStorage.getItem("subject") === "php") {
            setdata(php.mcq);
            setque(php.mcq[0]);
        }
        else {
            setdata(javascript.mcq);
            setque(javascript.mcq[0]);
        }
    }, []);

    const notify = () => toast.warn(' Fill the field to move next question', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });

    const handleonchange = (pos) => {
        const updatecheck = checkedState.map((val, ind) => ind === pos ? !val : val);
        setCheckedState(updatecheck);
        let ar = [];
        updatecheck.map((val, ind) => { if (val === true) { ar.push(que.option[ind]) } else { ar.push() } });
        setselectedchkbox(ar);
    }

    return (
        <div>
            <div><Circle dt={data} callstate={setqno} setq={setque} /></div>
            <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "height": "51rem" }}>
                <div style={{ "height": "45rem", "marginBottom": "3rem", "border": ".4rem solid rgba(113, 98, 184, 0.616)", "width": "75%", "borderRadius": "4rem", "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "column" }}>
                    <div style={{ "marginBottom": "3rem" }}>
                        <h1 style={{ "fontSize": "3rem" }}>{`${qno}-> ${que.ques}`}</h1>
                    </div>
                    <div style={{ "marginTop": "1rem" }} >
                        {que.option.map((d, i) => {
                            if (que.type === "radio") {
                                return <div key={d}><input type="radio" onChange={(e) => setfld(e.target.value)} style={{ "padding": ".5rem" }} name={que.ans} value={d} id={d} checked={sessionStorage.getItem(`q${qno}`) === d ? true : field === d}></input><label htmlFor={d} style={{ "fontSize": "2.5rem", "marginLeft": "1rem" }}>{d}</label><br></br></div>
                            }
                            else if (que.type === "fill") {
                                return <div key={d}><span style={{ "fontSize": "2.5rem", "color": "blue" }}>Ans: {sessionStorage.getItem(`q${qno}`)}</span><input type="text" value={field} onChange={(e) => setfld(e.target.value)} style={{ "fontSize": "2rem", "marginLeft": "1rem", "outline": "none", "borderTop": "0", "borderLeft": "0", "borderRight": "0", "borderBottom": ".2rem solid blue", "width": "17rem" }} /></div>
                            }
                            else {
                                return <div key={d}><input type="checkbox" name={d} value={d} id={i} checked={checkedState[i]} onClick={(e) => handleonchange(i)} style={{ "padding": ".5rem" }}  ></input><label htmlFor={i} style={{ "fontSize": "2.5rem", "marginLeft": "1rem" }}>{d}</label><br></br></div>
                            }
                        })}
                    </div>
                    <div style={{ "display": "flex", "justifyContent": "space-around", "alignItems": "center", "width": "100%", "marginTop": "7rem" }}>
                        <div >
                            {qno > 1 && <button type='button' style={{ "fontSize": "2.5rem", "padding": "1rem 1.5rem 1rem 1.5rem", "borderRadius": "2rem", "backgroundColor": "rgba(196, 196, 69, 0.767)", "color": "white" }} onClick={() => { setqno(--qno); setque(data[qno - 1]) }}>Prev</button>}
                        </div>
                        <div>
                            {qno < 5 ? <button type='button' style={{ "fontSize": "2.5rem", "padding": "1rem 1.5rem 1rem 1.5rem", "borderRadius": "2rem", "backgroundColor": "rgba(72, 161, 72, 0.712)", "color": "white" }} onClick={() => {
                                // if (sessionStorage.getItem(`q${qno}`)) { }

                                if (field || selectedchkbox.length >= 1) {
                                    if (que.type === "checkbox") {
                                        sessionStorage.setItem(`q${qno}`, selectedchkbox.join(" and "))
                                    }
                                    else {
                                        sessionStorage.setItem(`q${qno}`, field);
                                    }
                                    setqno(++qno); setque(data[qno - 1]); setfld(""); setselectedchkbox([]);
                                }
                                else {
                                    if (sessionStorage.getItem(`q${qno}`)) {
                                        setqno(++qno); setque(data[qno - 1]); setselectedchkbox([]);
                                    }
                                    else {
                                        notify();
                                    }
                                }


                                // if (field) { setqno(++qno); setque(data[qno - 1]); setfld(""); }
                            }}>Next</button> : <button style={{ "border": ".1rem solid black", "fontSize": "2.5rem", "padding": "1rem 1.5rem 1rem 1.5rem", "borderRadius": "2rem", "backgroundColor": "rgba(72, 161, 72, 0.712)", "color": "white" }}
                                onClick={() => {
                                    if (field || selectedchkbox.length >= 1) {
                                        if (que.type === "checkbox") { sessionStorage.setItem(`q${qno}`, selectedchkbox.join(" and ")) } else { sessionStorage.setItem(`q${qno}`, field) }
                                        history.push("./submit");
                                    }
                                    else {
                                        notify();
                                    }
                                }}>Submit</button>}<ToastContainer style={{ "fontSize": "1.5rem" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quiz

// checked={sessionStorage.getItem(`q${qno}`) === d ? true : field === d}
// return <div key={d}><input type="checkbox" onClick={(e) => setchkbox([...chkbox, e.target.value])} style={{ "padding": ".5rem" }} name={d} value={d} id={d} ></input><label htmlFor={d} style={{ "fontSize": "2.5rem", "marginLeft": "1rem" }}>{d}</label><br></br></div>
