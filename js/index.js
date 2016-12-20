document.getElementById('page-loaded').innerHTML = (new Date()).toLocaleTimeString();

document.getElementById('get-data').addEventListener('click', getdata);

function getdata() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var clientdata = JSON.parse(xhr.responseText);
            document.getElementById('client-name').innerHTML = clientdata.name;
            document.getElementById('client-adress').innerHTML = clientdata.adress;
            document.getElementById('client-work').innerHTML = clientdata.work;
        }
    }
    xhr.open('GET', 'client.json', true);
    xhr.send();
    
}