export default {
    toggleMenu(state) {
        state.showMenu = !state.showMenu;
    },
    closeMenu(state) {
        state.showMenu = false;
    },
    switchPage(state, index) {
        if (state.pageIndex == index) {
            state.showPage = !state.showPage;
        }
        state.pageIndex = index;
    }
}