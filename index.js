module.exports = {
    extends: [
        'eslint-config-hardcore/index',
        'eslint-config-hardcore/ts-for-js',
        'plugin:vue/recommended',
        '@vue/typescript',
        './vue-specific-rules.js',
        'plugin:prettier-vue/recommended',
        'prettier'
    ],
    plugins: [
        "no-loops",
        "import"
    ],
    env: {
        es2021: true,
        browser: true,
    },
    rules: {
        "prettier/prettier": "off",

        "prettier-vue/prettier": ["error", {
            semi: false,
            singleQuote: true,
            tabWidth: 4,
        }],

        "no-shadow": ["error",
            {
                "builtinGlobals": true,
                "allow": ["defaultStatus", "event", "find", "length", "name", "status", "state"]
            }],
        "no-void": ["error", {
            "allowAsStatement": true,
        }],
        "no-param-reassign": [
            "error",
            {
                "props": true,
                "ignorePropertyModificationsFor": [
                    "state",
                    "acc",
                    "e",
                    "ctx",
                    "req",
                    "request",
                    "res",
                    "response",
                    "$scope"
                ]
            }
        ],
        "no-restricted-imports": ["error", {
            "patterns": [{
                "group": [".*"],
                "message": "Relative imports are not allowed. Please use \'@\' for a module or \'@/\' for the project root."
            }]
        }],
        "no-console": process.env.NODE_ENV === 'production' ? "error" : "warn",
        "no-warning-comments": process.env.NODE_ENV === 'production' ? "error" : "warn",

        "no-loops/no-loops": 2,

        "@shopify/prefer-early-return": "error",

        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                "allowTypedFunctionExpressions": false,
                "allowHigherOrderFunctions": true,
                "allowDirectConstAssertionInArrowFunctions": false
            }
        ],

        "@typescript-eslint/quotes": [
            "error",
            "single",
            { "avoidEscape": true, "allowTemplateLiterals": false }
        ],

        "putout/putout": "off",

        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "default",
                "format": ["strictCamelCase"]
            },
            {
                "selector": "function",
                "format": ["strictCamelCase", "StrictPascalCase"]
            },
            {
                "selector": "typeLike",
                "format": ["StrictPascalCase"]
            },
            {
                "selector": "objectLiteralProperty",
                "format": ["strictCamelCase", "StrictPascalCase"]
            },
            {
                "selector": ["variable", "parameter", "accessor"],
                "types": ["boolean"],
                "format": ["PascalCase"],
                "prefix": ["is", "has", "are", "can", "should", "did", "will"]
            }
        ],
    },
    overrides: [
        {
            "files": ["**/*.vue"],
            "rules": {
                "import/no-anonymous-default-export": "off"
            }
        }
    ],
    settings: {
        "import/resolver": {
            alias: {
                map: [
                    ['@', './src']
                ],
                extensions: ['.js', '.json', '.vue']
            }
        }
    },
}