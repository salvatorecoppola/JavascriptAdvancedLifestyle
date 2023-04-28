import { useSearchParams } from "react-router-dom";
import { getSummary, getCategories } from "./generate";

//in questo file js modificheremo il DOM e mandiamo a schermo le informazioni ricevute da generate.js
//la funzione getSummary per il sommario e getCategories per i dati delle categorie


//passiamo i dati per mandarli a schermo tramite una funzione asincrona
const displayInfo = async () => {

    const displaySummary = await getSummary(); 
    const displayCategories = await getCategories();
    
    //con la variabile "input" colleghiamo la nostra input bar (id="search") con il metodo "value" così da attivarla 
    //e poter leggere il contenuto al suo interno
    

    //la nostra chiamata all' API ritorna un array di oggetti,
    //quindi possiamo utilizzare il metodo .map per estrapolarne i dati
    //avvolto nella funzione dataDisplay troviamo
    //la funzione createDiv dove creiamo dinamicamente i paragrafi da appendere nel DOM 
      
    function dataDisplay() { displayCategories.map((object)=> {
      
      const { color, name, score_out_of_10 } = object;
      
      function CreateDiv(){
        
        var mostraColore = document.createElement('p');
        mostraColore.classList = ("p")
        mostraColore.textContent = `${color}`; 
        document.getElementById('display-data').append(mostraColore);

        var mostraNome = document.createElement('p');
        mostraNome.classList = ("p")
        mostraNome.textContent = `${name}`;
        document.getElementById('display-data2').append(mostraNome);

        var mostraPunteggio = document.createElement('p');
        mostraPunteggio.classList = ("p")
        mostraPunteggio.textContent = `${score_out_of_10}`;
        document.getElementById('display-data3').append(mostraPunteggio);
  
      }return CreateDiv()

    }).join('');

  }
    //tramite costrutti condizionali diciamo alla nostra barra che:
    //se il la parola "los angeles" è quella scritta nella barra di ricerca allora potrà
    //mostrare il risultato "dataDisplay" e "displaySummary"
function mamt(){
        if (search.value === "los angeles"){
          document.querySelector('#display-summary').innerHTML = `${displaySummary}`;
          dataDisplay();
          return
        }else (search.value === "" );{
          document.getElementById('errorMessage').innerHTML =
          `<div class="alert alert-danger" role="alert">
          Type Los Angeles
          </div>`
          return
        };
      }
      let btn = document.getElementById('btn')
      btn.addEventListener("click",mamt);
    }
    displayInfo();
      

//colleghiamo il bottone per la ricerca della input box 
//richiamando la funzione "displayInfo"

