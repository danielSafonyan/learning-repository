// If you color all the scopes (including the global scope!) different colors, you need at least six colors. Make sure to add a code comment labeling each scope with its color.

// BONUS: identify any implied scopes your code may have.

// Each scope has at least one identifier.

// Contains at least two function scopes and at least two block scopes.

// At least one variable from an outer scope must be shadowed by a nested scope variable (see Chapter 3).

// At least one variable reference must resolve to a variable declaration at least two levels higher in the scope chain.

// global scope - red
var message = "I am Global ID";

function printMessage() {
    // function scope
    var successMessage = "You did it!";
    console.log(message);
    if (message == "I am Global ID")  {
        confirmation();
    }
    

    function confirmation() {
        let message = 'If you see this - global message variable was logged.';
        console.log(successMessage, message);
    }
}