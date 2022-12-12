const axios = require("axios");
module.exports.location = async (address) => {
     const URL = `https://dev.virtualearth.net/REST/v1/LocationRecog/{point}?radius={search_radius}&top={number_of_results}&datetime={visit_date_time}&distanceunit={dist_unit}&verboseplacenames={true_or_false}&includeEntityTypes={list_of_entity_types}&key={BingMapsKey} `;
  
    try {
     
      const {location } = await axios.get(URL);
  
      if (location.summary.numResults < 1) {
        return null;
      }
  
      const allLocation = location.results[0].position;
      return allLocation;
    } catch (err) {
      console.log(err);
      throw new Error('Could not find any locations using the given address.');
    }
  };