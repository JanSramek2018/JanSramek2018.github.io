const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculatorKeys');
const display = document.querySelector('#displayNumber');
var decimalKeyPressed = 0;


keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNumber = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        if (!action) {
            console.log('number key was pressed');

            if (previousKeyType === `calculate`) {
                calculator.dataset.firstNumber = ``;
                calculator.dataset.secondNumber = ``;
                calculator.dataset.previousSecondNumber = ``;
                calculator.dataset.operator = ``;
                calculator.dataset.previousKeyType = 'delete';
            }

            if (displayedNumber === '0' ||
                previousKeyType === 'operator' ||
                previousKeyType === 'calculate'
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
            decimalKeyPressed = 0;
            console.log(`Is decimal active? `, decimalKeyPressed);




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

            if (firstNumber &&
                operator &&
                previousKeyType !== `operator` &&
                previousKeyType !== `calculate`
            ) {
                const calculationNumber = calculate(firstNumber, operator, secondNumber);
                display.textContent = calculationNumber;
                calculator.dataset.firstNumber = calculationNumber;
                console.log(`AAAA`);
            }
            else {
                calculator.dataset.firstNumber = displayedNumber
                console.log(`BBBB`);
            }
            calculator.dataset.operator = action;
            calculator.dataset.previousKeyType = 'operator';
            console.log('Stored number is ', displayedNumber);
        }
        if (action === `decimal`) {
            console.log('decimal key was pressed');
            console.log(`Is decimal active? `, decimalKeyPressed);
            if (decimalKeyPressed === 0) {

                if (previousKeyType === `operator` ||
                    previousKeyType === `calculate`
                ) {
                    display.textContent = `0` + '.';

                    decimalKeyPressed = 1;
                }
                else {
                    display.textContent = displayedNumber + '.';
                    decimalKeyPressed = 1;
                }
                calculator.dataset.previousKeyType = 'decimal';
            }
            console.log(`Is decimal active? `, decimalKeyPressed);
        }

        if (action === 'delete') {
            console.log('delete key was pressed');
            display.textContent = '0';
            decimalKeyPressed = 0;
            console.log(`Is decimal active? `, decimalKeyPressed);
            calculator.dataset.firstNumber = ``;
            calculator.dataset.secondNumber = ``;
            calculator.dataset.previousSecondNumber = ``;
            calculator.dataset.operator = ``;
            calculator.dataset.previousKeyType = 'delete';
        }
        if (action === 'calculate') {
            console.log('equal key was pressed');
            decimalKeyPressed = 0;
            console.log(`Is decimal active? `, decimalKeyPressed);
            let firstNumber = calculator.dataset.firstNumber;
            let secondNumber = displayedNumber;
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
            if (firstNumber) {
                if (previousKeyType === `calculate`) {
                    firstNumber = displayedNumber;
                    secondNumber = calculator.dataset.previousSecondNumber
                }
                display.textContent = calculate(firstNumber, operator, secondNumber);
                console.log('Result is ', calculate(firstNumber, operator, secondNumber));
            }
            else {
                display.textContent = `0`;
            }
            calculator.dataset.previousSecondNumber = secondNumber;
            calculator.dataset.previousKeyType = 'calculate';
        }
    }




}
)