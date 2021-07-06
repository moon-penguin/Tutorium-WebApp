
    document.getElementById("button2").addEventListener("click", ()=>{

        let gewicht = document.getElementById("gewicht").value;
        let groesse = document.getElementById("groesse").value;
        let bmi = gewicht / (groesse * groesse);

        console.log(bmi);
        document.getElementById("paragraph").innerHTML = "Ihr Body Mass Index beträgt " + bmi.toFixed(2) + ".";
    });



        document.getElementById("subButton").addEventListener("click", () => {
            let name = document.querySelector("#Name").value;
            //?=.+ = Das Objekt muss mindestens einmal vorkommen -- ?!.* Das Objekt darf nicht vorkommen (es muss ein mal sein, da plus sagen würde es muss einmal vorkommen.
            let reg = new RegExp(/(?=.+[a-z])(?=.+[A-Z])(?=.+\s)(?!.*\d)/);
            console.log(name.match(reg));
            if (name.match(reg) == null) {
                alert("Ihr Name muss ein Leerzeichen enthalten und groß geschrieben sein.");
                event.preventDefault();

        }
            let text = document.querySelector("#texta").value;
            let reg2 = new RegExp(/[<>]/);
            console.log(text.match(reg2));
            if (text.match(reg2) != null) {
                alert("Im Textfeld wurden nicht erwünschte sonderzeichen benutzt");
                event.preventDefault();
            }

    });


