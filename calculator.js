const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculatorKeys');
const display = document.querySelector('#displayNumber');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNumber = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;


        if (!action) {
            console.log('number key was pressed');



            if (displayedNumber === '0' ||
                previousKeyType === 'operator' ||
                previousKeyType === 'equal'
            ) {
                display.textContent = keyContent;
                calculator.dataset.previousKeyType = 'numberKey';
            }
            else {
                display.textContent = displayedNumber + keyContent;
                calculator.dataset.previousKeyType = 'numberKey';
            }
        }
        if (action === 'divide' ||
            action === 'multiply' ||
            action === 'subtract' ||
            action === 'add'
        ) {
            console.log('operator key was pressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstNumber = displayedNumber;
            console.log('Stored number is ', displayedNumber);
            calculator.dataset.operator = action;
        }
        if (action === 'decimal') {
            console.log('decimal key was pressed');
            display.textContent = displayedNumber + '.';
        }

        if (action === 'delete') {
            console.log('delete key was pressed');
            display.textContent = '0';
        }
        if (action === 'calculate') {
            console.log('equal key was pressed')
            const firstNumber = calculator.dataset.firstNumber;
            const secondNumber = displayedNumber;
            const operator = calculator.dataset.operator;
            function calculate(firstNumber, operator, secondNumber) {
                let result;
                if (operator === 'add') {
                    result = parseFloat(firstNumber) + parseFloat(secondNumber);
                }
                else if (operator === 'subtract') {
                    result = parseFloat(firstNumber) - parseFloat(secondNumber);
                }

                else if (operator === 'divide') {
                    result = parseFloat(firstNumber) / parseFloat(secondNumber);
                }

                else if (operator === 'multiply') {
                    result = parseFloat(firstNumber) * parseFloat(secondNumber);
                }
                return result;
            }
            display.textContent = calculate(firstNumber, operator, secondNumber);
            console.log('Result is ', calculate(firstNumber, operator, secondNumber));
        }




    }
})