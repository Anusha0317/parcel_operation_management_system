const API = "http://127.0.0.1:5000";

async function addParcel() {

  let id = document.getElementById("pid").value;
  let name = document.getElementById("name").value;

  if (id === "" || name === "") {
    alert("Please enter all details");
    return;
  }

  try {
    let res = await fetch(API + "/add", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        parcel_id: id,
        name: name,
        status: "New"
      })
    });

    if (res.ok) {
      alert("Parcel added successfully");
    } else {
      alert("Error adding parcel");
    }

  } catch (error) {
    alert("Server not reachable");
  }
}

async function updateParcel() {

  let id = document.getElementById("updateId").value;
  let status = document.getElementById("updateStatus").value;

  if (id === "") {
    alert("Enter Parcel ID");
    return;
  }

  try {
    let res = await fetch(API + "/update/" + id, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ status: status })
    });

    if (res.ok) {
      alert("Status updated successfully");
    } else {
      alert("Error updating status");
    }

  } catch (error) {
    alert("Server not reachable");
  }
}

async function deleteParcel() {

  let id = document.getElementById("deleteId").value;

  if (id === "") {
    alert("Enter Parcel ID");
    return;
  }

  try {
    let res = await fetch(API + "/delete/" + id, {
      method: "DELETE"
    });

    if (res.ok) {
      alert("Parcel deleted successfully");
    } else {
      alert("Error deleting parcel");
    }

  } catch (error) {
    alert("Server not reachable");
  }
}