new Promise((res, rej) => {
    rej("err");
})
    .then(
        data => {
            console.log(1, data);
        },
        err => {
            console.log(2, err);
            return Promise.reject(2222)
        }
    )
    .then(
        data => {
            console.log(3, data);
        },
        err => {
            console.log(4, err);
        }
    );
