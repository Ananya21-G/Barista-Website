function showMenu(menuType) {
    // Hide all menus
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => {
        menu.style.display = 'none';
    });

    // Show the selected menu
    const selectedMenu = document.getElementById(menuType);
    selectedMenu.style.display = 'block';
}
