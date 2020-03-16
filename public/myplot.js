
const columns =   ['Claus', 'Jacob', 'Manse', 'Thomas'];
const weight_data = [
  [93.0, 93],     // Claus
  [88.7, 88.7],   // Jacob
  [108.2, 107.1], // Manse
  [96.4, 95.0],   // Thomas
];
const weeks = [11, 12];
const startWeek = weeks[0];
// Calculate weight loss
// var weight_loss = [];
// for(var i = 0; i < columns.length; i++) {
//   // weight_loss.push(weight_data[i]);
//   for(var j = 0; j < weight_data[i].length; j++) {
//     weight_loss[i][j] = weight_data[i][0] - weight_data[i][j];
//   }
// }

var claus = {
  x: weeks,
  y: [0, 0],
  name: 'Claus',
  mode: 'lines+markers',
  line: {shape: 'linear', width: 4},
  type: 'scatter'
};

var jacob = {
  x: weeks,
  y: [0, 0],
  name: 'Jacob',
  mode: 'lines+markers',
  line: {shape: 'linear', width: 4},
  type: 'scatter'
};

var manse = {
  x: weeks,
  y: [0, -1.1],
  name: 'Manse',
  mode: 'lines+markers',
  line: {shape: 'linear', width: 4},
  type: 'scatter'
};

var thomas = {
  x: weeks,
  y: [0, -1.4],
  // y: weight_loss[3],
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

function update_page() {
  var res = "<table>";
  // Headline
  res += "<tr><th>" + new Date().toISOString().slice(0,10) + " </th>"
  for(var i = 0; i < columns.length; i++) {
    res += "<th>" + columns[i] + "</th>";
  }
  res += " </tr>";  
  // Startvægt
  res += " <tr>";
  res += "  <td>Startvægt (kg)</td>";
  for(var i = 0; i < columns.length; i++) {
    res += "  <td>" + weight_data[i][0].toFixed(1) + "</td>";
  }
  // Nuværende vægt
  res += " </tr>";
  res += " <tr>";
  res += "  <td>Nuv. vægt (kg)</td>";
  for(var i = 0; i < columns.length; i++) {
    res += "  <td>" + (weight_data[i][weight_data[i].length - 1]).toFixed(1) + "</td>";
  }
  res += " </tr>";  
  // Vægttab
  res += " </tr>";
  res += " <tr>";
  res += "  <td>Vægttab (kg)</td>";
  for(var i = 0; i < columns.length; i++) {
    res += "  <td>" + (weight_data[i][0] - weight_data[i][weight_data[i].length - 1]).toFixed(1) + "</td>";
  }
  res += " </tr>";  
  
  // Afslut tabel
  res += "</table>";

  // Lav plot
  const myPlot = document.getElementById('myPlot');
  Plotly.newPlot(myPlot, data, layout);	

  // Skriv tabel til hjemmesiden
  var tab = document.getElementById("myTable");
  tab.innerHTML = res;  
}
