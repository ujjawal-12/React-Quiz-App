import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    let [name, setname] = useState(' ');
    let [course, setcourse] = useState(' ');
    let [subject, setsubject] = useState(' ');
    const history = useHistory();
    const notify = () => toast.warn(' Make sure all field are fullfield!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
    // let [red, setred] = useState(0)

    let submit = () => {
        if (name === " " || course === " " || subject === " ") {
            // alert("Please fill all the field");
            notify();

        }
        else {
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("course", course);
            sessionStorage.setItem("subject", subject);
            history.push("/quiz");
        }
    }

    return (
        <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "column", "height": "65rem" }}>
            <div>
                <div style={{ "marginBottom": "4rem", "fontSize": "2.5rem" }}><label htmlFor='name'>Name</label><input type="text" id='name' name='uname' style={{ "fontSize": "2rem", "marginLeft": "1rem", "outline": "none", "borderTop": "0", "borderLeft": "0", "borderRight": "0", "borderBottom": ".2rem solid blue", "width": "17rem" }} value={name} onChange={(e) => setname(e.target.value)} /></div>
                <div style={{ "marginBottom": "4rem", "fontSize": "2.5rem" }}><label htmlFor='course'>Course</label><input type="text" id='course' name='ucourse' style={{ "fontSize": "2rem", "marginLeft": "1rem", "outline": "none", "borderTop": "0", "borderLeft": "0", "borderRight": "0", "borderBottom": ".2rem solid blue", "width": "17rem" }} value={course} onChange={(e) => setcourse(e.target.value)} /></div>
                <div style={{ "marginBottom": "8rem", "fontSize": "2.5rem" }}><label htmlFor='sub'>Subject</label><select value={subject} style={{ "fontSize": "2.3rem", "marginLeft": "1rem" }} onChange={(e) => setsubject(e.target.value)}><option>None</option><option>java</option><option>php</option><option>javaScript</option></select></div>
            </div>
            <button style={{ "padding": "1rem", "fontSize": "2rem", "backgroundColor": "green", "color": "white", "borderRadius": "1rem" }} onClick={submit}> Submit </button> <ToastContainer style={{ "fontSize": "1.7rem", "height": "15rem" }} />
        </div>
    )
}

export default Home

