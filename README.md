[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org)
![isc](https://img.shields.io/badge/license-ISC-lightgrey.svg?style=flat-square)

# polkadot-js.github.io

This is the source for the [polkadot-js site](https://polkadot-js.github.io), dealing with a lightweight overview of the available repositories, projects and ongoing work.

## development

- Install jekyll & bundler if not available `gem install bundler jekyll` (Ruby required)
- Install dependencies `bundle install`
- Start Jekyll `bundle exec jekyll serve`
- Access site locally on `http://localhost:4000`

## troubleshooting
- If Ruby is not installed then copy/paste the following to install Xcode command line tools if necessary and install and switch to latest version of Ruby. References:
  - https://stackoverflow.com/a/30191850/3208553
  - https://jekyllrb.com/docs/installation/macos/
```bash
xcode-select --install;
brew install rbenv;
rbenv init;
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile;
source ~/.bash_profile;
rbenv install $(rbenv install -l | grep -v - | tail -1);
rbenv global $(rbenv install -l | grep -v - | tail -1);
```
