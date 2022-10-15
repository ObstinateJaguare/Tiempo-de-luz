

  const hola = ()=>{
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users',
        responseType: 'json'
      })
        .then(function (response) {
          console.log(response.data);
        });
  }

  hola();