$(document).ready(() => {
  if (!isAuth()) {
    const redirectURl = window.location.href.replace("nextpage", "login");
    window.location.replace(redirectURl);
  }

  renderTableData();
});

var studentList = JSON.parse(localStorage.getItem("studentList")) || [];

isAuth = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

handleClickAdd = (e) => {
  e.preventDefault();

  const studentForm = $("#studentForm")[0];
  const student = {
    fullname: studentForm.fullname.value,
    class: studentForm.class.value,
    dob: studentForm.dob.value,
    gender: studentForm.gender.value,
    language: Array.from($("input[type='checkbox'][name='language']"))
      .filter((item) => item.checked)
      .map((item) => item.value),
  };

  if (confirm("Xác nhận thêm sinh viên?")) {
    studentList.unshift(student);

    localStorage.setItem("studentList", JSON.stringify(studentList));

    renderTableData();
  }
};

renderRow = (studentData, idx) => {
  const studentListTable = $("#student-list");
  const studentNode = document.createElement("tr");
  for (const key in studentData) {
    const cell = document.createElement("td");
    cell.innerHTML =
      key === "dob" ? formatDate(studentData[key]) : studentData[key];
    studentNode.appendChild(cell);
  }
  const deleteCell = document.createElement("td");
  deleteCell.innerHTML = `<button class="btn-text" onclick="handleDeleteItem(${idx})">Delete</button>`;
  studentNode.appendChild(deleteCell);
  studentListTable.append(studentNode);
};

renderTableData = () => {
  const studentListTable = $("#student-list")[0];
  if (studentList && studentList.length) {
    $("#student-list tbody")[0].innerHTML = "";
    studentList.forEach((item, idx) => renderRow(item, idx));
  } else {
    $("#student-list tbody")[0].innerHTML =
      '<tr><td colspan="6"><div style="width: 100%; text-align: center; padding: 1rem">No data found</div></td></tr>';
  }
};

handleDeleteItem = (idx) => {
  studentList.splice(idx, 1);
  localStorage.setItem("studentList", JSON.stringify(studentList));
  renderTableData();
};

formatDate = (input) => {
  var datePart = input.match(/\d+/g),
    year = datePart[0], // get only two digits
    month = datePart[1],
    day = datePart[2];

  return day + "/" + month + "/" + year;
};
