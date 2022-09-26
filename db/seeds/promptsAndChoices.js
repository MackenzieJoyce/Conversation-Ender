// https://www.rapidtables.com/convert/number/ascii-to-binary.html 

const promptsAndChoices = [
    {
        id: 1,
        text: 'heeeeeey wut r u doin',
        choices: [
            {
                text: 'Just organizing my Pokemon deck after this sick tournament I went to on Friday.',
                setState: { pokemon: true },
                nextText: 2
            },
            { 
                text: 'Just updating my Dungeons and Dragons character sheet to reflect the level up we got after defeating that wicked Beholder!',
                setState: { dnd: true },
                nextText: 7  
            }
        ]
    },
    { 
        id: 2,
        text: 'lol you still play that??',
        choices: [
            {
                text: 'Hells yeah! The Pokemon world has become exponentially greater with each generation!',
                requiredState: (currentState) => currentState.pokemon,
                setState: { pokemon: false, yes: true },
                // Ellipse 
                nextText: 0110010101101100011011000110100101110000011100110110010100001010, 
            },
            {
                text: 'Um... no.',
                requiredState: (currentState) => currentState.pokemon,
                setState: { pokemon: false, no: true },
                nextText: 3,
            }
        ]
    },
    {
        id: 3, 
        text: 'suuuuuuure... nerd',
        choices: [
            {
                text: 'Wheres your sense of adventure?',
                requiredState: (currentState) => currentState.no,
                setState: { no: false, adventure: true },
                nextText: 4
            },
            {
                text: 'Do you even have fun?',
                requiredState: (currentState) => currentState.no,
                setState: { no: false, noFun: true },
                nextText: 5
            }
        ]
    },
    {
        id: 4, 
        text: 'i actually go outside n talk to ppl XD u no? those things that look lik u but rnt lol',
        choices: [
            {
                text: 'ha ha very funny. I go outside! Im going to a midnight release next Saturday',
                requiredState: (currentState) => currentState.adventure,
                setState: { adventure: false, midnightRelease: true },
                nextText: 011100110111011101100101011000010111010001111001,
            }
        ]
    },
    {
        id: 5,
        text: 'um yeah of course i do. i have fun in ways you wouldnt even believe >:)',
        choices: [
            {
                text: 'Oh yeah? Like what?',
                // Next Time 
                nextText: 011011100110010101111000011101000010000001110100011010010110110101100101
            },
            {
                text: 'Psh! Yeah I bet you do...',
                // Slut 
                nextText: 01110011011011000111010101110100
            }
        ]
    },
    {
        id: 6, 
        text: 'wow so u do have friends lol',
        choices: [
            {
                text: 'Well duh! Wait... Do you know what DnD is???',
                requiredState: (currentState) => currentState.dnd,
                setState: { dnd: false, youKnowDnD: true },
                nextText: 7
            },
            {
                text: 'Umm, yeah? I cant imagine you have many though...',
                requiredState: (currentState) => currentState.dnd,
                setState: { dnd: false, noFriends: true },
                // Slut 
                nextText: 01110011011011000111010101110100
            }
        ]
    },
    {
        id: 7, 
        text: 'mhmmmmmmm i still play sometimes ;) playing a dark elf wizard wuz da best lol',
        choices: [
            {
                text: 'Woah thats awesome!',
                requiredState: (currentState) => currentState.youKnowDnD,
                setState: { youKnowDnD: false, youreAwesome: true },
                nextText: 8
            },
            {
                text: 'Thats pretty cool... But its not the best.',
                requiredState: (currentState) => currentState.youKnowDnD,
                setState: { youKnowDnD: false, coolerCharacter: true },
                nextText: 9 
            }
        ]
    },
    {
        id: 8, 
        text: 'yeah im pretty cool ;)',
        choices: [
            {
                text: 'What else do you like to do?',
                // Next Time 
                nextText: 011011100110010101111000011101000010000001110100011010010110110101100101
            },
            {
                text: 'You should come play with my group. Were getting together the Saturday after next',
                // Sweaty 
                nextText: 011100110111011101100101011000010111010001111001
            }
        ]
    },
    {
        id: 9,
        text: 'wow ok. wuts da best then??',
        choices: [
            {
                text: 'Well my character is a half-human brawler! Theyre a little more complex so it makes sense you would go for something easier.',
                // BSOD 
                nextText: 666
            }
        ]
    },




    
    // ENDINGS 
    {
        // Sweaty --> Restart 
        id: 011100110111011101100101011000010111010001111001, 
        text: 'well then maybe ill c u there ;) *user has logged out*',
        choices: [
            {
                text: '(Your palms sweat thinking about thinking about seeing her IRL)',
                nextText: -1,
            }
        ]
    },
    {
        // Slut --> BSOD 
        id: 01110011011011000111010101110100,
        text: 'wut does that mean??????',
        choices: [
            {
                text: 'Well with your username it looks like you enjoy a certain kind of fun',
                // BSOD 
                nextText: 666
            }
        ]
    },
    {
        // Next Time --> Ellipse Safe 
        id: 011011100110010101111000011101000010000001110100011010010110110101100101,
        text: 'maybe ill tell you next time',
        choices: [
            {
                text: 'What do you mean?',
                // Log Out Safe 
                nextText: 01101100011011110110011101101111011101010111010001110011011000010110011001100101
            }
        ]
    },
    {
        // Ellipse Fatal --> Log Out Fatal 
        id: 0110010101101100011011000110100101110000011100110110010100001010,
        text: '...',
        choices: [
            {
                text: 'hello?',
                requiredState: (currentState) => currentState.yes,
                setState: { yes: false, hello: true },
                // Log Out Fatal 
                nextText: 0110110001101111011001110110111101110101011101000110011001100001011101000110000101101100,
            },
            {
                text: '(Wait for a responce)',
                nextText: 0110010101101100011011000110100101110000011100110110010100001010,
            }
        ]
    },
    {
        // Log Out Fatal --> Restart OR BSOD 
        id: 0110110001101111011001110110111101110101011101000110011001100001011101000110000101101100,
        text: '*user has logged out*',
        choices: [
            {
                text: '(Lets log out and try again...)',
                nextText: -1
            },
            {
                text: 'bitch...',
                requiredState: (currentState) => currentState.hello,
                setState: { hello: false, ohYeah: true },
                // BSOD End 
                nextText: 666, 
            }
        ] 
    },
    {
        // Ellipse Safe --> Log Out Safe 
        id: 0110010101101100011011000110100101110000011100110110010100001010,
        text: '...',
        choices: [
            {
                text: 'hello?',
                requiredState: (currentState) => currentState.yes,
                setState: { yes: false, hello: true },
                // Log Out Safe  
                nextText: 01101100011011110110011101101111011101010111010001110011011000010110011001100101,
            },
            {
                text: '(Wait for a responce)',
                nextText: 0110010101101100011011000110100101110000011100110110010100001010
            }
        ]
    },
    {
        // Log Out Safe --> Restart 
        id: 01101100011011110110011101101111011101010111010001110011011000010110011001100101,
        text: '*user has logged out*',
        choices: [
            {
                text: '(What did she mean by that?...)',
                nextText: -1
            }
        ] 
    }
]