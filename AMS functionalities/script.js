var selectedRow = null
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData(); if (selectedRow == null) insertNewRecord(formData);
        else updateRecord(formData); resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["loginId"] = document.getElementById("loginId").value;
    formData["password"] = document.getElementById("password").value;
    formData["gender"] = document.getElementById("gender").value;
    console.log(formData["gender"]);
    formData["dob"] = document.getElementById("dob").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("facultyList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0); cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1); cell2.innerHTML = data.loginId;
    cell3 = newRow.insertCell(2); cell3.innerHTML = data.password;
    cell4 = newRow.insertCell(3); cell4.innerHTML = data.gender;
    cell5 = newRow.insertCell(4); cell5.innerHTML = data.dob;
    cell5 = newRow.insertCell(5); cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a><a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() { document.getElementById("fullName").value = ""; document.getElementById("loginId").value = ""; document.getElementById("password").value = ""; document.getElementById("gender").value = ""; document.getElementById("dob").value = ""; selectedRow = null; }

function onEdit(td) {
    selectedRow = td.parentElement.parentElement; document.getElementById("fullName").value = selectedRow.cells[0].innerHTML; document.getElementById("loginId").value = selectedRow.cells[1].innerHTML; document.getElementById("password").value = selectedRow.cells[2].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName; selectedRow.cells[1].innerHTML = formData.loginId; selectedRow.cells[2].innerHTML = formData.password;
    selectedRow.cells[3].innerHTML = formData.gender;
    selectedRow.cells[4].innerHTML = formData.dob;
}

function onDelete(td) { if (confirm('Are you sure to delete this record ?')) { row = td.parentElement.parentElement; document.getElementById("facultyList").deleteRow(row.rowIndex); resetForm(); } }

function validate() {
    if (document.getElementById("fullName").value.trim() == "") {
        isValid = false;
        document.getElementById("fullNameError").classList.remove("hide");
    }
    // else if (document.getElementById("loginId").value.trim() == "") {
    //     isValid = false;
    //     document.getElementById("loginIdError").classList.remove("hide");
    // }
    // else if (document.getElementById("password").value.trim() == "") {
    //     isValid = false;
    //     document.getElementById("passwordError").classList.remove("hide");
    // }
    // else if (document.getElementById("gender").value == "") {
    //     isValid = false;
    //     document.getElementById("genderError").classList.remove("hide");
    // }
    // else if (document.getElementById("dob").value.trim() == "") {
    //     isValid = false;
    //     document.getElementById("dobError").classList.remove("hide");
    // }
    else {
        isValid = true;
    }
    return isValid;
}
