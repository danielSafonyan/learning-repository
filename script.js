const createFunction = true;

if (createFunction) {
    function createAnotherFunction() {
        function sayHi() {
            console.log("Hi!");
        }
        sayHi()
    }
}

createAnotherFunction();

