'use strict';

const {
  actionssdk,
  Games,
  Databases,
  ProductiveApps,
  Robotics,
  AndroidApps,
  RaspberryPi,
  Image,
  List,
  Suggestions,
  SimpleResponse,
 } = require('actions-on-google');
const functions = require('firebase-functions');

const JAVA = 'Java';
const JAVASCRIPT = 'javascript';
const JQUERY = 'jquery';
const CPP = 'cpluplus';
const CSHARP = 'csharp';
const PYTHON = 'python';
const PHP = 'php';
const SQL = 'sql';
const SCRATCH = 'scratch';
const KOTLIN = 'kotlin';
const RUBY = 'ruby';
const PERL = 'perl';


const JAVA_IMG = '';
const JAVASCRIPT_IMG = '';
const JQUERY_IMG = '';
const CPP_IMG = '';
const CSHARP_IMG = '';
const PYTHON_IMG = '';
const PHP_IMG = '';
const SQL_IMG = '';
const SCRATCH_IMG = '';
const KOTLIN_IMG = '';
const RUBY_IMG = '';
const PERL_IMG ='';

const SELECTED_ITEM_RESPONSES = {
  [JAVA]: '',
  [JAVASCRIPT]: '',
  [JQUERY]: '',
  [CPP]: '',
  [CSHARP]: ''
  [PYTHON]: '',
  [PHP]: '',
  [SQL]: '',
  [SCRATCH]: '',
  [KOTLIN]: '',
  [RUBY]: '',
  [PERL]: '',

};


const intentSuggestions = [
  'Games',
  'Websites',
  'Databases',
  'ProductiveApps',
  'Robotics',
  'AndroidApps',
  'RaspberryPi',
];


const app = actionssdk({debug: true});

app.middleware((conv) => {
  conv.hasScreen =
    conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT');
  conv.hasAudioPlayback =
    conv.surface.capabilities.has('actions.capability.AUDIO_OUTPUT');
});

app.intent('actions.intent.MAIN', (conv) => {
  conv.ask(new SimpleResponse({
    speech: 'Hi!',
    text: 'Hello! I am the Programming Genie!',
  }));
  conv.ask(new SimpleResponse({
    speech: 'I can help you find a suitable ' +
      'programming language just for your you!.' +
      'Please select of of the languages bellow.',
    text: '\nI can help you find a suitable ' +
      'programming language just for your you!' +
      '\nYou can choose for what would you like ' +
      'to use as a programming language, from the options bellow',
  }));

  conv.ask(new Suggestions(intentSuggestions));
});

app.intent('actions.intent.TEXT', (conv, input) => {
  let rawInput = input.toLowerCase();
  console.log('USER SAID ' + rawInput);
  if (rawInput === 'games') {
    games(conv);
  } else if (rawInput === 'websites') {
    websites(conv);
  } else if (rawInput === 'databases') {
    databases(conv);
  } else if (rawInput === 'productiveapps') {
    productiveApps(conv);
  } else if (rawInput === 'robotics') {
    robotics(conv);
  } else if (rawInput === 'androidapps') {
    androidApps(conv);
  } else if (rawInput === 'raspberrypi') {
    raspberryPi(conv);
  } else {}
});

app.intent('actions.intent.OPTION', (conv, params, option) => {
  let response = 'You did not select any option from the list';
  if (option && SELECTED_ITEM_RESPONSES.hasOwnProperty(option)) {
    response = SELECTED_ITEM_RESPONSES[option];
  } else {
    response = 'You selected an unknown item from the list';
  }
  conv.ask(response);
});

/**
 *
 * @param {object} conv
 */
function games(conv) {
  if (!conv.hasScreen) {
    conv.ask('Sorry, try this on a screen device');
    return;
  }
  conv.ask('So you want to make a game? I like you!');
  conv.ask(new Suggestions(intentSuggestions));
  conv.ask(new List({
    title: 'Games',
    items: {
      [JAVA]: {
        synonyms: [
          'Java',
        ],
        title: 'Java',
        description: 'Java is a programming language and...',
        image: new Image({
          url: JAVA_IMG,
          alt: 'Java',
        }),
      },
      [CPP]: {
        synonyms: [
          'C plus plus',
          'C',
        ],
        title: 'C++',
        description: 'C++ allows you to have...',
      image: new Image({
          url: CPP_IMG,
          alt: 'C++',
        }),
      },
      [CSHARP]: {
        synonyms: [
          'C Sharp',
          'Sharp',
        ],
        title: 'C#',
        description: 'C# was developed by...',
        image: new Image({
          url: CSHARP_IMG,
          alt: 'C#',
        }),
      },
    },
  }));
}

