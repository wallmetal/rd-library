window.onload = handlerVisitorData;
function handlerVisitorData() { 
  var visitor_cookie = localStorage.visitor_cookie;
  if(!visitor_cookie) {
    var item = Math.floor((Math.random() * 10000000000) + 1);
    visitor_cookie = `${new Date().getTime()}${item}`;
    localStorage.setItem("visitor_cookie", visitor_cookie);
  }
  if( document.getElementById("visitor_cookie")) {
    document.getElementById("visitor_cookie").value = visitor_cookie;
  }
  var http = new XMLHttpRequest();
  var params = "visitor_cookie="+visitor_cookie+"&url="+window.location.href;
  http.open("POST", 'https://afternoon-gorge-85174.herokuapp.com/api/insert_access', true);
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http.send(params);
}