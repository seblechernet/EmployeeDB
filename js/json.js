
var departments;
function addDepartment() {
    var depName = document.getElementById("depname").value;
    var obj = new XMLHttpRequest();
    obj.open("POST", "http://localhost:8080/adddepartment");
    obj.setRequestHeader("Content-Type", "application/json");
    var department = JSON.stringify({"depName": depName});
    console.log(department);
    obj.send(department);
    document.write("All Done Check Now");
}


function addEmployee() {

    var depId = document.getElementById("mySelect").value;
    var name = document.getElementById("empname").value;
    var jobTitle = document.getElementById("jobtitle").value;
    var obj = new XMLHttpRequest();
    obj.open("POST", "http://localhost:8080/addemployee");
    obj.setRequestHeader("Content-Type", "application/json");
    var employee = JSON.stringify({"name": name, "jobTitle": jobTitle, "department": depId});
    console.log();
    console.log(employee);
    obj.send(employee);
    document.write("All Done Check Now");
}


// function getDepartments() {
//     var obj = new XMLHttpRequest();
//     obj.open("GET", "http://localhost:8080/listdepartments");
//     obj.setRequestHeader("Content-Type", "application/json");
//     obj.responseType = 'json';
//     obj.send();
//
//     obj.onreadystatechange = function checkAPIState() {
//
//         console.log("Checking status");
//         if (this.status == 200 && this.readyState == 4) {
//
//             console.log(obj.response);
//             console.log(obj.response[0].depName);
//             departments=obj.response;
//             list(departments);
//
//         }
//         else {
//             console.log(this.status);
//         }
//     }
//
//     // var btn = document.getElementById("listdep");
//     // btn.disabled=true;
//
//     return obj.response;
//
// }
function populatedSelect() {
    getDepartments(list);

}

function list (myArray){
    console.log("we are here");
    var select = document.getElementById("mySelect");
    console.log(myArray.length);
    var option= '';
    for (i = 0; i < myArray.length; i++) {
        option += "<option value='" + myArray[i]+ "'>" + myArray[i].depName + "</option>";
        // var option = document.createElement('option');
        // option.innerHTML = myArray[i].depName;
        // option.value = myArray[i];
        select.innerHTML = option;
    }

}


