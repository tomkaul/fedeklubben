// Weight data
const dataPointsAll = {
  'Claus': {start_weight: 93.3,
    data: [
    { x: 11, y: 0 },
    { x: 12, y: -0.5 },
  ]},
  'Jacob': {start_weight: 88.7,
    data: [
    { x: 11, y: 0 },
    { x: 12, y: -1.4 },
  ]},
  'Manse': {start_weight: 108.2,
    data: [
    { x: 11, y: 0 },
    { x: 12, y: -1.1 },
  ]},
  'Thomas': {start_weight: 96.4,
    data: [
    { x: 11, y: 0 },
    { x: 12, y: -1.4 },
  ]},
};
// Misc function
function get_current_weight(key) {
  return (dataPointsAll[key].start_weight + dataPointsAll[key].data[dataPointsAll[key].data.length-1].y).toFixed(1);
};
function get_start_weight(key) {
  return dataPointsAll[key].start_weight.toFixed(1);
};
function get_weight_loss(key) {
  return -dataPointsAll[key].data[dataPointsAll[key].data.length-1].y.toFixed(1);
};

// Update the plot
function update_plot() {
// window.onload = function () {
  var options = {
    theme: "light2",
    title:{
      text: "Fedeklubben Stubben"
    },
    axisX:{
        title: "Uge nr.",
        minimum: 11
      // valueFormatString: "DD MMM"
    },
    axisY: {
      title: "Vægt diff (kg)",
      //minimum: 30
    },
    legend:{
      // cursor:"pointer",
      verticalAlign: "bottom",
      horizontalAlign: "left",
      dockInsidePlotArea: true,
      // itemclick: toogleDataSeries
    },
    data: [
      {
      type: "line",
      showInLegend: true,
      name: "Claus",
      //color: "#F08080",
      dataPoints: dataPointsAll['Claus'].data
      },
      {
        type: "line",
        showInLegend: true,
        name: "Jacob",
        //color: "#F08080",
        dataPoints: dataPointsAll['Jacob'].data
      },
      {
        type: "line",
        showInLegend: true,
        name: "Manse",
        //color: "#F08080",
        dataPoints: dataPointsAll['Manse'].data
      },
      {
        type: "line",
        showInLegend: true,
        name: "Thomas",
        //color: "#F08080",
        dataPoints: dataPointsAll['Thomas'].data
      },
      {
        type: "line",
        showInLegend: true,
        name: "Mål",
        lineDashType: "dash",
        dataPoints: [
          { x: 11, y: 0 },
          { x: 31, y: -10 }
        ]
      },
    ]
    };
  $("#chartContainer").CanvasJSChart(options);
  };

// Create a table containing primary data
function update_table() {
  var res = '<table class="table table-striped">';
  // Headline
  res += "<thead class='thead-dark'><tr>><th>" + new Date().toISOString().slice(0,10) + " </th>"
  Object.keys(dataPointsAll).forEach(function(key) {
    res += "<th>" + key + "</th>";
  });
  res += " </tr></thead><tbody>";  
  // Startvægt
  res += " <tr>";
  res += "  <td>Startvægt (kg)</td>";
  Object.keys(dataPointsAll).forEach(function(key) {
    res += "  <td>" + get_start_weight(key)  + "</td>";
  });
  res += " </tr>";  

  // Nuværende vægt
  res += " </tr>";
  res += " <tr>";
  res += "  <td>Nuv. vægt (kg)</td>";
  Object.keys(dataPointsAll).forEach(function(key) {
    res += "  <td>" + get_current_weight(key) + "</td>";
  });
  res += " </tr>";  
  // Vægttab
  res += " </tr>";
  res += " <tr class='table-success'>";
  res += "  <td>Vægttab (kg)</td>";
  Object.keys(dataPointsAll).forEach(function(key) {
    res += "  <td>" + get_weight_loss(key) + "</td>";
  });
  res += " </tr>";  
  
  // Afslut tabel
  res += "</tbody></table>";

  // // Test
  // Object.keys(dataPointsAll).forEach(function(key) {
  //   console.log(key);
  // });

  // Skriv tabel til hjemmesiden
  var tab = document.getElementById("tableContainer");
  tab.innerHTML = res;  
}
