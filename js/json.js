


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
    var name = document.getElementById("empname").value;
    var jobTitle = document.getElementById("jobtitle").value;
    var depName= document.getElementById("myselect").value;
    var obj = new XMLHttpRequest();
    obj.open("POST", "http://localhost:8080/addemployee");
    obj.setRequestHeader("Content-Type", "application/json");
    var employee = JSON.stringify({"name": name, "jobTitle": jobTitle,"employee.department":depName});
    console.log(employee);
    obj.send(employee);
    document.write("All Done Check Now");
}


function getdepartments() {
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
            var departments = obj.response;

            listDepartments(departments);
        }
        else {
            console.log(this.status);
        }

    }
}

    function listDepartments(departments){

            var ul=document.createElement('ul');

            for(var i=0;i<departments.length;i++)
            {
                var li=document.createElement('li');
                li.innerHTML=departments[i].depName;
                ul.appendChild(li);
            }

            document.getElementById("list").appendChild(ul);
            console.log(ul);
        }


    function populateselect(departments) {


    }

