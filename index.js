const base = require('eslint-config-hardcore/base.json')
const ts = require('eslint-config-hardcore/ts-for-js.json')

module.exports = {
    extends: [
        base,
        ts
    ]
}