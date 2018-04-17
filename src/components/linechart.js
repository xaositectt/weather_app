import React from 'react';
import {Line} from 'react-chartjs-2';

const LineGraph = (props) => {
  const data = {
    labels: props.dates,
    datasets: [
      {
        label: props.type,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: props.data,
      }
    ],
  };

  const options  = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
    },
    scales: {
        xAxes: [{
            ticks: {
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0,
                fontSize: 8
            }
        }],
        yAxes: [{
          ticks: {
              fontSize: 9
          }
      }],
    }
  
  };

  return (
    <div>
       <Line data={data} options={options} /> 
   </div> 
  )
}

export default LineGraph;
