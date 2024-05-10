const core = require('@actions/core');
const fs = require('fs');
const yaml = require('yaml');

async function run() {
  try {
    const pubspecFilePath = core.getInput('pubspec-path');
    const fileContents = fs.readFileSync(pubspecFilePath, 'utf8');
    const yamlContents = yaml.parse(fileContents);
    const platforms = yamlContents['platforms'];

    if (platforms === undefined) {
      throw Error(`The $pubspecFilePath does not contain an "platforms" key.`);
    }

    if (platforms === null) {
      throw Error(`The $pubspecFilePath does not contain a value for the "platforms" key.`);
    }

    const name = yamlContents['name'];

    const android = platforms['android'] !== undefined;

    const ios = platforms['ios'] !== undefined;

    const web = platforms['web'] !== undefined;

    const windows = platforms['windows'] !== undefined;

    const linux = platforms['linux'] !== undefined;

    const macos = platforms['macos'] !== undefined;

    core.setOutput('name', name);

    core.setOutput('android', android);

    core.setOutput('ios', ios);

    core.setOutput('web', web);

    core.setOutput('windows', windows);

    core.setOutput('linux', linux);

    core.setOutput('macos', macos);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();