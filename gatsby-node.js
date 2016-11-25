const fs = require('fs');
const axios = require('axios');

exports.postBuild = (pages, callback) => {
  axios.get('http://rf.pipend.com/apis/branches/prKzXdM/execute/false/transformation?from=&to=&ago=1%20year&bucketSize=604800000&sampleSize=5&refreshCount=0')
  .then((response) => {
    return response.data
  }).then((json) => {
    const files = ['index.html', 'bundle.js'];
    for (var i = 0; i < files.length; i++) {
      const file = files[i];
      fs.readFile('public/'+file, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        const result = data.replace(/Still counting/g, json[json.length-1][1]);

        fs.writeFile('public/'+file, result, 'utf8', function (err) {
          if (err) return console.log(err);
        });
      });
    }
  });
}
