const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const CLI = require('clui')
const clone = require('git-clone/promise')
const shell = require('shelljs')

const inquirer = require('./lib/inquirer')

clear()

console.log(
  chalk.yellow(
    figlet.textSync('MFE CLI Wizard', {
      font: 'Standard',
      horizontalLayout: 'default',
    })
  )
)

const Spinner = CLI.Spinner
const status = new Spinner('Generating files...', [
  '⣾',
  '⣽',
  '⣻',
  '⢿',
  '⡿',
  '⣟',
  '⣯',
  '⣷',
])

const handleError = (err) =>
  console.log(chalk.red('❌ Something went wrong.', err))

const run = async () => {
  // Collect MFE details
  const details = await inquirer.askMFEDetails()
  const { name, description, type } = details

  // Clone MFE boilerplate repo
  const repo = 'https://github.com/AdrianApan/mfe-boilerplate'
  const targetPath = `./apps/${name}`

  status.start()
  clone(repo, targetPath)
    .then(() => {
      // Clean up
      shell.rm('-rf', `${targetPath}/.git`)

      // Populate with MFE details
      if (description) {
        shell.sed('-i', 'foobar', description, `${targetPath}/package.json`)
      } else {
        shell.sed('-i', 'foobar', '', `${targetPath}/package.json`)
      }

      if (type !== 'shell') {
        shell.rm(`${targetPath}/shell-federation.config.json`)
        shell.mv(
          `${targetPath}/regular-federation.config.json`,
          `${targetPath}/federation.config.json`
        )
      } else {
        shell.rm(`${targetPath}/regular-federation.config.json`)
        shell.mv(
          `${targetPath}/shell-federation.config.json`,
          `${targetPath}/federation.config.json`
        )
      }

      shell.sed('-i', 'boilerplate', name, `${targetPath}/package.json`)
      shell.sed(
        '-i',
        'boilerplate',
        name,
        `${targetPath}/federation.config.json`
      )

      // Success and stop spinner
      status.stop()
      console.log(chalk.green('\n✅ MFE succesfully generated!'))
    })
    .catch((err) => {
      if (err) {
        handleError(err)
        status.stop()
      }
    })
}

run()
