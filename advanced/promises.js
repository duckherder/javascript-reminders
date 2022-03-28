let good_promise = new Promise( (resolve, reject) => {
    setTimeout(() => resolve("ok"), 1000);   // where we do the work that may sleep or wait
  });                                        // when timeout completes the timer will call
                                             // the resolve (gone ok) function

console.log('good_promise created...');
console.log(good_promise);

then_ret = good_promise.then(                                      // only one of these will be called
    value => {console.log(`good_promise: ${value}`)},   // what to do if resolve() called in promise
    error => {console.log('error has occurred!?')   // called if reject() were to be called in promise
  });
console.log('subscribed to promise using then');
console.log(then_ret);                              // then returns a promise
console.log('battering on...');

let bad_promise = new Promise( (resolve, reject) => {
    setTimeout(() => reject("boo"), 1000);
  });

console.log("bad_promise created...");

bad_promise.then(                                      // only one of these will be called
    value => {console.log('should not here!!')},     // what to do if resolve() called in promise
    error => {console.log(`bad_promise: ${error}`)   // called if reject() were to be called in promise
  });

function run_promise_in_function()
{
    let func_promise = new Promise( (resolve, reject) => {
        setTimeout(() => resolve("ok"), 1000);
      }); 
    console.log('func_promise created...');    
    func_promise.then(value => {console.log(`func_promise: ${value}`)});
    console.log('run_promise_in_function done');
}

run_promise_in_function();
console.log('back from run_promise_in_function...');  // promise in function scope

// chaining
let promise1 = new Promise(resolve => resolve('promise 1 resolved'));   // resolves immediately
// promise 2 is created when promise 1 resolves
// promise 2 is immediately resolved with value of return string in the implicit new promise
let promise2 = promise1.then(result => {console.log(result); return 'promise 2 resolved'});
// promise 3 is created when promise 2 resolves
// promise 3 will be resolved on timeout by the explicitly generated promise
let promise3 = promise2.then(result => {
    console.log(result);
    return new Promise(resolve => setTimeout(() => resolve("promise 2 is resolved"), 1000))});
promise3.then(result => console.log(result));
