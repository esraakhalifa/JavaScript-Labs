export var wordList = [
    // Arts and Music
    { word: "guitar", hint: "A musical instrument with strings.", category: "Arts and Music" },
    { word: "painting", hint: "An art form using colors on a surface to create images or expression.", category: "Arts and Music" },
    { word: "jazz", hint: "A genre of music characterized by improvisation and syncopation.", category: "Arts and Music" },
    { word: "orchestra", hint: "A large ensemble of musicians playing various instruments.", category: "Arts and Music" },
    { word: "symphony", hint: "A long musical composition for a full orchestra, typically in multiple movements.", category: "Arts and Music" },
    { word: "ballet", hint: "A classical dance form characterized by precise and graceful movements.", category: "Arts and Music" },
    { word: "theater", hint: "A building or outdoor area in which plays, movies, or other performances are staged.", category: "Arts and Music" },
    { word: "sculpture", hint: "A three-dimensional art form created by shaping or combining materials.", category: "Arts and Music" },
    { word: "piano", hint: "A musical instrument played by pressing keys that cause hammers to strike strings.", category: "Arts and Music" },

    // Nature and Environment
    { word: "mountain", hint: "A large natural elevation of the Earth's surface.", category: "Nature and Environment" },
    { word: "butterfly", hint: "An insect with colorful wings and a slender body.", category: "Nature and Environment" },
    { word: "sunset", hint: "The daily disappearance of the sun below the horizon.", category: "Nature and Environment" },
    { word: "waterfall", hint: "A cascade of water falling from a height.", category: "Nature and Environment" },
    { word: "rainforest", hint: "A dense forest characterized by high rainfall and biodiversity.", category: "Nature and Environment" },
    { word: "desert", hint: "A barren or arid land with little or no precipitation.", category: "Nature and Environment" },
    { word: "river", hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.", category: "Nature and Environment" },
    { word: "sunflower", hint: "A tall plant with a large yellow flower head.", category: "Nature and Environment" },
    { word: "tropical", hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn.", category: "Nature and Environment" },
    { word: "breeze", hint: "A gentle wind.", category: "Nature and Environment" },
    { word: "oasis", hint: "A fertile spot in a desert where water is found.", category: "Nature and Environment" },

    // Science and Space
    { word: "oxygen", hint: "A colorless, odorless gas essential for life.", category: "Science and Space" },
    { word: "astronomy", hint: "The scientific study of celestial objects and phenomena.", category: "Science and Space" },
    { word: "galaxy", hint: "A vast system of stars, gas, and dust held together by gravity.", category: "Science and Space" },
    { word: "volcano", hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected.", category: "Science and Space" },
    { word: "telescope", hint: "An optical instrument used to view distant objects in space.", category: "Science and Space" },
    { word: "astronaut", hint: "A person trained to travel and work in space.", category: "Science and Space" },
    { word: "universe", hint: "All existing matter, space, and time as a whole.", category: "Science and Space" },
    { word: "planet", hint: "A celestial body that orbits a star and does not produce light of its own.", category: "Science and Space" },

    // Sports and Activities
    { word: "football", hint: "A popular sport played with a spherical ball.", category: "Sports and Activities" },
    { word: "dance", hint: "A rhythmic movement of the body often performed to music.", category: "Sports and Activities" },
    { word: "adventure", hint: "An exciting or daring experience.", category: "Sports and Activities" },
    { word: "vacation", hint: "A period of time devoted to pleasure, rest, or relaxation.", category: "Sports and Activities" },
    { word: "safari", hint: "An expedition or journey, typically to observe wildlife in their natural habitat.", category: "Sports and Activities" },
    { word: "photography", hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation.", category: "Sports and Activities" },
    { word: "bicycle", hint: "A human-powered vehicle with two wheels.", category: "Sports and Activities" },

    // Food and Drink
    { word: "chocolate", hint: "A sweet treat made from cocoa beans.", category: "Food and Drink" },
    { word: "pizza", hint: "A savory dish consisting of a round, flattened base with toppings.", category: "Food and Drink" },
    { word: "coffee", hint: "A popular caffeinated beverage made from roasted coffee beans.", category: "Food and Drink" },

    // Knowledge and Communication
    { word: "history", hint: "The study of past events and human civilization.", category: "Knowledge and Communication" },
    { word: "science", hint: "The systematic study of the structure and behavior of the physical and natural world.", category: "Knowledge and Communication" },
    { word: "language", hint: "A system of communication consisting of words, gestures, and syntax.", category: "Knowledge and Communication" },
    { word: "technology", hint: "The application of scientific knowledge for practical purposes.", category: "Knowledge and Communication" },
    { word: "novel", hint: "A long work of fiction, typically with a complex plot and characters.", category: "Knowledge and Communication" },
    { word: "curiosity", hint: "A strong desire to know or learn something.", category: "Knowledge and Communication" },

    // Mystery and Imagination
    { word: "fantasy", hint: "A genre of imaginative fiction involving magic and supernatural elements.", category: "Mystery and Imagination" },
    { word: "paradox", hint: "A statement or situation that contradicts itself or defies intuition.", category: "Mystery and Imagination" },
    { word: "mysterious", hint: "Difficult or impossible to understand, explain, or identify.", category: "Mystery and Imagination" },
    { word: "enigma", hint: "Something that is mysterious, puzzling, or difficult to understand.", category: "Mystery and Imagination" },
    { word: "puzzle", hint: "A game, toy, or problem designed to test ingenuity or knowledge.", category: "Mystery and Imagination" },
    { word: "whisper", hint: "To speak very softly or quietly, often in a secretive manner.", category: "Mystery and Imagination" },
    { word: "shadow", hint: "A dark area or shape produced by an object blocking the light.", category: "Mystery and Imagination" },
    { word: "secret", hint: "Something kept hidden or unknown to others.", category: "Mystery and Imagination" },
    { word: "unpredictable", hint: "Not able to be foreseen or known beforehand; uncertain.", category: "Mystery and Imagination" },
    { word: "obfuscate", hint: "To confuse or bewilder someone; to make something unclear or difficult to understand.", category: "Mystery and Imagination" },
    { word: "unveil", hint: "To make known or reveal something previously secret or unknown.", category: "Mystery and Imagination" },
    { word: "illusion", hint: "A false perception or belief; a deceptive appearance or impression.", category: "Mystery and Imagination" },

    // Objects and Devices
    { word: "camera", hint: "A device used to capture and record images or videos.", category: "Objects and Devices" },
    { word: "diamond", hint: "A precious gemstone known for its brilliance and hardness.", category: "Objects and Devices" },
    { word: "telephone", hint: "A device used to transmit sound over long distances.", category: "Objects and Devices" },

    // Emotion and Perception
    { word: "nostalgia", hint: "A sentimental longing or wistful affection for the past.", category: "Emotion and Perception" },
    { word: "brilliant", hint: "Exceptionally clever, talented, or impressive.", category: "Emotion and Perception" },
    { word: "vibrant", hint: "Full of energy, brightness, and life.", category: "Emotion and Perception" },
    { word: "moonlight", hint: "The light from the moon.", category: "Emotion and Perception" }
];
