let btnAccess = document.querySelector("#_acessValid");
btnAccess.addEventListener("click", check);
//checking
function check() {
  var userName = document.getElementById("_username").value;
  var userPw = document.getElementById("_password").value;
  let userLogon = {
    user: "",
    password: "",
  };
  let userList = JSON.parse(localStorage.getItem("userList") || "null");
  if (!userList) {
    alert("Usuário inexistente!", "danger");
    window.location.href = "cadastro.html";
  }
  userList.forEach((item) => {
    if (userName == item.user && userPw == item.password) {
      userLogon = {
        user: item.user,
        password: item.password,
        myMessages: item.myMessages,
      };
    }
  });
  if (
    userName == userLogon.user &&
    userPw == userLogon.password &&
    userName != "" &&
    userPw != ""
  ) {
    alert("You are logged in!", "success");
    window.location.href = "recados.html";
    let mathRandom = Math.random().toString(16).substr(2);
    let token = mathRandom + mathRandom;

    localStorage.setItem("token", token);
    localStorage.setItem("userLogon", JSON.stringify(userLogon));
  } else {
    alert("Usuário inexistente ou erro de login!", "danger");
    console.log("Usuário inexistente ou erro de login");
  }
}
var alertPlaceholder = document.getElementById("liveAlertPlaceholder");

function alert(message, type) {
  var wrapper = document.createElement("div");
  wrapper.innerHTML +=
    '<div class="alert alert-' +
    type +
    ' alert-dismissible" role="alert">' +
    message +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

  alertPlaceholder.appendChild(wrapper);
}
