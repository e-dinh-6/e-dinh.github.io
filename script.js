var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}




// Set things up

    document.addEventListener("DOMContentLoaded", function () {
      const meter = document.querySelector('.meter-1');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            meter.classList.add('animated');
            //observer.unobserve(entry.target);
          }else {
            meter.classList.remove('animated'); // Remove the 'animated' class when out of the viewport
          }
        });
      });

      observer.observe(document.querySelector('.progress-svg'));
    });
