document.addEventListener('DOMContentLoaded', init);

    function init() {
      const cards = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

      let zona = document.getElementById("jatekzona");
      let felforditottak = [];
      let pontok = 0;

      
      cards.sort(() => Math.random() - 0.5)

      
      cards.forEach((card, index) => {
        let kartyaado = document.createElement("div");
        kartyaado.classList.add("card");
        kartyaado.dataset.cardIndex = index;
        kartyaado.textContent = card;
        kartyaado.textContent = "";
        kartyaado.addEventListener("click", kivalaszt);
        zona.append(kartyaado);
      });

      function kivalaszt(e) {
          
        const kattintott = e.target;    

        
        if (!felforditottak.includes(kattintott) && felforditottak.length < 2) {
          fordit(kattintott);

          felforditottak.push(kattintott);

          
          if (felforditottak.length == 2) {
            setTimeout(egyezes, 1000);
          }
        }
      }

      function fordit(card) {
        card.style.backgroundColor = "white";
        card.style.color = "black";
        card.textContent = cards[card.dataset.cardIndex];
        if (card.textContent == "A") {
            card.classList.add("wood");
        }
        if (card.textContent == "B") {
            card.classList.add("brick");
        }
        if (card.textContent == "C") {
            card.classList.add("livestock");
        }
        if (card.textContent == "D") {
            card.classList.add("grain");
        }
        if (card.textContent == "E") {
            card.classList.add("ore");
        }
        if (card.textContent == "F") {
            card.classList.add("devcard");
        }
        if (card.textContent == "G") {
            card.classList.add("monopoly");
        }
        if (card.textContent == "H") {
            card.classList.add("knight")
        }
      }

      function visszafordit() {
        felforditottak.forEach(card => {
          card.style.backgroundColor = "lightblue";
          card.style.color = "#333";
          if (card.textContent == "A") {
            card.classList.remove("wood");
        }
        if (card.textContent == "B") {
            card.classList.remove("brick");
        }
        if (card.textContent == "C") {
            card.classList.remove("livestock");
        }
        if (card.textContent == "D") {
            card.classList.remove("grain");
        }
        if (card.textContent == "E") {
            card.classList.remove("ore");
        }
        if (card.textContent == "F") {
            card.classList.remove("devcard");
        }
        if (card.textContent == "G") {
            card.classList.remove("monopoly");
        }
        if (card.textContent == "H") {
            card.classList.remove("knight")
        }
          card.textContent = '';
        });

        felforditottak = [];
      }

      function egyezes() 
      {
        const [elso, masodik] = felforditottak;

        if (elso.textContent == masodik.textContent) {
            elso.style.opacity = "0";
            masodik.style.opacity = "0";
            felforditottak = [];
            pontok++;

          
          if (pontok == cards.length / 2) {
            setTimeout(() => alert('Gratulálok!'), 500);
            zona.innerHTML = '';
            setTimeout(init(),5000);
      
          }
        } 
        else {
          visszafordit();
        }
      }
    }