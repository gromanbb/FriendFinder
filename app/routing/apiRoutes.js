// ===============================================================================
// LOAD DATA
// Link our route to a "data" source.
// The data source holds arrays of information on friends.
// ===============================================================================
const friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link they are shown a JSON of the data
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------
  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a match or not.
    // req.body is available since we're using the body parsing middleware
      const bestMatch = {
        totalDiff: 40,
        name: "",
        photo: ""
      };

      for (let i = 0; i < friendsData.length; i++) {
        let currentDiff = 0;
        for (let j = 0; j < friendsData[i].scores.length; j++) {
              currentDiff += Math.abs((parseInt(req.body.scores[j])) - (parseInt(friendsData[i].scores[j])));
        }
        if (currentDiff < bestMatch.totalDiff) {
          bestMatch.totalDiff = currentDiff;
          bestMatch.name = friendsData[i].name;
          bestMatch.photo = friendsData[i].photo;
        } 
      }
      // ojo
      console.log(bestMatch);

      friendsData.push(req.body);
      res.json(bestMatch);
  });
};
