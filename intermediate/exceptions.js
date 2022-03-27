function do_stuff(code){
    try { // statements to try
        if (!code) {
            throw "Invalid code!"
        }
        return true;
    }
    catch (e) {
        console.log("exception thrown!");
        console.error(e);       // error preferred in catch statement instead of log
    }
    finally {
        console.log("do tidy up stuff from try!");   // called irrespective of exception
        return false;           // this return will always override any others
    }
}

console.log(do_stuff(0));
console.log(do_stuff(1));
