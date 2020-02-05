const parallax = document.querySelector('.parallax');
const items = parallax.children;
// console.log (items);
function moveItemDependsOnScroll(wScroll) {
  Array.from(items).forEach( item =>{
    const divider = item.dataset.speed;
    const strafe = wScroll * divider/15;

    item.style.transform = `translateY(-${strafe}%)`
  });
}

window.addEventListener ('scroll', e => {
  const  wScroll = window.pageYOffset;
  const element = document.querySelector('.welcome');
  const rect = element.getBoundingClientRect();
  if (rect.bottom>0) {
    moveItemDependsOnScroll(wScroll)
  }
})

