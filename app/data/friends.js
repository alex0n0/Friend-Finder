const uuidv4 = require('uuid/v4');
var friendArr = [
    {
        "id": uuidv4(),
        "name": "Slime",
        "photo": "https://vignette.wikia.nocookie.net/nintendo/images/3/38/Slime.png/revision/latest?cb=20110914201830&path-prefix=en",
        "scores": [
            5,
            1,
            4,
            2,
            1,
            5,
            5,
            1,
            4,
            3
        ]
    }
]


var randomData = [
    {
        name: 'Slime',
        url: 'https://vignette.wikia.nocookie.net/nintendo/images/3/38/Slime.png/revision/latest?cb=20110914201830&path-prefix=en'
    },
    {
        name: 'Slime Knight',
        url: 'https://vignette.wikia.nocookie.net/nintendo/images/6/65/Slime_Knight.png/revision/latest?cb=20110915003456&path-prefix=en'
    },
    {
        name: 'King Slime',
        url: 'https://vignette.wikia.nocookie.net/nintendo/images/a/af/King_Slime_Image.png/revision/latest?cb=20110914201454&path-prefix=en'
    },
    {
        name: 'Metal Slime',
        url: 'https://vignette.wikia.nocookie.net/nintendo/images/3/33/Metal_Slime.png/revision/latest?cb=20110914203649&path-prefix=en'
    },
    {
        name: 'Dracky',
        url: 'https://vignette.wikia.nocookie.net/nintendo/images/3/3e/Dracky_DQVIII.png/revision/latest/scale-to-width-down/310?cb=20190702142816&path-prefix=en'
    },
    {
        name: 'Kirby',
        url: 'https://vignette.wikia.nocookie.net/nintendo/images/7/7b/Super_Smash_Bros._Ultimate_-_Character_Art_-_Kirby.png/revision/latest/scale-to-width-down/310?cb=20190710193136&path-prefix=en'
    },
    {
        name: 'Metal Knight',
        url: 'https://vignette.wikia.nocookie.net/nintendo/images/4/4d/Super_Smash_Bros._Ultimate_-_Character_Art_-_Meta_Knight.png/revision/latest/scale-to-width-down/310?cb=20180613022654&path-prefix=en'
    },
    {
        name: 'King Dedede',
        url: 'https://vignette.wikia.nocookie.net/nintendo/images/2/29/Super_Smash_Bros._Ultimate_-_Character_Art_-_King_Dedede.png/revision/latest/scale-to-width-down/310?cb=20180613031129&path-prefix=en'
    },
    {
        name: 'Princess Zelda',
        url: 'https://vignette.wikia.nocookie.net/nintendo/images/4/42/Hyrule_Warriors_Zelda.png/revision/latest/scale-to-width-down/103?cb=20180312021225&path-prefix=en'
    },
    {
        name: 'Link',
        url: 'https://vignette.wikia.nocookie.net/nintendo/images/4/42/Super_Smash_Bros._Ultimate_-_Character_Art_-_Link.png/revision/latest/scale-to-width-down/150?cb=20180612222832&path-prefix=en'
    },
    {
        name: 'Mario',
        url: 'https://vignette.wikia.nocookie.net/nintendo/images/8/80/Super_Smash_Bros._Ultimate_-_Character_Art_-_Mario.png/revision/latest/scale-to-width-down/310?cb=20180612202944&path-prefix=en'
    },
    {
        name: 'Luigi',
        url: 'https://vignette.wikia.nocookie.net/nintendo/images/0/0b/LM3_Luigi.png/revision/latest/scale-to-width-down/310?cb=20191023075424&path-prefix=en'
    },
    {
        name: 'Yoshi',
        url: 'https://vignette.wikia.nocookie.net/nintendo/images/a/ac/Yoshi%27s_Crafted_World_-_Character_Artwork_01.png/revision/latest/scale-to-width-down/310?cb=20181226211730&path-prefix=en'
    },
    {
        name: 'Bowser',
        url: 'https://vignette.wikia.nocookie.net/nintendo/images/6/69/Super_Smash_Bros._Ultimate_-_Character_Art_-_Bowser.png/revision/latest/scale-to-width-down/310?cb=20180613013818&path-prefix=en'
    }
];


module.exports = {
    friendArr: friendArr,
    randomData: randomData
};