fetch("https://serene-depths-70383.herokuapp.com/login", {
  // login
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: email, password: pwd }),
})
  .then((data) => {
    if (data.ok) return data.json();
    throw new Error(data.status);
  })
  .catch((e) => {
    console.log("Log in failed. Check your email/password and try again.");
  });

const fetchUser = () => {
  fetch("https://serene-depths-70383.herokuapp.com/user/" + uid + "/", {
    // get user by uid
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  })
    .then((response) => {
      if (response.ok) return response.json();
      else throw new Error(response.status);
    })
    .catch((res) => {
      if (res.message === "404") navigate("/notfound");
      else navigate("/logout");
    });
};

fetchUser();

fetch("https://serene-depths-70383.herokuapp.com/note/" + id + "/", {
  // delete post
  method: "DELETE",
  headers: { Authorization: "Bearer " + localStorage.getItem("token") },
})
  .then((res) => {
    if (res.status === 204) return res.status;
    else throw new Error(res.status);
  })
  .catch((res) => {
    // console.log(res.message);
    if (res.message === "404") navigate("/notfound");
    else navigate("/logout");
  });
