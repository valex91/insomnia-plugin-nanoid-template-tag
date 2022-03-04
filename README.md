# insomnia-plugin-nanoid-template-tag

A simple plugin that allow allow the use in the template of a request the powerful random api from nanoid

## USAGE

As specified in the insomnia documentation <https://docs.insomnia.rest/insomnia/template-tags>, to use this template tag insert in the template
`{% randomFromSet [length], '[set]?' %}` where length is a positive integer specifing the length of the random string and set is an optional string value to use
if you need to create your set from a specific group of characters
