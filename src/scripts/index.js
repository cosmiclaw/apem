/*=============================================
=            Slider                           =
=============================================*/

const buttons = document.querySelectorAll(".slider-container .slider-button");
buttons.forEach((button, i) => (button.onclick = () => slide(i)));

function slide(right) {
  const container = document.querySelector(".slider-container");
  const slider = document.querySelector(".slider-container ul");
  const items = document.querySelectorAll(".slider-container li");
  const featured = document.querySelector(".slider-featured");

  const featuredIndex = [...items].indexOf(featured);

  const move = right ? 1 : -1;

  if (
    (!right && !featuredIndex) ||
    (right && featuredIndex === items.length - 1)
  )
    return;

  const nextIndex = featuredIndex + move;
  const nextItem = items[nextIndex];

  featured.classList.remove("slider-featured");
  featured.children[0].classList.remove("no-bg");

  nextItem.classList.add("slider-featured");
  nextItem.children[0].classList.add("no-bg");

  const { width: containerSize } = container.getBoundingClientRect();

  const itemSize = containerSize / 3; // Display only 3 items
  const itemPosition = itemSize * (nextIndex + 1); // Current position

  const position = containerSize - itemPosition - itemSize;

  function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  const viewportWidth = getWidth();

  if (viewportWidth > 768) {
    slider.style.transform = `translateX(${position}px)`;
  }
}

/*=====  End of Slider   ======*/

/*=============================================
=            Mobile Navigation Menu           =
=============================================*/

const mobile_menu_button = document.querySelector(".menu-icon");
const mobile_close_button = document.querySelector(".close-menu");
const mobile_menu = document.querySelector(".mobile");

function toggleMenu() {
  mobile_menu.classList.toggle("active");
}

mobile_menu_button.addEventListener("click", (e) => {
  e.preventDefault();

  toggleMenu();
});

mobile_close_button.addEventListener("click", (e) => {
  e.preventDefault();

  toggleMenu();
});
/*=====  End of Mobile Navigation Menu  ======*/
