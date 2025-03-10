function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.remove("active");
    });
    document.getElementById(tabId).classList.add("active");

    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
}
