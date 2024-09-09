function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        let expression = document.getElementById('display').value;

        // Handle square root separately
        if (expression.includes('sqrt(')) {
            expression = expression.replace(/sqrt\(([^)]+)\)/g, (match, p1) => {
                return Math.sqrt(eval(p1));
            });
        }

        // Handle exponentiation
        expression = expression.replace(/\^/g, '**');

        // Evaluate the expression
        let result = eval(expression);

        // Show result in display
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
