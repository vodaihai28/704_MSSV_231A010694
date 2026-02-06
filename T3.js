function filterList() {
    const filter = document.getElementById("search").value.toUpperCase();
    const list = document.getElementById("my-list").getElementsByTagName("li");
    for (let i = 0; i < list.length; i++) {
        const text = list[i].textContent || list[i].innerText;
        list[i].style.display = text.toUpperCase().indexOf(filter) > -1 ? "" : "none";
    }
}