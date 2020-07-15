export default {
    toggleMenu(state) {
        state.showMenu = !state.showMenu;
    },
    closeMenu(state) {
        state.showMenu = false;
    },
    openMenu(state) {
        state.showMenu = true;
    },
    switchPage(state, index) {
        state.pageIndex = index;
    }
}