// let data = JSON.parse('{{data| tojson | safe}}')

function pieChart(data){
    var xValues = ['usage', 'no-usage'];
    var yValues = [data[0]['ram_usage'], 100 - data[0]['ram_usage']];
    var barColors = [
        "#b91d47",
        "#00aba9"
    ];
    new Chart("myChart1", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "RAM Usage"
            }
        }
    });

    var xValues = ['usage', 'no-usage'];
    var yValues = [data[0]['cpu_usage'], 100 - data[0]['cpu_usage']];
    var barColors = [
        "#b91d47",
        "#00aba9"
    ];
    new Chart("myChart2", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "CPU Usage"
            }
        }
    });

    var xValues = ['usage', 'no-usage'];
    var yValues = [data[0]['virtual_memory'], 100 - data[0]['virtual_memory']];
    var barColors = [
        "#b91d47",
        "#00aba9"
    ];
    new Chart("myChart3", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Virtual Memory Usage"
            }
        }
    });

    var xValues = ['usage', 'no-usage'];
    var yValues = [data[0]['swap_memory'], 100 - data[0]['swap_memory']];
    var barColors = [
        "#b91d47",
        "#00aba9"
    ];
    new Chart("myChart4", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Swap Memory Usage"
            }
        }
    });

    var xValues = ['usage', 'no-usage'];
    var yValues = [data[0]['disk_usage'], 100 - data[0]['disk_usage']];
    var barColors = [
        "#b91d47",
        "#00aba9"
    ];
    new Chart("myChart5", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Disk Usage"
            }
        }
    });

    var xValues = ['usage', 'no-usage'];
    var yValues = [data[0]['cpu_usage'], 100 - data[0]['cpu_usage']];
    var barColors = [
        "#b91d47",
        "#00aba9"
    ];
    new Chart("myChart6", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Usage CPU"
            }
        }
    });





}
