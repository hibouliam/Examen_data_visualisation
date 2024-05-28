fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
    sortByCountryPopulation(data);
    const top30Countries = getTop30Countries(data);
    createBarChart(top30Countries);
}

function sortByCountryPopulation(data) {
    data.sort((a, b) => b.population - a.population);
}

function getTop30Countries(data) {
    return data.slice(0, 30);
}

function createBarChart(data) {
    const countryNames = data.map(country => country.country);
    const populations = data.map(country => country.population);

    const trace = {
        x: countryNames,
        y: populations,
        type: 'bar',
        marker: {
            color: 'rgba(55, 128, 191, 0.7)',
            line: {
                color: 'rgba(55, 128, 191, 1.0)',
                width: 2
            }
        }
    };

    const layout = {
        title: 'Top 30 Countries by Population',
        xaxis: {
            title: 'Country',
            tickangle: -45
        },
        yaxis: {
            title: 'Population'
        },
        margin: {
            b: 150
        }
    };

    Plotly.newPlot('data-viz', [trace], layout);
}
