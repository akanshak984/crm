var data = [{
    values: [19, 26],
    labels: ['selected', 'NonSelected'],
    type: 'pie'
}];

var layout = {
    height: 400,
    width: 420,
    title: 'Selected v/s not-selected'
};
Plotly.newPlot('myDiv', data, layout, {responsive: true});

var data1 = [{
    values: [19, 26, 25, 30, 8, 2],
    labels: ['Infosys', 'Wipro', 'Cognizant', 'TCS', 'Amdocs', 'Amazon'],
    type: 'pie'
}];

var layout = {
    height: 400,
    width: 420,
    title: 'Company wise selected students'
};
Plotly.newPlot('myDiv1', data1, layout, {responsive: true});

var data2 = [
{
    x: ['Infosys', 'Wipro', 'Cognizant', 'TCS', 'Amdocs', 'Amazon'],
    y: [19, 26, 25, 30, 8, 2],
    type: 'bar'
}];
var layout = {
    height: 400,
    width: 420,
    title: 'Company wise selected students'
};
Plotly.newPlot('myDiv2', data2, layout, {responsive: true});

var data3 = [
{
    values: [80, 50, 30, 20, 8, 12],
    labels: ['Computer', 'IT', 'Entc', 'Chemical', 'Mechanical', 'Electronics'],
    type: 'pie'
}
];
var layout = {
    height: 400,
    width: 420,
    title: 'Branch wise selected students'
};    
Plotly.newPlot('myDiv3', data3, layout, {responsive: true});


var data4 = [
{
    x: ['2014', '2015', '2016', '2017', '2018', '2019'],
    y: [19, 26, 25, 30, 8, 2],
    type: 'bar'
}];
var layout = {
    height: 400,
    width: 420,
    title: 'Year-wise placed students'
}; 
Plotly.newPlot('myDiv4', data4, layout, {responsive: true});

var data5 = [
{
    values: [30, 200],
    labels: ['Dream', 'Non-Dream'],
    type: 'pie'
}];
var layout = {
    height: 400,
    width: 420,
    title: 'Dream v/s non-dream'
};    
Plotly.newPlot('myDiv5', data5, layout, {responsive: true});

var data6 = [
{
    x: ['2018-10-04 22:23:00', '2018-11-04 22:23:00', '2018-12-04 22:23:00'],
    y: [1, 3, 6],
    type: 'scatter'
}];
var layout = {
    height: 400,
    width: 420,
    title: 'Number of companies visited in the final year'
};  
Plotly.newPlot('myDiv6', data6, layout, {responsive: true});

var data7 = [
{
    x: ['2018-10-04 22:23:00', '2018-11-04 22:23:00', '2018-12-04 22:23:00'],
    y: [1, 3, 6],
    type: 'scatter'
}];
var layout = {
    height: 400,
    width: 420,
    title: 'Number of students placed in the final year'
};  
Plotly.newPlot('myDiv7', data7, layout, {responsive: true});