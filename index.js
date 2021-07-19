module.exports = {
    extends: [
        'eslint-config-hardcore/base',
        'eslint-config-hardcore/ts-for-js',
        'plugin:vue/recommended',
        '@vue/typescript',
    ],
    plugins: ["no-loops", "prettier"],
    env: {
        es2021: true,
        browser: true,
    },
    rules: {
        "vue/html-indent": ["error", 4],
        "vue/padding-line-between-blocks": ["error", "always"],
        "vue/attributes-order": "error",
        "vue/component-tags-order": "error",
        "vue/no-lone-template": "error",
        "vue/no-multiple-slot-args": "error",
        "vue/no-v-html": "error",
        "vue/order-in-components": "error",
        "vue/this-in-template": "error",
        "vue/attribute-hyphenation": "error",
        "vue/component-definition-name-casing": "error",
        "vue/html-closing-bracket-newline": "error",
        "vue/html-closing-bracket-spacing": "error",
        "vue/html-end-tags": "error",
        "vue/html-quotes": "error",
        "vue/html-self-closing": "error",
        "vue/max-attributes-per-line": "error",
        "vue/multiline-html-element-content-newline": "error",
        "vue/mustache-interpolation-spacing": "error",
        "vue/no-multi-spaces": "error",
        "vue/no-spaces-around-equal-signs-in-attribute": "error",
        "vue/no-template-shadow": "error",
        "vue/one-component-per-file": "error",
        "vue/prop-name-casing": "error",
        "vue/require-default-prop": "error",
        "vue/require-prop-types": "error",
        "vue/singleline-html-element-content-newline": "error",
        "vue/v-bind-style": "error",
        "vue/v-on-style": "error",
        "vue/v-slot-style": "error",

        "prettier/prettier": ["error", {
            semi: false,
            singleQuote: true,
            tabWidth: 4,
        }],

        "no-shadow": ["error",
            {
                "builtinGlobals": true,
                "allow": ["defaultStatus", "event", "find", "length", "name", "status", "state"]
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

        "putout/putout": "off"
    },
    overrides: [
        {
            "files": ["**/*.vue"],
            "rules": {
                "import/no-anonymous-default-export": "off"
            }
        }
    ]
}