// Keeping count for servers
var serverCount = 0;

function addServer() {
  if (serverCount < 10) {
    serverCount = serverCount + 1;
    var tableRow = document.createElement("tr");
    var tableDataName = document.createElement("td");
    var tableDataCount = document.createElement("td");
    var tableDataStatus = document.createElement("td");
    // var tableDataAction = document.createElement("td");
    // var button = document.createElement("button");
    // button.setAttribute("class", `btn btn-danger btn-${serverCount}`);
    // button.innerHTML = "Delete";
    tableDataStatus.innerHTML = "running";
    tableDataName.innerHTML = `Server ${serverCount}`;
    tableDataCount.innerHTML = `${serverCount}`;
    // tableDataAction.appendChild(button);
    tableRow.appendChild(tableDataCount);
    tableRow.appendChild(tableDataName);
    tableRow.appendChild(tableDataStatus);
    // tableRow.appendChild(tableDataAction);

    // button.addEventListener("click", function () {
    //   const deleteRow = button.parentElement.parentElement;
    //   var parentElement = document.getElementsByTagName("tbody")[0];
    //   var removed = parentElement.removeChild(deleteRow);
    //   console.log(removed);
    // });

    document.getElementsByTagName("tbody")[0].appendChild(tableRow);
  } else {
    alert("Maximum number of server is 10");
  }
}

function removeServer() {
  var parent = document.getElementsByTagName("tbody")[0];
  var deleteRow = document
    .getElementsByTagName("tbody")[0]
    .getElementsByTagName("tr")[serverCount - 1];
  var removed = parent.removeChild(deleteRow);
  serverCount = serverCount - 1;
}

export { addServer, serverCount, removeServer };
