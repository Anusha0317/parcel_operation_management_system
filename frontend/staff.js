const API = "http://54.154.185.222:5000";

async function addParcel() {

  let id = document.getElementById("parcelId").value;
  let name = document.getElementById("parcelName").value;
  let customerName = document.getElementById("customerName").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let date = document.getElementById("date").value;

  if (id === "" || name === "" ||customerName === "" || email === "" || address === "" || date === "") {
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
        status: "New",
        customer_name: customerName,
        email: email,
        address: address,
        date: date
      })
    });

      let data = await res.json();

    if (res.ok) {
        alert(data.message);

        document.getElementById("parcelId").value = "";
        document.getElementById("parcelName").value = "";
        document.getElementById("customerName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("address").value = "";
        document.getElementById("date").value = "";

        loadParcels();
    } else {
        alert(data.error);
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

    let data = await res.json();

    if (res.ok) {
        alert(data.message);
        document.getElementById("updateId").value = "";
        loadParcels();
    } else {
        alert(data.error);
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
 if (!confirm("Are you sure you want to delete this parcel?")) return;

  try {
    let res = await fetch(API + "/delete/" + id, {
      method: "DELETE"
    });
    let data = await res.json();

    if (res.ok) {
        alert(data.message);
        document.getElementById("deleteId").value = "";
        loadParcels();
    } else {
        alert(data.error);
    }

} catch (error) {
    alert("Server not reachable");
}
}

async function searchParcel() {
let id = document.getElementById("searchId").value;

if (id === "") {
    alert("Enter Parcel ID");
    return;
}

try {
    let res = await fetch(API + "/track/" + id);
    let data = await res.json();

    if (res.ok) {
        alert(
            "Parcel ID: " + id +
            "\nName: " + data.name +
            "\nStatus: " + data.status +
            "\nCustomer: " + data.customer_name +
            "\nEmail: " + data.email +
            "\nAddress: " + data.address +
            "\nDate: " + data.date
        );
    } else {
        alert(data.error);
    }

} catch (error) {
    alert("Server not reachable");
}
}    

function resetCreateForm() {
    document.getElementById("parcelId").value = "";
    document.getElementById("parcelName").value = "";
    document.getElementById("customerName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("date").value = "";
}
function resetUpdateForm() {
    document.getElementById("updateId").value = "";
    document.getElementById("updateStatus").value = "In Transit";
}
 function resetDeleteForm() {
    document.getElementById("deleteId").value = "";
}
function resetSearchForm() {
    document.getElementById("searchId").value = "";
}


async function loadParcels() {

  try {
    let res = await fetch(API + "/parcels");
    let data = await res.json();

    let total = data.length;
    let delivered = 0;
    let transit = 0;
    let out = 0;

    for (let i = 0; i < data.length; i++) {

      if (data[i].status === "Delivered") delivered++;
        else if (data[i].status === "In Transit") transit++;
        else if (data[i].status === "Out for Delivery") out++;
    }

    document.getElementById("totalCount").innerText = total;
    document.getElementById("deliveredCount").innerText = delivered;
    document.getElementById("transitCount").innerText = transit;
    document.getElementById("outCount").innerText = out;

} catch (error) {
    console.log("Error loading parcels");
}
}
window.onload = loadParcels;
