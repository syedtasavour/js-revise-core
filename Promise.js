new Promise((res, rej) => {
  setTimeout(() => {
    console.log("async task");
    res();
  }, 1000);
})
  .then(() => {
    console.log("Promise Consumed");
  })
  .catch((e) => {
    console.log(e);
  });

const promiseOne = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("async task");
    res({
      username: "name",
      email: "email@example.com",
    });
  }, 1000);
});

promiseOne
  .then((res) => {
    console.log(res);
  })

  const promisetwo = new Promise((res, rej) => {
    setTimeout(() => {
      let err = true
      if(!err){
        res({ username: 'name', email: 'email@example.com' })
      }else{
        rej("error")
        
      }
    }, 1000);
  });
  
  promisetwo
    .then((res) => {
      console.log(res);
    }).catch(function(e){
      console.log(e);
      
    })
  