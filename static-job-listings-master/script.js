
fetch('./data.json')
.then(res => {
    return res.json();
})
.then(data => {
    getJobList(data);
})
.catch(err => {
    console.log(err);
});


