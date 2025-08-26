var calosc = document.getElementById("calosc");
    var Intro = document.getElementById("Intro");

    var przycisk_About_me = document.getElementById("przycisk_About_me");
    var przycisk_Modelling = document.getElementById("przycisk_Modelling");
    var przycisk_Programming = document.getElementById("przycisk_Programming");
    var przycisk_Contact_me = document.getElementById("przycisk_Contact_me");
    var przycisk_Online_Shop = document.getElementById("przycisk_Online_Shop");

    var zakladka_About_me = document.getElementById("About_Me");
    var zakladka_Contact_me = document.getElementById("Contact_Me");
    var zakladka_Modelling = document.getElementById("Modelling");
    var zakladka_Programming = document.getElementById("Programming");
    var zakladka_Online_Shop = document.getElementById("Online_Shop");

    var wyskakujace_zdjecie_TLO = document.getElementById("wyskakujace_zdjecie_TLO");
    
    var aktualna_zakladka = zakladka_About_me;

    

    function zmiana_zakladki(element) {
        console.log("Element id "+ element +"\n" + "Element height "+ element.style.height +"\n");


        if(aktualna_zakladka == element){
            console.log("otwarta ta sama zakladka");
            element.style.display = "block";
        }else {

            Zamykanie_Starej_Karty();

            

            function Zamykanie_Starej_Karty() {
                aktualna_zakladka.style.animation = "Closed-animation 0.5s ease-in-out"

                 const height = aktualna_zakladka.scrollHeight + "px";
                aktualna_zakladka.style.height = height; // start wysokości 0

                // wymuszamy zmianę stylu w kolejnym ticku, by transition zadziałało
                requestAnimationFrame(() => {
                    aktualna_zakladka.style.height = "0px";
                });

                aktualna_zakladka.addEventListener("transitionend", () => {
                    aktualna_zakladka.style.height = "0px"; // po animacji daj auto, by elastycznie działało
                }, { once: true });
            }

            
            
            setTimeout(Otwieranie_Nowej_Karty, 450);

            function Otwieranie_Nowej_Karty() {

                

                aktualna_zakladka.style.display = "none";

                element.style.animation = "Open-animation 0.5s ease-in-out"
                element.style.display = "block";
                const height = element.scrollHeight + "px";
                element.style.height = "0"; // start wysokości 0

                // wymuszamy zmianę stylu w kolejnym ticku, by transition zadziałało
                requestAnimationFrame(() => {
                    element.style.height = height;
                    
                });

                element.addEventListener("transitionend", () => {
                    console.log("transitioned??");
                    element.style.height = "auto"; // po animacji daj auto, by elastycznie działało
                }, { once: true });


                    aktualna_zakladka = element; 

                    //PAYPALLLLLLLLLLLLLLL
                    /*

                        if(aktualna_zakladka == zakladka_Online_Shop){
                            console.log("Aktualna zakladka to SHOPPPP");
                            paypal.Buttons({
                                createOrder: function(data, actions) {
                                    return actions.order.create({
                                    purchase_units: [{
                                        description: "Model 3D – Nazwa produktu",
                                        amount: {
                                        value: '5.00' // cena produktu w USD
                                        }
                                    }]
                                    });
                                },
                                onApprove: function(data, actions) {
                                    return actions.order.capture().then(function(details) {
                                    // potwierdzenie transakcji
                                    alert('dzki za zakup, ' + details.payer.name.given_name + '!');
                                    // przekierowanie do pliku do pobrania:
                                    window.location.href = "Pliki/Renders.blend"; 
                                    });
                                }
                            }).render('#paypal-button-container');
                        
                        }
                    */

            }

            
            
        }

    }

    var wyskakujace_zdjecie = document.getElementById("wyskakujace_zdjecie");
    var wyskakujace_zdjecie_kontener = document.getElementById("wyskakujace_zdjecie_kontener");

    wyskakujace_zdjecie.style.opacity = 0;
    wyskakujace_zdjecie.style.zIndex = -100;

    function zdjecie_popup(zdjecie1,zdjecie2,zdjecie3,zdjecie4,zdjecie5,zdjecie6) {
        var Nowe_zdjecie = document.createElement("img");
        var Lewy_Przycisk = document.createElement("label");
        var Prawy_Przycisk = document.createElement("label");
        var X = document.createElement("label");

        X.innerText = "X"
        Lewy_Przycisk.innerText = "<";
        Prawy_Przycisk.innerText = ">";

        X.style.color = "red";
        

        var Wszystkie_zdjecia = [zdjecie1,zdjecie2,zdjecie3,zdjecie4,zdjecie5,zdjecie6]; 

        Nowe_zdjecie.src = zdjecie1;
        wyskakujace_zdjecie.classList.add("showup");

        wyskakujace_zdjecie.appendChild(X);
        wyskakujace_zdjecie_kontener.appendChild(Lewy_Przycisk);
        wyskakujace_zdjecie_kontener.appendChild(Nowe_zdjecie);
        wyskakujace_zdjecie_kontener.appendChild(Prawy_Przycisk);
        wyskakujace_zdjecie.style.opacity = 1;
        wyskakujace_zdjecie.style.zIndex = 100;

        var numer_zdjecia = 0;

        console.log(zdjecie3);

        Prawy_Przycisk.addEventListener("click", () => {

        let znalezione = false;
        let start = numer_zdjecia;

            while (!znalezione) {
                numer_zdjecia += 1;
                if (numer_zdjecia >= Wszystkie_zdjecia.length) {
                    numer_zdjecia = 0;
                }

        if (Wszystkie_zdjecia[numer_zdjecia]) {
            znalezione = true;
        }

        if (numer_zdjecia === start) break;
    }

    Nowe_zdjecie.src = Wszystkie_zdjecia[numer_zdjecia];
    console.log("Pokazuję zdjęcie nr:", numer_zdjecia);
});

        Lewy_Przycisk.addEventListener("click", () => {
            numer_zdjecia -= 1;

            if (numer_zdjecia < 0) {
                numer_zdjecia = Wszystkie_zdjecia.length - 1;
            }

            while (!Wszystkie_zdjecia[numer_zdjecia]) {
                numer_zdjecia -= 1;

                if (numer_zdjecia < 0) {
                    numer_zdjecia = Wszystkie_zdjecia.length - 1;
                }
            }

            Nowe_zdjecie.src = Wszystkie_zdjecia[numer_zdjecia];
            console.log("Pokazuję zdjęcie nr:", numer_zdjecia);
        });


        X.addEventListener("click", ()=>{
            wyskakujace_zdjecie.classList.add("showdown");

            setTimeout(zamykanie_tla, 500);

            function zamykanie_tla(){
            wyskakujace_zdjecie.style.opacity = 0;
            wyskakujace_zdjecie.style.zIndex = -100;

            wyskakujace_zdjecie.removeChild(X);
            wyskakujace_zdjecie_kontener.removeChild(Lewy_Przycisk);
            wyskakujace_zdjecie_kontener.removeChild(Nowe_zdjecie);
            wyskakujace_zdjecie_kontener.removeChild(Prawy_Przycisk);

            wyskakujace_zdjecie.classList.remove("showup");
            wyskakujace_zdjecie.classList.remove("showdown");
            }
        });
    }


    var kolor1 = 'rgb(44, 171, 86)';
    
    // function([string1, string2],target id,[color1,color2])    
 consoleText(['Amazing', 'Always on Time!', 'Scripter','Modeller'], 'text',[kolor1,kolor1,kolor1,kolor1]);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 3000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
    


