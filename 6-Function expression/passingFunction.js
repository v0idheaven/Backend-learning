function fun() {
    console.log("fun called");
}

function gun(fn) {
    console.log("inside gun");
    fn();
    console.log("leaving gun");
}

gun(function logger() {
    console.trace();
    console.log("new function passed");
});
//here gun function give error if we run that
// gun(fun);