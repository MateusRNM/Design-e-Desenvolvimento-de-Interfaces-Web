let color = document.URL.split('?')[1].split('&')[1].split('=')[1];
color = decodeURIComponent(color);
document.body.style.backgroundColor = color;
document.getElementById('bg').setAttribute('value', color);