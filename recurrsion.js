function callerTunes(n) {
    for (var i = n; i > 0; i--) {
        console.log(i);
    }
    console.log("Hurrayy");
}
function callerTunesRecursive(n) {
    if (n <= 0) {
        console.log("Hurrayy");
        return;
    }
    console.log(n);
    callerTunesRecursive(n - 1);
}
function sumNumsRecursive(n, total) {
    if (total === void 0) { total = 0; }
    if (n <= 0) {
        return total;
    }
    return sumNumsRecursive(n - 1, total + n);
}
console.log(sumNumsRecursive(5004));
