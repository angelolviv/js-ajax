document.getElementById('loaded').innerHTML = (new Date()).toLocatetimeString();
document.getElementById('btn-getdata').addEventListener('click', makerequest);

function makerequest() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readystate === 4 && xhr.status === 2000) {
            var clientdata = JSON.parse(xhr.responseText);
            document.getElementById('client-name').innerHTML = clientdata.name;
            document.getElementById('client-adress').innerHTML = clientdata.adress;
        }
    }
    xhr.open('GET', 'client.json', true);
    xhr.send();
}
