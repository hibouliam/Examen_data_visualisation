document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counterDisplay');
    const increaseButton = document.getElementById('increaseButton');
    const decreaseButton = document.getElementById('decreaseButton');
    const resetButton = document.getElementById('resetButton');

    let counterValue = 0;
    const maxDigits = 6;

    function updateCounterDisplay() {
        const digits = String(counterValue).padStart(maxDigits, '0').split('');
        const digitElements = counterDisplay.querySelectorAll('.digit');
        digitElements.forEach((digitElement, index) => {
            digitElement.textContent = digits[index];
        });
    }

    function increaseCounter() {
        counterValue += 1;
        updateCounterDisplay();
    }

    function decreaseCounter() {
        if (counterValue > 0) {
            counterValue -= 1;
            updateCounterDisplay();
        }
    }

    function resetCounter() {
        counterValue = 0;
        updateCounterDisplay();
    }

    increaseButton.addEventListener('click', increaseCounter);
    decreaseButton.addEventListener('click', decreaseCounter);
    resetButton.addEventListener('click', resetCounter);

    updateCounterDisplay();
});
