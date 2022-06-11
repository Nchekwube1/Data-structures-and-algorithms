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
callerTunesRecursive(10);
