function addParcel() {
    let name =
    document.getElementById("parcelName").value;
    let status =
    document.getElementById("status").value;
    let li =
    document.createElement("li");
    li.textContent = name + " - " +status;
    
    document.getElementById("parcelList").appendChild(li);
    console.log("Parcel added successfully");
}
