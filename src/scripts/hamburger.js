function hamburgerMenu() {
	const menu = document.querySelector(".hamburger");
  const btn_open = document.querySelector(".btn-hamb");
  const body_element = document.querySelector("body");
    
  btn_open.addEventListener("click", e => {
    e.preventDefault();
    menuOpen();
  });

	const btn_close = document.querySelector(".btn-hamb--cross");
  
  btn_close.addEventListener("click", e => {
    e.preventDefault();
  	menuClose();
	});

	function menuOpen() {
    window.scroll(0,0);
    body_element.style.overflow = "hidden";
    menu.classList.toggle("hamburger--visible");
    
	}

	function menuClose() {
    body_element.style.overflow = "auto";
    menu.classList.toggle("hamburger--visible");
	}
}
hamburgerMenu();