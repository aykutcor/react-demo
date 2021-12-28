const actions = {
  CHANGE_CURRENT: "CHANGE_CURRENT",
  CLEAR_MENU: 'CLEAR_MENU',
  changeCurrent: (current) => ({
    type: actions.CHANGE_CURRENT,
    current,
  }),
  clearMenu: () => ({ type: actions.CLEAR_MENU }),
};
export default actions;
