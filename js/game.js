// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "",
    background_image: "",
    levels: {

        start: {
            background_image: "start.gif",
            music: "start.mp3",
            message: "You decide to start playing Melee competitively. Do you play online or attend a tournament to practice?",
            choices: [
                {
                    text: "Online",
                    nextLevel: "netplay",
                },

                {
                    text: "Tournament",
                    nextLevel: "evo",
                },
            ]
        },

        netplay: {
            background_image: "netplay.gif",
            music: "netplay.mp3",
            message: "Your opponent outclasses you in every way and you have lost multiple games in a miserable manner. Your hands are in terrible pain. Do you keep playing or take a break?",
            choices: [
                {
                    text: "Keep playing",
                    nextLevel: "hospital",
                },
                {
                    text: "Take a break",
                    nextLevel: "evo",
                },
            ]
        },

        hospital: {
            background_image: "hospital.gif",
            music: "hospital.mp3",
            message: "You ended up here either because you lost so hard you fainted or you played for too long and destroyed your hands. Your game is over.",
            choices: [
                {
                    text: "Start again?",
                    nextLevel: "start",
                },
            ]
        },

        evo: {
            background_image: "evo.gif",
            music: "evo.mp3",
            message: "You rested for quite a long time and now you're at your first tournament, EVO, the largest fighting game tournament in the world. You are on a last hit last stock game and you're playing Fox against Marth on final destination. Do you",
            choices: [
                {
                    text: "Attempt to play at range and shine when close",
                    nextLevel: "evo2",
                },
                {
                    text: "Run in blindly at close range",
                    nextLevel: "hospital",
                },
            ]
        },

        evo2: {
            background_image: "evo2.gif",
            music: "evo2.mp3",
            message: "You are playing againt a Puff. They try to stall for time, but you find a window to attack. Do you upthrow/upair, or roll through and then attack?",
            choices: [
                {
                    text: "UP THROW UP AIR FOR THE LOVE OF GOD",
                    nextLevel: "evo3",
                },
                {
                    text: "Run in at close range",
                    nextLevel: "hospital",
                },
            ]
        },

        evo3: {
            background_image: "win.gif",
            music: "win.mp3",
            message: "You've won EVO! Would you like to play again?",
            choices: [
                {
                    text: "Yes",
                    nextLevel: "start",
                },
                {
                    text: "No",
                    nextLevel: "hospital",
                },
            ]
        },

        },
    };

