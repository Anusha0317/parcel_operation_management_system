function addParcel() {
    let name =
    document.getElementById("parcelName").ariaValueMax;
    let status =
    document.getElementById("status").ariaValueMax;
    let li =
    document.createElement("li");li.textContent = name + " - " +status;
    
    document.getElementById("parcelList").appendChild(li);
    console.log("Parecel added successfully");
}
