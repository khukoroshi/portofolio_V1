
function loadHTML(id, file) {
  return fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      document.dispatchEvent(new CustomEvent("htmlLoaded", { detail: id }));
    })
    .catch(err => console.error("Load error:", err));
}

// Panggil fungsi untuk load partials
loadHTML("header", "includes/header.html");
loadHTML("home", "includes/hero.html");
loadHTML("about", "includes/about.html");
loadHTML("experient", "includes/experient.html");
loadHTML("footer", "includes/footer.html");