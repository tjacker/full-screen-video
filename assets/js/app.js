(function () {
  const handleInputEvent = function (input, cssVariable) {
    const inputElement = document.getElementById(input);
    const root = document.documentElement;

    inputElement.addEventListener("input", function () {
      root.style.setProperty(cssVariable, this.value);
    });
  };

  handleInputEvent("opacity", "--overlay-opacity");
  handleInputEvent("color", "--overlay-color");
})();

// TODO: Save input preferences to local storage
