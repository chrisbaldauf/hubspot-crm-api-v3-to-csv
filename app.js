const rp = require('request-promise').defaults({json: true})

const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY || 'demo';

for (objectType of ['contacts', 'companies', 'deals', 'tickets']) {
  buildCsvList(objectType).then(console.log);
}

function fetchObjects(objectType) {
  return rp.get(`https://api.hubapi.com/crm/v3/objects/${objectType}?hapikey=${HUBSPOT_API_KEY}&limit=3`)
    .then(response => { return {objectType, response}});
};

function buildCsvList(objectType) {
  return fetchObjects(objectType)
    .then(data => {
      const {objectType, response} = data;
      const output = [];

      // header
      output.push(`== ${objectType}`);
      output.push(`id,${Object.keys(response.results[0].properties).join(',')}`)

      // values
      response.results.forEach(object => {
        output.push(`${object.id},${Object.values(object.properties).join(',')}`)
      });

      return output.join('\n');
    });
};
