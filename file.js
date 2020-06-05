 var i = 0;
        var txt = 'This is a tribute page to some famous cricketers.They done a lot for their countries.They are no less than legends and even god for their fans.I make this tribute page to pay some respect towards them.';
        var speed = 100;

        function typeWriter() {

            if (i < txt.length) {
                document.getElementById("demo").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        var index = -1;
        show();

        function show() {
            var slides = document.getElementsByClassName("slide");
            var dots = document.getElementsByClassName("dot");
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            index++;
            if (index > slides.length - 1)
                index = 0;
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[index].style.display = "block";
            dots[index].className += " active";
            setTimeout(show, 5000);
        }

        function appear(n) {
            var slides = document.getElementsByClassName("slide");
            var dots = document.getElementsByClassName("dot");
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            index = n;
            if (index > slides.length) {
                index = 0
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[index].style.display = "block";
            dots[index].className += " active";
        }
        function display(n) {

            document.getElementById('0').style.display = "none";
            document.getElementById('1').style.display = "none";
            document.getElementById('2').style.display = "none";
            document.getElementById(n).style.display = "block";
        }