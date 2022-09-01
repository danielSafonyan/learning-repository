function writeToClosure() {
    let myClosedVariable = 10;
    return function() {
        myClosedVariable = 20;
        console.log(myClosedVariable);
    }
}

writeToClosure()();