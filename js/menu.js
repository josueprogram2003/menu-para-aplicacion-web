let submenu = document.querySelectorAll("#sub-menu");
for (const iterator of submenu) {
  iterator.addEventListener("click", () => {
    iterator.classList.toggle("voltear");
    let height = 0;
    let menu = iterator.nextElementSibling;
    if (menu.clientHeight == "0") {
      height = menu.scrollHeight;
    }

    menu.style.height = `${height}px`;
  });
}
