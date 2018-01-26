var somePromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('Hey. It Worked!');
        for(i=0;i<100000;i++) {
            console.log(i);
        }
    },2500);
});

somePromise.then((message) => {
    console.log('Success: ',message);
},(errorMessage) => {
    console.log('Error: ',errorMessage);
});