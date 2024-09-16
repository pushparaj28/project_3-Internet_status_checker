window.addEventListener("load", checkInternetconnection);

function checkInternetconnection() {
    const statustext = document.getElementById('statustext');
    const ipstatustext = document.getElementById('IPstatuscheck');
    const networkstatustext = document.getElementById('Networkstatus');

    statustext.textContent = "Checking...";

    if (navigator.onLine) {
        fetch('https://api.ipify.org?format=json')
        .then((response) => response.json())
        .then((data) => {
            ipstatustext.textContent = data.ip;
            statustext.textContent = 'Connected';

            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            const networkstrength = connection ? connection.downlink + ' Mbps' : 'Unknown';

            networkstatustext.textContent = networkstrength;
        })
        .catch(() => {
            statustext.textContent = 'Disconnected';
            ipstatustext.textContent = ' - ';
            networkstatustext.textContent = ' - ';
        });
    } else {
        statustext.textContent = 'Disconnected';
        ipstatustext.textContent = ' - ';
        networkstatustext.textContent = ' - ';
    }
}
