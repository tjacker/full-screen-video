(function () {
  const initOpacityInput = function () {
    const opacityInput = document.getElementById("opacity");
    const root = document.documentElement;

    opacityInput.addEventListener("input", function () {
      root.style.setProperty("--overlay-opacity", this.value);
    });
  };

  const initColorInput = function () {
    const colorInput = document.getElementById("color");
    const root = document.documentElement;

    colorInput.addEventListener("input", function () {
      root.style.setProperty("--overlay-color", this.value);
    });
  };

  initOpacityInput();
  initColorInput();
})();

// TODO: Save input preferences to local storage
