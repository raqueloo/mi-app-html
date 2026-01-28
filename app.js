* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

/* MENÚ */
header {
  background-color: #1f2933;
  padding: 10px 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
}

.menu {
  list-style: none;
  display: flex;
  gap: 20px;
}

.menu a {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
}

.menu a:hover {
  text-decoration: underline;
}

/* CARRUSEL */
.carousel {
  position: relative;
  max-width: 800px;
  margin: 40px auto;
  overflow: hidden;
}  

.carousel-images img {
  width: 100%;
  display: none;
  border-radius: 8px;
}

.carousel-images img.active {
  display: block;
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0,0,0,0.6);
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 22px;
  cursor: pointer;
  border-radius: 50%;
}

.prev { left: 10px; }
.next { right: 10px; }

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}
