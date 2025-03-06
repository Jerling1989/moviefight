const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'c010a104',
      s: 'avengers'
    }
  });

  console.log(response.data);
};

fetchData();