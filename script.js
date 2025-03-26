function generateCard() {
    var name = document.getElementById("nameInput").value;
    if (name.trim() === "") {
        alert("يرجى إدخال اسمك!");
        return;
    }
    document.getElementById("nameText").innerText = name;
    document.getElementById("cardContainer").style.display = "block";
}