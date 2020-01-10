document.getElementById("burger").onclick = function() {
    openCloseMenu()
};

function openCloseMenu(){
    document.getElementById('burger').classList.toggle("open_close");
    document.getElementById('toolbar').classList.toggle("open_close");
}
