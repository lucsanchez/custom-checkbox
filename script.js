const customCheckbox = document.querySelector(".custom-checkbox-wrapper");
const nativeCheckbox = document.querySelector(".native-checkbox");

nativeCheckbox.addEventListener("change", () => {
    customCheckbox.setAttribute("aria-checked", nativeCheckbox.checked);
});


customCheckbox.addEventListener("click", () => {
    toggleCheckbox(customCheckbox);
    nativeCheckbox.checked = customCheckbox.getAttribute("aria-checked") === "true";
});


function toggleCheckbox(checkboxWrapper) {
    const isChecked = checkboxWrapper.getAttribute("aria-checked") === "true";
    checkboxWrapper.setAttribute("aria-checked", !isChecked);
} 
