
        $(window).on("scroll", function(){
            if($(window).scrollTop()){
                $('#nav').addClass('white');
                $('#logo').attr("src", "main_logo_black.png");
                $('#search').attr("src", "search-black.png");
                $('#totop').addClass('top');
            }else{
                $('#nav').removeClass('white');
                $('#logo').attr("src", "main_logo.png");
                $('#search').attr("src", "search.png");
                $('#totop').removeClass('top');
            }
        })

        var slideIndex = 1;

        showImage(slideIndex);

        function plusIndex(n) {
            showImage(slideIndex+=n)
        }

        function currentSlide(n) {
            showImage(slideIndex = n);
            
        }

        function showImage(n){
            var slide = document.getElementsByClassName("banner");
            var dots = document.getElementsByClassName("dots");

            if (n>slide.length) {
                slideIndex=1;
            }
            if(n<1){
                slideIndex = slide.length;
            }
            for (var i = 0; i < slide.length; i++) {
                slide[i].style.display = "none";
                
            }
            slide[slideIndex-1].style.display = "block";

            for (var i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" activ", "");
                
            }

            dots[slideIndex-1].className += " activ";

        }
        autoSlide();

        function autoSlide() {

            var slide = document.getElementsByClassName("banner");
            var dots = document.getElementsByClassName("dots");

            for (var i = 0; i < slide.length; i++) {
                slide[i].style.display = "none";
                
            }
            if(slideIndex > slide.length){
                slideIndex=1;
            }
            slide[slideIndex-1].style.display = "block";
            slideIndex++;

            for (var i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" activ", "");
                
            }
            if(slideIndex > dots.length){
                slideIndex=1;
            }
            
            dots[slideIndex-1].className += " activ";
            slideIndex++;

            setTimeout(autoSlide, 4000);
        }


        let sortBtn = document.querySelector(".menuItems").children;
        let sortItem = document.querySelector(".blockdisplay").children;

        for (let i = 0; i< sortBtn.length; i++) {
            sortBtn[i].addEventListener('click', function () {
                for (let j = 0; j < sortBtn.length; j++) {
                    sortBtn[j].classList.remove('current');
                    
                }
                this.classList.add('current')

                let targetData = this.getAttribute('data-target');
                for (let k = 0; k < sortItem.length; k++) {
                    sortItem[k].classList.remove('activeee');
                    sortItem[k].classList.add('delete');
                    
                    if (sortItem[k].getAttribute('data-item') == targetData || targetData == "all") {
                        sortItem[k].classList.remove('delete');
                        sortItem[k].classList.add('activeee');
                    }
                }
            })
           
        }

        document.getElementById("body").onscroll = function mf() {
            var scrolltoTop = document.scrollingElement.scrollTop;
            var target = document.getElementById("offer");
            var target1 = document.getElementById("package1");
            var target2 = document.getElementById("blog");
            var target3 = document.getElementById("footer");
            var factor = 0.5;
            var xvalue = "center";
            var yvalue = scrolltoTop * factor;
            target.style.backgroundPosition = xvalue + " " + yvalue + "px";
            target1.style.backgroundPosition = xvalue + " " + yvalue + "px";
            target2.style.backgroundPosition = xvalue + " " + yvalue + "px";
            target3.style.backgroundPosition = xvalue + " " + yvalue + "px";
        }

        $(".h").click(function(){
            $(".h").css("color","")
            $(this).css("color","red")
        });



       