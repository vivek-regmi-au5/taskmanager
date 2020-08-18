import { serverCount } from "./../js/server.js";

// Utility function to change progress bar
function progress() {
  var el = document.querySelectorAll(".progress");
  el.forEach((item) => {
    var width = 0;
    var id = setInterval(frame, 1000);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width = width + 5;
        item.style.width = width + "%";
      }
    }
  });
}

function addTask() {
  var numberOfTasks = parseInt(document.getElementById("task").value);

  document.getElementById("task").value = null;
  var numberOfServersAvailabe = serverCount;
  var noOfIters = 1;

  // Function to load pending tasks and set other parameters *******************************************************************
  var newId = setInterval(loadIdleTasks, 20000);
  function loadIdleTasks() {
    var taskLeft = numberOfTasks - serverCount * noOfIters;

    var itemsProcessed = 0;
    var el = document.querySelectorAll(".progress");
    el.forEach((item) => {
      item.setAttribute("class", "completed");
      itemsProcessed++;
      if (itemsProcessed === el.length) {
        var completed = document.querySelectorAll(".completed");
        completed.forEach((item) => {
          if (item.parentElement.parentElement.children.length === 2) {
            var newi = document.createElement("i");
            newi.setAttribute("class", "fas fa-check");
            item.parentElement.parentElement.appendChild(newi);
          }
        });
      }
    });

    // Setting complete tags to completed tasks***************************************************

    // *******************************************************************************************

    if (taskLeft <= 0) {
      clearInterval(newId);
    } else {
      // Remove the idle progress bars**********************************************************
      var parentDiv = document.querySelector(".allTasks");
      var divToRemove = document.querySelectorAll(".incomplete");

      divToRemove.forEach((item) => {
        parentDiv.removeChild(item);
      });
      // ****************************************************************************************
      numberOfServersAvailabe = serverCount;

      for (let j = 0; j < taskLeft; j++) {
        if (numberOfServersAvailabe > 0) {
          // Preparing card for showing progress bar card ****************************************
          // *************************************************************************************
          var outerDiv = document.createElement("div");
          var h5 = document.createElement("h5");
          var mainDivElem = document.createElement("div");
          var innerDivElem = document.createElement("div");
          var final = document.querySelector(".allTasks");

          h5.innerHTML = `Task ${j + 1 + serverCount * noOfIters}`;
          outerDiv.appendChild(h5);
          outerDiv.setAttribute("class", "shadow p-3 mb-1  bg-white rounded");
          mainDivElem.setAttribute("id", "progressContainer");
          innerDivElem.setAttribute("class", "progress");
          mainDivElem.appendChild(innerDivElem);
          outerDiv.appendChild(mainDivElem);
          final.appendChild(outerDiv);
          numberOfServersAvailabe = numberOfServersAvailabe - 1;

          // *************************************************************************************
          // *************************************************************************************
          progress();
        } else {
          // Preparing card for showing idle progress bar card **************************************
          // *************************************************************************************
          var mainDivElem = document.createElement("div");
          var outerDiv = document.createElement("div");
          var h5 = document.createElement("h5");
          var p = document.createElement("p");
          var delI = document.createElement("i");
          var innerDivElem = document.createElement("div");
          var final = document.querySelector(".allTasks");

          mainDivElem.setAttribute("id", "progressContainer");

          delI.addEventListener("click", function (e) {
            numberOfTasks = numberOfTasks - 1;
            console.log(e.target.parentElement.parentElement);
            console.log(e.target.parentElement);
            var toBeDeletedTask = e.target.parentElement;
            var taskParentDiv = e.target.parentElement.parentElement;
            taskParentDiv.removeChild(toBeDeletedTask);
          });
          delI.setAttribute("class", "fas fa-trash");
          p.innerText = "Waiting";
          h5.innerHTML = `Task ${j + 1 + serverCount}`;
          outerDiv.appendChild(h5);
          outerDiv.setAttribute(
            "class",
            "shadow p-3 mb-1 bg-white rounded incomplete"
          );
          innerDivElem.setAttribute("class", "progress");
          innerDivElem.innerHTML = "Waiting";
          mainDivElem.appendChild(innerDivElem);
          outerDiv.appendChild(mainDivElem);
          outerDiv.appendChild(p);
          outerDiv.appendChild(delI);

          final.appendChild(outerDiv);
          // *************************************************************************************
          // *************************************************************************************
        }
      }
      taskLeft = numberOfTasks - 2 * serverCount;
    }
    noOfIters = noOfIters + 1;
  }

  // *******************************************************************

  for (let i = 0; i < numberOfTasks; i++) {
    if (numberOfServersAvailabe > 0) {
      // Preparing card for showing progress bar card ****************************************
      // *************************************************************************************
      var outerDiv = document.createElement("div");
      var h5 = document.createElement("h5");
      var mainDivElem = document.createElement("div");
      var innerDivElem = document.createElement("div");
      var final = document.querySelector(".allTasks");

      h5.innerHTML = `Task ${i + 1}`;
      outerDiv.appendChild(h5);
      outerDiv.setAttribute("class", "shadow p-3 mb-1  bg-white rounded");
      mainDivElem.setAttribute("id", "progressContainer");
      innerDivElem.setAttribute("class", "progress");
      mainDivElem.appendChild(innerDivElem);
      outerDiv.appendChild(mainDivElem);
      final.appendChild(outerDiv);
      numberOfServersAvailabe = numberOfServersAvailabe - 1;
      // *************************************************************************************
      // *************************************************************************************

      progress();
    } else {
      // Preparing card for showing idle progress bar card **************************************
      // *************************************************************************************
      var mainDivElem = document.createElement("div");
      var outerDiv = document.createElement("div");
      var h5 = document.createElement("h5");
      var p = document.createElement("p");
      var delI = document.createElement("i");
      var innerDivElem = document.createElement("div");
      var final = document.querySelector(".allTasks");

      mainDivElem.setAttribute("id", "progressContainer");
      delI.addEventListener("click", function (e) {
        numberOfTasks = numberOfTasks - 1;
        console.log(e.target.parentElement.parentElement);
        console.log(e.target.parentElement);
        var toBeDeletedTask = e.target.parentElement;
        var taskParentDiv = e.target.parentElement.parentElement;
        taskParentDiv.removeChild(toBeDeletedTask);
      });
      delI.setAttribute("class", "fas fa-trash");
      p.innerText = "Waiting";
      h5.innerHTML = `Task ${i + 1}`;
      outerDiv.appendChild(h5);
      outerDiv.setAttribute(
        "class",
        "shadow p-3 mb-1 bg-white rounded incomplete"
      );
      innerDivElem.setAttribute("class", "progress");
      innerDivElem.innerHTML = "Waiting";
      mainDivElem.appendChild(innerDivElem);
      outerDiv.appendChild(mainDivElem);
      outerDiv.appendChild(p);
      outerDiv.appendChild(delI);

      final.appendChild(outerDiv);
      // *************************************************************************************
      // *************************************************************************************
    }
  }
}
export { addTask };
