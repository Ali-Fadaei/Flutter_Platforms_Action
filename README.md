# GitHub Action — Get Target Platforms of Your Flutter Project from the pubspec File.

This GitHub Action allows you to get The Target Platforms from the pubspec file with Name of it! 

also optionally you can get value of any key inside pubspec.yaml file with passing 'custom_key' to it!

## Usage
### Pre-requisites
Create a workflow `.yml` file in your `.github/workflows` directory. An [example workflow](#common-workflow) is available below. For more information, reference the GitHub Help Documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

### Inputs
For more information on this input, see the [Workflow syntax for GitHub Actions](https://docs.github.com/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith)

* `pubspec_path`: The pubspec.yaml file path. Optional. Default: `pubspec.yaml`
* `custom_key`: a custom key for retrive from pubspec.yaml file(optional). 

### Outputs
For more information on this output, see the [Workflow syntax for GitHub Actions](https://docs.github.com/actions/reference/workflow-syntax-for-github-actions#jobsjob_idoutputs) and the [Context and expression syntax for GitHub Actions](https://docs.github.com/actions/reference/context-and-expression-syntax-for-github-actions#steps-context)

* `name`: your Flutter project name
* `android`: your Flutter project should Release on android platform(String Boolean)
* `ios`: your Flutter project should Release on ios platform(String Boolean)
* `web`: your Flutter project should Release on web platform(String Boolean)
* `windows`: your Flutter project should Release on windows platform(String Boolean)
* `linux`: your Flutter project should Release on linux platform(String Boolean)
* `macos`: your Flutter project should Release on macos platform(String Boolean)
* `macos`: your Flutter project should Release on macos platform(String Boolean)
* `custom_value`: value of the custom key retrived from pubspec.yaml file

### Common workflow

1. Your `pubspec.yaml` file must contain the platforms key. For example:
```yaml
platforms:
  android:
  ios:
  web:
  windows:
  macos:
```

For example:
```yaml
on: push

name: Sample Workflow

jobs:
  build:
    name: Example
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Get Target Platforms from pubspec.yaml
        id: platform_check
        uses: Ali-Fadaei/flutter-platforms-action@v1.0.3
        with:
          custom_key: custom_key_wanted_from_pubspec.yml
    outputs:
      package_name: ${{steps.platform_check.outputs.name}}
      build_android: ${{steps.platform_check.outputs.android}}
      build_web: ${{steps.platform_check.outputs.web}}
      build_windows: ${{steps.platform_check.outputs.windows}}
      build_ios: ${{steps.platform_check.outputs.ios}}    
      build_linux: ${{steps.platform_check.outputs.linux}}    
      build_macos: ${{steps.platform_check.outputs.macos}} 
      custom_key_value: ${{steps.platform_check.outputs.custom-value}}   
```
