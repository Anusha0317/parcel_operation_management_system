function addParcel() {

  let id = document.getElementById("pid").value;
  let name = document.getElementById("name").value;

  if (id === "" || name === "") {
    alert("Please enter all details");
    return;
  }

  
  let div = document.createElement("div");

  
  div.innerHTML = id + " - " + name + " - New";

  
  div.setAttribute("data-id", id);

  document.getElementById("list").appendChild(div);

  alert("Parcel added successfully");

  
  document.getElementById("pid").value = "";
  document.getElementById("name").value = "";
}



function updateParcel() {

  let id = document.getElementById("updateId").value;
  let status = document.getElementById("updateStatus").value;

  let list = document.getElementById("list");
  let items = list.children;

  for (let i = 0; i < items.length; i++) {

    if (items[i].getAttribute("data-id") == id) {

      let text = items[i].innerHTML.split(" - ");

      items[i].innerHTML = text[0] + " - " + text[1] + " - " + status;

      alert("Status updated successfully");
      return;
    }
  }

  alert("Parcel not found");
}