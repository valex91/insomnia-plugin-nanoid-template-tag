const { customAlphabet, nanoid } = require('nanoid')

module.exports.templateTags = [{
    name: 'randomFromSet',
    displayName: 'Random from set',
    description: 'Generate a set of random characters with a specific length/set',
    args: [
        {
            displayName: 'Length',
            description: 'Length of the random generated set',
            type: 'number',
            defaultValue: 1
        }, 
        {
            displayName: 'Custom character set',
            description: 'Fill it with the characters you would like to be used in the set',
            type: 'string',
            defaultValue: ''
        }
    ],
    async run (_: unknown, length: number, set: string): Promise<string> {
        const safeLength = length && length > 0 ? length : 1

        return set.length ? customAlphabet(set,safeLength)() : nanoid(safeLength)
    }
}];