const logout = async () => {
  //We are fetching that api route that we looked at and using the POST method. This is how the data is used on the html pages that is not associated directly with handlebars to begin with
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};
//adding an eventlistener on that /logout link and logout button
document.querySelector('#logout').addEventListener('click', logout);
