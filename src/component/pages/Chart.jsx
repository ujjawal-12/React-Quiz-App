import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export function Chart(props) {
    let per = (props.right / 5) * 100;
    const data = {
        labels: [`Correct ${per}%`, `Worng ${100 - per}%`],
        datasets: [
            {
                label: '# of Votes',
                data: [per, 100 - per],
                backgroundColor: [
                    'rgba(96, 163, 96, 0.548)',
                    'rgba(167, 83, 72, 0.548)',

                ],
                borderColor: [
                    'rgba(96, 163, 96, 0.548)',
                    'rgba(167, 83, 72, 0.548)',

                ],
                borderWidth: 1,
            },
        ],
    };
    return <div style={{ "width": "40rem", "height": "50rem", "marginLeft": "15rem", "marginTop": "7rem" }}><Pie data={data} ></Pie></div>;
}