/**
 *
 * @param {object} conv
 */
function websites(conv) {
  if (!conv.hasScreen) {
    conv.ask('Sorry, try this on a screen device.');
    return;
  }
  conv.ask('Using a script language for a website can be fun!');
  conv.ask(new Suggestions(intentSuggestions));
  conv.ask(new List({
    title: 'Websites',
    items: {
      [JAVASCRIPT]: {
        synonyms: [
          'JavaScript',
          'Script',
        ],
        title: 'Java Script',
        description: 'Java Script is one of...',
        image: new Image({
          url: JAVA_IMG,
          alt: 'Java Script',
        }),
      },
      [PYTHON]: {
        synonyms: [
          'Python',
        ],
        title: 'Python',
        description: 'Python is used as a...',
        image: new Image({
          url: PYTHON_IMG,
          alt: 'Python',
        }),
      },
      [PHP]: {
        synonyms: [
          'Php',
        ],
        title: 'PHP',
        description: 'PHP is a general purpose...',
        image: new Image({
          url: PHP_IMG,
          alt: 'PHP',
        }),
      },
      [RUBY]: {
        synonyms: [
          'Ruby',
        ],
        title: 'Ruby',
        description: 'Ruby is a dynamic, object oriented...',
        image: new Image({
          url: RUBY_IMG,
          alt: 'Ruby',
        }),
      },
    },
  }));
}

/**
 *
 * @param {object} conv
 */
function databases(conv) {
  if (!conv.hasScreen) {
    conv.ask('Sorry, try this on a screen device.');
    return;
  }
  conv.ask('So  you are into Big Data and stuff?');
  conv.ask(new Suggestions(intentSuggestions));
  conv.ask(new List({
    title: 'Databases',
    items: {
      [JAVA]: {
        synonyms: [
          'Java',
        ],
        title: 'Java',
        description: 'Java is a programming language and...',
        image: new Image({
          url: JAVA_IMG,
          alt: 'Java',
        }),
      },
      [SQL]: {
        synonyms: [
          'SQL',
          'S Q L',
        ],
        title: 'SQL',
        description: 'SQL is a standardized...',
        image: new Image({
          url: SQL_IMG,
          alt: 'SQL',
        }),
      },
      [PYTHON]: {
        synonyms: [
          'Python',
          'Py thon',
        ],
        title: 'Python',
        description: 'Python is used as a...',
        image: new Image({
          url: PYTHON_IMG,
          alt: 'Python',
        }),
      },
    },
  }));
}

/**
 *
 * @param {object} conv
 */
function productiveApps(conv) {
  if (!conv.hasScreen) {
    conv.ask('Sorry, try this on a screen device.');
    return;
  }
  conv.ask('You are already productive by checking this Action out!');
  conv.ask(new Suggestions(intentSuggestions));
  conv.ask(new List({
    title: 'Productive Apps',
    items: {
      [CPP]: {
        synonyms: [
          'C plus plus',
        ],
        title: 'C++',
        description: 'C++ allows you to have...',
        image: new Image({
          url: CPP_IMG,
          alt: 'C++',
        }),
      },
      [JAVA]: {
        synonyms: [
          'Java',
        ],
        title: 'Java',
        description: 'Java is a programming language and...',
        image: new Image({
          url: JAVA_IMG,
          alt: 'Java',
        }),
      },
      [PYTHON]: {
        synonyms: [
          'Python',
          'Py thon',
        ],
        title: 'Python',
        description: 'Python is used as a...',
        image: new Image({
          url: PYTHON_IMG,
          alt: 'Python',
        }),
      },
    },
  }));
}

/**
 *
 * @param {object} conv
 */
function robotics(conv) {
  if (!conv.hasScreen) {
    conv.ask('Sorry, try this on a screen device.');
    return;
  }
  conv.ask('The Sky Net needs to start from somewhere.');
  conv.ask(new Suggestions(intentSuggestions));
  conv.ask(new List({
    title: 'Robotics',
    items: {
      [JAVA]: {
        synonyms: [
          'Java',
        ],
        title: 'Java',
        description: 'Java is a programming language and...',
        image: new Image({
          url: JAVA_IMG,
          alt: 'Java',
        }),
      },
      [PYTHON]: {
        synonyms: [
          'Python',
          'Py thon',
        ],
        title: 'Python',
        description: 'Python is used as a...',
        image: new Image({
          url: PYTHON_IMG,
          alt: 'Python',
        }),
      },
      [CPP]: {
        synonyms: [
          'C plus plus',
        ],
        title: 'C++',
        description: 'C++ allows you to have...',
        image: new Image({
          url: CPP_IMG,
          alt: 'C++',
        }),
      },
    },
  }));
}

