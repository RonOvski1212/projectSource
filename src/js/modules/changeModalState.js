import checkNumInputs from "./checkNuminputs";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelectorAll("#width"),
    windowHeight = document.querySelectorAll("#height"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox");

  checkNumInputs("#width");
  checkNumInputs("#height");

  function bindActionToElements(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        if (elem.length > 1) {
          state[prop] = i;
        } else {
          state[prop] = item.value;
        }

        console.log(state);
      });
    });
  }

  bindActionToElements("click", windowForm, "form");
  bindActionToElements("input", windowWidth, "width");
  bindActionToElements("input", windowHeight, "height");
};

export default changeModalState;
