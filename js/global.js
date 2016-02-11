if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/2048/service-worker.js').then(function(reg) {
    console.log('Registration succeeded.');
    console.dir(reg);
  }).catch(function(error) {
    console.log('Registration failed with ' + error);
    console.dir(error);
  });
}

 