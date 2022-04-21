import React from 'react'
import "../../App.css";
const Circle = ({ dt, callstate, setq }) => {
    return (
        <div style={{ "display": "flex", "justifyContent": "space-around", "alignItems": "center", "padding": ".7rem", "marginTop": "1rem" }}>
            <div style={{ "width": "30%", "height": "12rem", "borderRadius": "2rem", "display": "flex", "justifyContent": "center", "alignItems": "center", "border": ".3rem solid rgba(163, 81, 163, 0.616)" }}>
                <div className='cir' style={sessionStorage.getItem('q1') && { "backgroundColor": "red" }} onClick={() => { callstate(1); setq(dt[0]) }}>1</div>
                <div className='cir' style={sessionStorage.getItem('q2') && { "backgroundColor": "red" }} onClick={() => { callstate(2); setq(dt[1]) }}>2</div>
                <div className='cir' style={sessionStorage.getItem('q3') && { "backgroundColor": "red" }} onClick={() => { callstate(3); setq(dt[2]) }}>3</div>
                <div className='cir' style={sessionStorage.getItem('q4') && { "backgroundColor": "red" }} onClick={() => { callstate(4); setq(dt[3]) }}>4</div>
                <div className='cir' style={sessionStorage.getItem('q5') && { "backgroundColor": "red" }} onClick={() => { callstate(5); setq(dt[4]) }}>5</div>
            </div>
            <div style={{ "width": "30%", "height": "12rem", "borderRadius": "2rem", "padding": "1rem", "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "column", "border": ".3rem solid rgba(163, 81, 163, 0.616)" }}>
                <h1>Name:- {sessionStorage.getItem("name")}</h1>
                <h1>Couse:- {sessionStorage.getItem("course")}</h1>
                <h1>Subject:- {sessionStorage.getItem("subject")}</h1>
            </div>
        </div>
    )
}

export default Circle
