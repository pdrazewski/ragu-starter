var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your component name',
      default : this.appname // Default to current folder name
    },{
      type    : 'input',
      name    : 'author',
      message : "Author's Name"
    }]).then((answers) => {
      this.props = answers;
    });
  }
  writing() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name,
        author: this.props.author
      }
    );
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'), {
        name: this.props.name
      }
    );
    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('template.twig'),
      this.destinationPath('template.twig')
    );
    this.fs.copy(
      this.templatePath('postcss.config.js'),
      this.destinationPath('postcss.config.js')
    );
    this.fs.copy(
      this.templatePath('manifest.json'),
      this.destinationPath('manifest.json')
    );
    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('src')
    );
    this.fs.copy(
      this.templatePath('test'),
      this.destinationPath('test')
    );
  }
  install() {
    console.log("I'm all done. Running npm install.")
    this.npmInstall()
  }
};


