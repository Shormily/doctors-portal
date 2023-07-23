const issueToken = (email) => {
    if (!email) {
        return '';
    }
    fetch(`http://localhost:5000/jwt?email=${email}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        console.log(data.accessToken)
        return data.accessToken;
      }
    })
    .catch(err => {
        console.log(err.message)
        return '';
    })
}

export default issueToken;