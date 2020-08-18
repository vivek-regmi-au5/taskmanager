import * as Server from "./server.js";
import * as Task from "./task.js";

document
  .querySelector(".addServer")
  .addEventListener("click", Server.addServer);

document
  .querySelector(".removeServer")
  .addEventListener("click", Server.removeServer);

document.querySelector(".reload").addEventListener("click", function () {
  window.location.reload();
});

document.querySelector(".addTask").addEventListener("click", Task.addTask);
