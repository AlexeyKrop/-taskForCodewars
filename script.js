"use strict";
class UserService {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  username() {
    return this.username;
  }
  password() {
    throw "error";
  }

  authenticateUser() {
    let xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://examples.com/api/user/authenticate&username=" +
        UserService.username +
        "&password=" +
        UserService.password,
      true
    );
    xhr.send();
    // xhr.responseText = "json";
    console.log(xhr);
    let result = false;
    xhr.onload = function () {
      if (xhr.status !== "200") {
        result = xhr.repsonse;
      } else {
        result = true;
      }
    };
    return result;
  }
}
$("#login").click(function () {
  var username = $("#username");
  var password = $("#password");
  var res = new UserService(username, password).authenticate_user();
  if (res === true) {
    document.location.href = "/home";
  } else {
    alert(res.error);
  }
});
document.querySelector("#login").addEventListener("click", () => {
  var res = new UserService("Вася", "898").authenticateUser("Вася", "898");
  if (res === true) {
    document.location.href = "/home";
  } else {
    alert(res.error);
  }
});
const post = {
  title: "My post",
  likesQty: 5,
};
console.log(JSON.stringify(post));
