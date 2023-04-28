import axios from "axios"

const apiUrl = process.env.API_KEY

const getSummary = async () => {
      //con try avvio la richiesta tramite axios.get per accedere ai dati della web API
  try {
    //questa è la prima fase, dove ottengo la risposta per il sommario "summary"
    const responseSummary = await axios.get(apiUrl);
    const dataSummary = responseSummary.data.summary;

    //return per poter esportare la risposta e poterla utilizzare
    return dataSummary
 
  }
  //catch in caso di errore

   catch (error) { 
    alert ("ops è successo" + error)
  };

};
    
getSummary()


//iniziallizzo di nuovo la richiesta di dati con una funzione asincrona 
const getCategories = async () => {
  try {
    //qui invece ottengo le categorie dall'API
    const responseCategories = await axios.get(apiUrl);
    const dataCategories = responseCategories.data.categories;

    //return per poter esportare la risposta e utilizzare il metodo .map in index.js 
    return dataCategories
           
  }
  //catch in caso di errore

   catch (error) { alert ( "ops hai avuto un problema" + error); }
  } 
    
getCategories()

export { getSummary, getCategories }


                     

         
          