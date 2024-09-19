async function showDetails() {
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';
    const apiLink = 'https://api.github.com/users/fahadqazi001';
    try {
      const response = await fetch(apiLink);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      document.getElementById('login-name').innerText = `Login: ${data.login}`;
      document.getElementById('followers-count').innerText = `Followers: ${data.followers}`;
    } catch (error) {
      document.getElementById('login-name').innerText = 'Login: Error fetching data';
      document.getElementById('followers-count').innerText = 'Followers: Error fetching data';
    } finally {
      spinner.style.display = 'none';
    }
  }