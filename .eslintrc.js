var config = 
  { "env": 
    { "es6": true
    , "jest": true
    }
  , "extends": "eslint:recommended"
  , "parserOptions": 
    { "sourceType": "module"
    , "ecmaVersion": 6
    }
  , "parser": "babel-eslint"
  , "rules": 
    { "linebreak-style":
      [ "error"
      , "unix"
      ]
    , "quotes": 0
    , "semi":
      [ "warn"
      , "never"
      ]
    , "no-unused-vars": 0
    , "no-console": 0
    }
  }

module.exports = config