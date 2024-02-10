var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




  // bar 

  document.getElementById("bar").addEventListener("click",()=>{

                    let menu=document.getElementById("menu");

                    if(menu.style.right==="-100%"){

                        menu.style.right="0%"
                    }else{
                        menu.style.right="-100%"
                    }

  })