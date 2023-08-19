let loaded = 0;
function showMenu(menuId)  {
    let input = document.getElementById(menuId);
    let container = document.getElementById('image_container');
    container.addEventListener("click", function (event) {
        if (loaded == 0) {
            const cursorX = event.clientX;
            const cursorY = event.clientY;
            input.style.top = cursorY + "px";
            input.style.left = cursorX + "px";
            loaded = 1;
        }
      })
    input.style.display="block";
    disableRefresh();
    }

function hideMenu(menuId) {
    document.getElementById(menuId).style.display="none";
    loaded = 0;
}

function disableRefresh() {
    let input = document.getElementById('image_container');
    input.addEventListener("click", (event) => {
      event.preventDefault();
    })
}