(function () {
  const handleInputEvent = function (input, cssVariable) {
    const inputElement = document.getElementById(input);
    const root = document.documentElement;

    // Set css variable from local storage if available
    if (localStorage.getItem(input)) {
      const storageValue = localStorage.getItem(input);

      root.style.setProperty(cssVariable, storageValue);
      inputElement.value = storageValue;
    }

    // Add event listener to change css variable and save to local storage
    inputElement.addEventListener("input", function () {
      root.style.setProperty(cssVariable, this.value);
      localStorage.setItem(input, this.value);
    });
  };

  handleInputEvent("opacity", "--overlay-opacity");
  handleInputEvent("color", "--overlay-color");
})();
