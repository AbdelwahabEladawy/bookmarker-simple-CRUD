var siteName = document.getElementById("name");
var siteURL = document.getElementById("siteURL");

var sitesInfo = [];
if (sitesInfo !== null) {
  sitesInfo = JSON.parse(localStorage.getItem("list"));
  display(sitesInfo);
}

function getInfo() {
  if (nameValidation()) {
    var site = {
      name: siteName.value,
      link: siteURL.value,
    };
    sitesInfo.push(site);
    display(sitesInfo);
    localStorage.setItem("list", JSON.stringify(sitesInfo));
    clearInputs();
    siteName.classList.remove("is-valid");
    siteURL.classList.remove("is-valid");
  }
}

function display(list) {
  container = "";
  for (var i = 0; i < list.length; i++) {
    container += `  <tr>
        <td >${[i + 1]}</td>
        <td >${list[i].name}</td>
        <td ><button class="btn-info btn btn  px-3 text-light fw-bold "><a class="text-decoration-none" target="_blank" href="${
          list[i].link
        }"><i class="fa-solid fa-eye  pe-3 text-light"></i>Visit</button></td>
        <td ><button onclick="deleteItem()" class="btn-danger btn btn px-3 text-light fw-bold "><i class="fa-solid fa-trash pe-3 text-light"></i>Delete</button></td>
        </tr>`;
  }
  document.getElementById("display-Data").innerHTML = container;
}
function clearInputs() {
  siteName.value = "";
  siteURL.value = "";
}

function deleteItem(i) {
  sitesInfo.splice(i, 1);
  display(sitesInfo);
  localStorage.setItem("list", JSON.stringify(sitesInfo));
}

function nameValidation() {
  var regex = /^[A-Z]([a-z]|[0-9])+/;
  var nameError = document.getElementById("nameError");
  if (regex.test(siteName.value) === true) {
    siteName.classList.add("is-valid");
    siteName.classList.remove("is-invalid");
    nameError.classList.add("d-none");
    return true;
  } else {
    siteName.classList.add("is-invalid");
    siteName.classList.remove("is-valid");
    nameError.classList.remove("d-none");
    return false;
  }
}

function validateUrl() {
  var regex =
    /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
  urlError = document.getElementById("urlError");
  if (regex.test(siteURL.value) === true) {
    siteURL.classList.add("is-valid");
    siteURL.classList.remove("is-invalid");
    urlError.classList.add("d.none");
    return true;
  } else {
    siteURL.classList.remove("is-valid");
    siteURL.classList.add("is-invalid");
    urlError.classList.remove("d.none");
    return false;
  }
}
