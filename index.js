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
        "import",
        "eslint-comments"
    ],
    env: {
        es2021: true,
        browser: true,
    },
    rules: {
        'no-magic-numbers': 'off',
        "eslint-comments/require-description": "error",

        "vue/html-self-closing": ["error", {
            "html": {
                "void": "always"
            }
        }],

        "prettier/prettier": "off",

        "prettier-vue/prettier": ["error", {
            semi: false,
            singleQuote: true,
            tabWidth: 4,
            htmlWhitespaceSensitivity: 'ignore',
        }],

        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error",
            {
                "builtinGlobals": true,
                "allow": ["defaultStatus", "event", "find", "length", "name", "status", "state", "getters"]
            }
        ],
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
        "prefer-destructuring": ["error", {
            "array": false,
            "object": true,
        }],

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

        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/array-type": ["error", {
            default: 'generic'
        }],

        "putout/putout": "off",

        "@typescript-eslint/no-magic-numbers": [
            "error", { "ignoreEnums": true, "ignore": [0, 1, -1], "enforceConst": true, "ignoreDefaultValues": true }
        ],

        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "default",
                "format": ["camelCase"]
            },
            {
                "selector": "function",
                "format": ["camelCase", "PascalCase"]
            },
            {
                "selector": "typeLike",
                "format": ["PascalCase"]
            },
            {
                "selector": "objectLiteralProperty",
                "format": ["camelCase", "PascalCase"]
            },
            {
                "selector": "enumMember",
                "format": ["PascalCase"]
            },
            {
                "selector": ["variable", "parameter", "accessor"],
                "types": ["boolean"],
                "format": ["PascalCase"],
                "prefix": ["is", "has", "are", "can", "should", "did", "will"]
            }
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never",
            }
        ]
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
                extensions: ['.js', '.json', '.ts', '.vue']
            },
        }
    },
}