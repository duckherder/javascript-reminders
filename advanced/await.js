function resolveAfterNSeconds(N) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`${N} second async delay complete`)
        resolve('done');
      }, N*1000);
    });
}

// sync function that returns a promise but creates multiple
function createSyncMultiplePromises() {
    const promise1 = resolveAfterNSeconds(1);
    const promise2 = resolveAfterNSeconds(2);
    return promise1;    // if not explicit return then undefined returned
}

// async function that creates multiple promises with no return
// async is superfluous as not awaiting in here, just creating promises
// so this code will execute synchronously even though marked async
async function createAsyncMultiplePromises() {
    const promise1 = resolveAfterNSeconds(1);
    const promise2 = resolveAfterNSeconds(2);
    // effectively return new Promise.resolve(undefined)
    return promise2; // will mean both promises will be resolved by time an await completes
    // return Promise.all([promise1, promise2]); //means you can await on all being resolved
}

async function my_do_function1()         // async functions always return a promise
{
    console.log('About to wait...');
    await resolveAfterNSeconds(1);      // can only await in async funcs or top level
    console.log('Finished waiting');
}

async function my_do_function2()         // async functions always return a promise
{
    console.log('creating multiple promises in async function');
    const promise = createAsyncMultiplePromises();     // can only await on promises
    console.log('createAsyncMultiplePromises returns ', promise);
    const retval = await promise;
    console.log('done awaiting for async promises with retval = ', retval);
    return 'some string';   // if not explicitly returning a promise an async function
}                           // will implicitly wrap it in one i.e. return Promise.resolve('some string')

async function my_do_function3()         // async functions always return a promise
{
    console.log('creating multiple promises in sync function');
    const promise = createSyncMultiplePromises();
    await promise;                      // can only await on promises
    console.log('done awaiting returned promise but....');
}

async function do_all()
{
    // without awaits all 3 functions will start asynchronously
    await my_do_function1();    // without await here we would move onto to function2
    retval = await my_do_function2();    // as soon as the await in function1 was hit. the await
    await my_do_function3();    // seems similar in this respective to a yield in Python generators
    console.log('return from function2:', retval);
}

do_all();
