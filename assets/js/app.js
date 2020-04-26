(function () {
  const init = function () {
    const opacityInput = document.getElementById("opacity");
    const root = document.documentElement;

    opacityInput.addEventListener("input", function () {
      root.style.setProperty("--overlay-opacity", this.value);
    });
  };

  init();
})();

// TODO: Add color input and save input preferences to local storage
