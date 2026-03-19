const API = "http://127.0.0.1:5000";

async function addParcel() {
  const parcel_id = document.getElementById("pid").value;
  const name = document.getElementById("name").value;
  const status = document.getElementById("status").value;

  await fetch(API + "/add", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ parcel_id, name, status })
  });

  alert("Added successfully");
  loadParcels();
}


async function loadParcels() {
  const res = await fetch(API + "/parcels");
  const data = await res.json();

  let output = "";

  data.forEach(p => {
    output += `
      <div>
        ${p.parcel_id} - ${p.name} - ${p.status}
        <button onclick="deleteParcel(${p.id})">Delete</button>
      </div>
    `;
  });

  document.getElementById("list").innerHTML = output;
}


async function deleteParcel(id) {
  await fetch(API + "/delete/" + id, { method: "DELETE" });
  loadParcels();
}


async function track() {
  const id = document.getElementById("trackId").value;

  const res = await fetch(API + "/track/" + id);
  const data = await res.json();

  if (data.status) {
    document.getElementById("result").innerHTML =
      "Status: " + data.status;
  } else {
    document.getElementById("result").innerHTML =
      "Parcel not found";
  }
}


if (document.getElementById("list")) {
  loadParcels();
}