 var i = 0;
        var txt = 'This is a tribute page to some famous cricketers.They done a lot for their countries.They are no more than legends and even god for their fans.I make this tribute page to pay some respect towards them.';
        var speed = 100;

        function typeWriter() {

            if (i < txt.length) {
                document.getElementById("demo").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }