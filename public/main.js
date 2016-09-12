var txt = document.getElementById('txtbox');
var displayText = document.getElementById('displaytext');
var t;
txt.onkeypress = function (evt) {
   if (evt.keyCode === 13) {
       evt.preventDefault();
       doSearch(txt.value);
   }
}

function doSearch(title) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var data = JSON.parse(this.responseText);
            t = data;
            console.log(t);
            displayInfo(data);
        }
    };
    xhttp.open("GET", "http://www.omdbapi.com/?t="+title+"&y=&plot=short&r=json", true);
    xhttp.send();
}

function displayInfo(data) {
    displayText.innerHTML = "<b>"+data.Title+"</b>" + "<br>" + data.Year + "<br>" + data.Actors; 
}

