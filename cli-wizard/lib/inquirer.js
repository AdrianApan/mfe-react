const inquirer = require('inquirer')

module.exports = {
  askMFEDetails: () => {
    const questions = [
      {
        name: 'name',
        type: 'input',
        message: 'Enter a name for your micro-frontend app:',
        validate: function (value) {
          if (value.length) {
            return true
          } else {
            return 'Please enter a name for your micro-frontend app.'
          }
        },
      },
      {
        name: 'description',
        type: 'input',
        message: 'Enter a description (optional):',
      },
      {
        name: 'type',
        type: 'list',
        message: 'What type of micro-frontend app are you building?',
        choices: ['Shell', 'Standard'],
        filter(value) {
          return value.toLowerCase()
        },
      },
    ]
    return inquirer.prompt(questions)
  },
}
