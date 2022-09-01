let factorial = (function hideCache() {
    let cache = {};

    return factorial;

    function factorial(num) {
    if (num < 2) {
        return 1;
    }
    if (!(num in cache)) {
        cache[num] = num * factorial(num - 1);
    }
    return cache[num];
}
})();

let factOfFour = factorial(5);

console.log(factOfFour);