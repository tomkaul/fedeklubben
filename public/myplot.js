
const start_weight = {'Claus': 93.0, 'Jacob': 88.7, 'Manse': 108.2, 'Thomas': 96.4};
const weight_data = [
  ['Claus', 'Jacob', 'Manse', 'Thomas'],
  [93.0, 88.7, 108.2, 96.4],
  [, , 107.1, 95.0],
];

var claus = {
  x: [11, 12],
  y: [0, 0],
  name: 'Claus',
  mode: 'lines+markers',
  line: {shape: 'linear', width: 4},
  type: 'scatter'
};

var jacob = {
  x: [11, 12],
  y: [0, 0],
  name: 'Jacob',
  mode: 'lines+markers',
  line: {shape: 'linear', width: 4},
  type: 'scatter'
};

var manse = {
  x: [11, 12],
  y: [0, -1.1],
  name: 'Manse',
  mode: 'lines+markers',
  line: {shape: 'linear', width: 4},
  type: 'scatter'
};

var thomas = {
  x: [11, 12],
  y: [0, -1.4],
  name: 'Thomas',
  mode: 'lines+markers',
  line: {shape: 'linear', width: 4},
  type: 'scatter'
};

var goal = {
  x: [11, 31],
  y: [0, -10],
  name: 'Mål',
  mode: 'lines',
  line: {
    dash: 'dot',
    width: 4
  }
};

var data = [goal, claus, jacob, manse, thomas];

var layout = {
  title: {
    text: 'Fedebanden fra Stubben',
    font: {size: 48}
  },
  font: {size: 30},
  xaxis: {
    title: 'Uge nr.',
    range: [11, 31],
    showgrid: true,
    zeroline: true,
    linewidth: 3
  },
  yaxis: {
    title: 'Vægttab (kg)',
    showline: true,
    linewidth: 3
  }
};

const myDiv = document.getElementById('myDiv');
Plotly.newPlot(myDiv, data, layout);	
