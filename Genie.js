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


const JAVA = '';
const JAVASCRIPT = '';
const JQUERY = '';
const CPP = '';
const CSHARP = '';
const PYTHON = '';
const PHP = '';
const SQL = '';
const SCRATCH = '';
const KOTLIN = '';
const RUBY = '';


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


const SELECTED_ITEM_RESPONSES = {
  [JAVA]: '',
  [JAVASCRIPT]: '',
  [JQUERY]: '',
  [CPP]: '',
  [CSHARP]: '',
  [PYTHON]: '',
  [PHP]: '',
  [SQL]: '',
  [SCRATCH]: '',
  [KOTLIN]: '',
  [RUBY]: '',
};

const intentSuggestions = [
  'Games',
  'Websites',
  'Databases',
  'Productive Apps',
  'Robotics',
  'Android Apps',
  'Raspberry Pi',
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
    speech: '',
    text: '',
  }));
  conv.ask(new SimpleResponse({
    speech: '',
    text: '',
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
  } else if (rawInput === 'productive apps') {
    productiveApps(conv);
  } else if (rawInput === 'robotics') {
    robotics(conv);
  } else if (rawInput === 'android apps') {
    androidApps(conv);
  } else if (rawInput === 'raspberry pi') {
    raspberryPi(conv);
  } else {}
});


app.intent('actions.intent.OPTION', (conv, params, option) => {
  let response = '';
  if (option && SELECTED_ITEM_RESPONSES.hasOwnProperty(option)) {
    response = SELECTED_ITEM_RESPONSES[option];
  } else {
    response = '';
  }
  conv.ask(response);
});


/**
 *
 * @param {object} conv
 */
function games(conv) {
  if (!conv.hasScreen) {
    conv.ask('');
    return;
  }
  conv.ask('');
  conv.ask(new Suggestions(intentSuggestions));
  conv.ask(new List({
    title: 'Games',
    items: {
      [JAVA]: {
        synonyms: [
          'Java',
        ],
        title: 'Java',
        description: '',
        image: new Image({
          url: JAVA_IMG,
          alt: 'Java',
        }),
      },
      [CPP]: {
        synonyms: [
          'C plus plus',
        ],
        title: 'C++',
        description: '',
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
        description: '',
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
    conv.ask('');
    return;
  }
  conv.ask('');
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
        description: '',
        image: new Image({
          url: JAVASCRIPT_IMG,
          alt: 'Java Script',
        }),
      },
      [PYTHON]: {
        synonyms: [
          'Python',
        ],
        title: 'Python',
        description: '',
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
        description: '',
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
        description: '',
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
    conv.ask('');
    return;
  }
  conv.ask('');
  conv.ask(new Suggestions(intentSuggestions));
  conv.ask(new List({
    title: 'Databases',
    items: {
      [JAVA]: {
        synonyms: [
          'Java',
        ],
        title: 'Java',
        description: '',
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
        description: '',
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
        description: '',
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
    conv.ask('');
    return;
  }
  conv.ask('');
  conv.ask(new Suggestions(intentSuggestions));
  conv.ask(new List({
    title: 'Productive Apps',
    items: {
      [CPP]: {
        synonyms: [
          'C plus plus',
        ],
        title: 'C++',
        description: '',
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
        description: '',
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
        description: '',
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
    conv.ask('');
    return;
  }
  conv.ask('');
  conv.ask(new Suggestions(intentSuggestions));
  conv.ask(new List({
    title: 'Robotics',
    items: {
      [JAVA]: {
        synonyms: [
          'Java',
        ],
        title: 'Java',
        description: '',
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
        description: '',
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
        description: '',
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
    conv.ask('');
    return;
  }
  conv.ask('');
  conv.ask(new Suggestions(intentSuggestions));
  conv.ask(new List({
    title: 'Raspberry Pi',
    items: {
      [JAVA]: {
        synonyms: [
          'Java',
        ],
        title: 'Java',
        description: '',
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
        description: '',
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
        description: '',
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
        description: '',
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
        description: '',
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
        description: '',
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
    conv.ask('');
    return;
  }
  conv.ask('');
  conv.ask(new Suggestions(intentSuggestions));
  conv.ask(new List({
    title: 'Android Apps',
    items: {
      [JAVA]: {
        synonyms: [
          'Java',
        ],
        title: 'Java',
        description: '',
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
        description: '',
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
        description: '',
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
        description: '',
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
        description: '',
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
    speech: '',
    text: '',
  }));
}


/**
 *
 * @param {object} conv
 */
function normalBye(conv) {
  conv.close('');
}

exports.conversationComponent = functions.https.onRequest(app);

