const axios = require("axios");
module.exports.symptomsAddress = async (address) => {

    const URL = `https://healthservice.priaid.ch/symptoms {process.env.TOKEN}&language={'en-gn'}&format={'json'} `;
  
    try {
     
      const {symptoms } = await axios.get(URL);
  
      if (symptoms.summary.numResults < 1) {
        return null;
      }
  
      const allSymptoms = symptoms.results[0].position;
      return allSymptoms;
    } catch (err) {
      console.log(err);
      throw new Error('Could not find any symptoms using the given address.');
    }
  };