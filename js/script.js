function Scrolldown() {
     window.scroll({top: 180, left: 0,  behavior: 'smooth'});
      }


function onPageLoad() {
    setTimeout(() => {
    Scrolldown()
  }, 100)
    }

window.onload = onPageLoad;








const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".animated")[0].classlist.add("fadeInLeft");
      document.querySelectorAll(".animated")[1].classlist.add("fadeInTop");
      document.querySelectorAll(".animated")[2].classlist.add("fadeInRight");
    }
  })
})

observer.observe(document.querySelector(".container"));
