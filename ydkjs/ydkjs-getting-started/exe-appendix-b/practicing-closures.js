// The range(..) function takes a number as its first argument, representing the first number in a desired range of numbers. The second argument is also a number representing the end of the desired range (inclusive). If the second argument is omitted, then another function should be returned that expects that argument.

function range(start,end) {
    // check if the second number is present
    if (end != undefined) {
        // if both numbers given - generate a sequence from start to end
            // if end < start - return an empty array
            generateSequence(end);
    } else {
        // if only start present - return a function that needs an end as a param and returns a sequences from start to end
        return generateSequence;
    }
        // I already can find similarity, a function that generates a sequence
        function generateSequence(end) {
            let sequence = []
            if (start == end) {
                sequence.push(start);
            } else if (start > end) {
            } else {
                for (let i = start; i < end + 1; i++) {
                    sequence.push(i);
                }
            }
            console.log(sequence)
            return sequence;
        }
        
}

range(3,3);    // [3]
range(3,8);    // [3,4,5,6,7,8]
range(3,0);    // []

var start3 = range(3);
var start4 = range(4);

start3(3);     // [3]
start3(8);     // [3,4,5,6,7,8]
start3(0);     // []

start4(6);     // [4,5,6]