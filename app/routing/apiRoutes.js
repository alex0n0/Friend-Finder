var friends = require('../data/friends');
const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid/v4');

router.get('/api/friends', (req, res) => {
    res.json(friends.friendArr);
});

router.post('/api/friends', (req, res) => {
    var randomIndex = Math.floor(Math.random() * (friends.friendArr.length - 1));
    var randomDetails = friends.randomData[randomIndex];
    
    var name = req.body.name;
    var photo = randomDetails.url;
    var scores = [
        Number(req.body.select1),
        Number(req.body.select2),
        Number(req.body.select3),
        Number(req.body.select4),
        Number(req.body.select5),
        Number(req.body.select6),
        Number(req.body.select7),
        Number(req.body.select8),
        Number(req.body.select9),
        Number(req.body.select10),
    ];
    var newUser = {
        "id": uuidv4(),
        "name": name,
        "photo": photo,
        "scores": scores
    };


    if (typeof friends.friendArr[0] === 'undefined') {
        return res.send('you are the first user');
    } else {
        var tempFriend = friends.friendArr[0];
        var tempScore = calculateDifference(newUser, tempFriend);

        friends.friendArr.forEach((curr, i, arr) => {
            var compatabilityScore = calculateDifference(newUser, curr);
            if (compatabilityScore < tempScore) {
                tempScore = compatabilityScore;
                tempFriend = curr;
            }
        });

        friends.friendArr.push(newUser);

        var friend = friends.friendArr.find((curr, i, arr) => {
            return curr.id === tempFriend.id;
        });

        res.send(friend);
    }
});



function calculateDifference(user1, user2) {
    var compatabilityScore = 0;
    var difference = 0;
    for (let i = 0; i < user2.scores.length; i++) {
        difference = Math.abs(user1.scores[i] - user2.scores[i]);
        compatabilityScore += difference;
    }
    return compatabilityScore;
}



module.exports = router;