//BACKGROUND EFFECT


// geting canvas by Boujjou Achraf
        var c = document.getElementById("c");
        var ctx = c.getContext("2d");

        //making the canvas full screen
        c.height = window.innerHeight;
        c.width = window.innerWidth;

        //chinese characters - taken from the unicode charset
        var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        //converting the string into an array of single characters
        matrix = matrix.split("");

        var font_size = 10;
        var columns = c.width/font_size; //number of columns for the rain
        //an array of drops - one per column
        var drops = [];
        //x below is the x coordinate
        //1 = y co-ordinate of the drop(same for every drop initially)
        for(var x = 0; x < columns; x++)
            drops[x] = 1; 

        //drawing the characters
        function draw()
        {
            //Black BG for the canvas
            //translucent BG to show trail
            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, c.width, c.height);

            ctx.fillStyle = "#008f1a";//green text
            ctx.font = font_size + "px arial";
            //looping over drops
            for(var i = 0; i < drops.length; i++)
            {
                //a random chinese character to print
                var text = matrix[Math.floor(Math.random()*matrix.length)];
                //x = i*font_size, y = value of drops[i]*font_size
                ctx.fillText(text, i*font_size, drops[i]*font_size);

                //sending the drop back to the top randomly after it has crossed the screen
                //adding a randomness to the reset to make the drops scattered on the Y axis
                if(drops[i]*font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;

                //incrementing Y coordinate
                drops[i]++;
            }
        }

        setInterval(draw, 35);