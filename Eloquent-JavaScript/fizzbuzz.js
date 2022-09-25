for (let i = 1; i < 101; i++) {
    let outputMessage = "";
    if (i % 3 == 0) outputMessage += "Fizz";
    if (i % 5 == 0) outputMessage += "Buzz";
    if (outputMessage == "") outputMessage  = i;

    console.log(outputMessage);
}