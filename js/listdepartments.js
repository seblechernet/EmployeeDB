function getDepartments(callbackFunction) {
    var obj = new XMLHttpRequest();
    obj.open("GET", "http://localhost:8080/listdepartments");
    obj.setRequestHeader("Content-Type", "application/json");
    obj.responseType = 'json';
    obj.send();

    obj.onreadystatechange = function checkAPIState() {

        console.log("Checking status");
        if (this.status == 200 && this.readyState == 4) {

            console.log(obj.response);
            console.log(obj.response[0].depName);
            departments=obj.response;
            callbackFunction(departments);
        }
        else {
            console.log(this.status);
        }
    }

    // var btn = document.getElementById("listdep");
    // btn.disabled=true;

    return obj.response;

}
function findDepartments() {
    getDepartments(listDepartments);

}
function listDepartments(departments) {

    // var depArray=getDepartments();

    var ul = document.createElement('ul');

    for (var i = 0; i < departments.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = departments[i].depName;
        ul.appendChild(li);
    }

    document.getElementById("list").appendChild(ul);
    console.log(ul);
}