/**
 *
 * @param {object} conv
 */
function raspberryPi(conv) {
  if (!conv.hasScreen) {
    conv.ask('Sorry, try this on a screen device.');
    return;
  }
  conv.ask('This will get fun really quick!');
  conv.ask(new Suggestions(intentSuggestions));
  conv.ask(new List({
    title: 'Raspberry Pi',
    items: {
      [JAVA]: {
        synonyms: [
          'Java',
        ],
        title: 'Java',
        description: 'Java is a programming language and...',
        image: new Image({
          url: JAVA_IMG,
          alt: 'Java',
        }),
      },
      [JAVASCRIPT]: {
        synonyms: [
          'Java Script',
          'Script',
        ],
        title: 'Java Script',
        description: 'Java Script is one of...',
        image: new Image({
          url: JAVASCRIPT_IMG,
          alt: 'Java Script',
        }),
      },
      [JQUERY]: {
        synonyms: [
          'Jquery',
          'j query',
          'query',
        ],
        title: 'JQuery',
        description: 'jQuery is a lightweight...',
        image: new Image({
          url: JQUERY_IMG,
          alt: 'JQuery',
        }),
      },
      [PYTHON]: {
        synonyms: [
          'Python',
          'Py thon',
        ],
        title: 'Python',
        description: 'Python is used as a...',
        image: new Image({
          url: PYTHON_IMG,
          alt: 'Python',
        }),
      },
      [CPP]: {
        synonyms: [
          'C plus plus',
        ],
        title: 'C++',
        description: 'C++ allows you to have...',
        image: new Image({
          url: CPP_IMG,
          alt: 'C++',
        }),
      },
      [SCRATCH]: {
        synonyms: [
          'Scratch',
        ],
        title: 'Scratch',
        description: 'Scratch is a visual programming...',
        image: new Image({
          url: SCRATCH_IMG,
          alt: 'Scratch',
        }),
      },
    },
  }));
}

/**
 *
 * @param {object} conv
 */
function androidApps(conv) {
  if (!conv.hasScreen) {
    conv.ask('Sorry, try this on a screen device.');
    return;
  }
  conv.ask('If you build a cool App, could you introduce me to it?');
  conv.ask(new Suggestions(intentSuggestions));
  conv.ask(new List({
    title: 'Android Apps',
    items: {
      [JAVA]: {
        synonyms: [
          'Java',
        ],
        title: 'Java',
        description: 'Java is a programming language and...',
        image: new Image({
          url: JAVA_IMG,
          alt: 'Java',
        }),
      },
      [PYTHON]: {
        synonyms: [
          'Python',
        ],
        title: 'Python',
        description: 'Python is used as a...',
        image: new Image({
          url: PYTHON_IMG,
          alt: 'Python',
        }),
      },
      [CPP]: {
        synonyms: [
          'C plus plus',
        ],
        title: 'C++',
        description: 'C++ allows you to have...',
        image: new Image({
          url: CPP_IMG,
          alt: 'C++',
        }),
      },
      [PYTHON]: {
        synonyms: [
          'Python',
          'Py thon',
        ],
        title: 'Python',
        description: 'Python is used as a...',
        image: new Image({
          url: PYTHON_IMG,
          alt: 'Python',
        }),
      },
      [KOTLIN]: {
        synonyms: [
          'Kotlin',
          'Kot lin',
        ],
        title: 'Kotlin',
        description: 'Google announced that it will officially...',
        image: new Image({
          url: KOTLIN_IMG,
          alt: 'Kotlin',
        }),
      },
    },
  }));
}

/**
 *
 * @param {object} conv
 */
function byeResponse(conv) {
  conv.close(new SimpleResponse({
    speech: 'Okay see you later',
    text: 'OK see you later!',
  }));
}

/**
 *
 * @param {object} conv
 */
function normalBye(conv) {
  conv.close('Okay see you later!');
}

exports.conversationComponent = functions.https.onRequest(app);
