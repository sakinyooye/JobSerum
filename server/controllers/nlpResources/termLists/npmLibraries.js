let npmLibraries = `
alderaan@0.0.1 /Users/tyork/JobCRMTommy
├─┬ axios@0.17.0
│ ├─┬ follow-redirects@1.2.5
│ │ └─┬ debug@2.6.9
│ │   └── ms@2.0.0 deduped
│ └── is-buffer@1.1.6
├─┬ babel-core@6.26.0
│ ├─┬ babel-code-frame@6.26.0
│ │ ├─┬ chalk@1.1.3
│ │ │ ├── ansi-styles@2.2.1
│ │ │ ├── escape-string-regexp@1.0.5 deduped
│ │ │ ├─┬ has-ansi@2.0.0
│ │ │ │ └── ansi-regex@2.1.1 deduped
│ │ │ ├── strip-ansi@3.0.1 deduped
│ │ │ └── supports-color@2.0.0
│ │ ├── esutils@2.0.2
│ │ └── js-tokens@3.0.2
│ ├─┬ babel-generator@6.26.0
│ │ ├── babel-messages@6.23.0 deduped
│ │ ├── babel-runtime@6.26.0 deduped
│ │ ├── babel-types@6.26.0 deduped
│ │ ├─┬ detect-indent@4.0.0
│ │ │ └─┬ repeating@2.0.1
│ │ │   └─┬ is-finite@1.0.2
│ │ │     └── number-is-nan@1.0.1 deduped
│ │ ├── jsesc@1.3.0
│ │ ├── lodash@4.17.4 deduped
│ │ ├── source-map@0.5.7 deduped
│ │ └── trim-right@1.0.1
│ ├─┬ babel-helpers@6.24.1
│ │ ├── babel-runtime@6.26.0 deduped
│ │ └── babel-template@6.26.0 deduped
│ ├─┬ babel-messages@6.23.0
│ │ └── babel-runtime@6.26.0 deduped
│ ├─┬ babel-register@6.26.0
│ │ ├── babel-core@6.26.0 deduped
│ │ ├── babel-runtime@6.26.0 deduped
│ │ ├── core-js@2.5.1
│ │ ├─┬ home-or-tmp@2.0.0
│ │ │ ├── os-homedir@1.0.2
│ │ │ └── os-tmpdir@1.0.2
│ │ ├── lodash@4.17.4 deduped
│ │ ├── mkdirp@0.5.1 deduped
│ │ └─┬ source-map-support@0.4.18
│ │   └── source-map@0.5.7 deduped
│ ├─┬ babel-runtime@6.26.0
│ │ ├── core-js@2.5.1 deduped
│ │ └── regenerator-runtime@0.11.0
│ ├─┬ babel-template@6.26.0
│ │ ├── babel-runtime@6.26.0 deduped
│ │ ├── babel-traverse@6.26.0 deduped
│ │ ├── babel-types@6.26.0 deduped
│ │ ├── babylon@6.18.0 deduped
│ │ └── lodash@4.17.4 deduped
│ ├─┬ babel-traverse@6.26.0
│ │ ├── babel-code-frame@6.26.0 deduped
│ │ ├── babel-messages@6.23.0 deduped
│ │ ├── babel-runtime@6.26.0 deduped
│ │ ├── babel-types@6.26.0 deduped
│ │ ├── babylon@6.18.0 deduped
│ │ ├─┬ debug@2.6.9
│ │ │ └── ms@2.0.0 deduped
│ │ ├── globals@9.18.0
│ │ ├─┬ invariant@2.2.2
│ │ │ └── loose-envify@1.3.1 deduped
│ │ └── lodash@4.17.4 deduped
│ ├─┬ babel-types@6.26.0
│ │ ├── babel-runtime@6.26.0 deduped
│ │ ├── esutils@2.0.2 deduped
│ │ ├── lodash@4.17.4 deduped
│ │ └── to-fast-properties@1.0.3
│ ├── babylon@6.18.0
│ ├── convert-source-map@1.5.0
│ ├─┬ debug@2.6.9
│ │ └── ms@2.0.0
│ ├── json5@0.5.1
│ ├── lodash@4.17.4 deduped
│ ├─┬ minimatch@3.0.4
│ │ └─┬ brace-expansion@1.1.8
│ │   ├── balanced-match@1.0.0
│ │   └── concat-map@0.0.1
│ ├── path-is-absolute@1.0.1
│ ├── private@0.1.8
│ ├── slash@1.0.0
│ └── source-map@0.5.7
├─┬ babel-loader@7.1.2
│ ├─┬ find-cache-dir@1.0.0
│ │ ├── commondir@1.0.1
│ │ ├─┬ make-dir@1.1.0
│ │ │ └── pify@3.0.0 deduped
│ │ └─┬ pkg-dir@2.0.0
│ │   └─┬ find-up@2.1.0
│ │     └─┬ locate-path@2.0.0
│ │       ├─┬ p-locate@2.0.0
│ │       │ └── p-limit@1.1.0
│ │       └── path-exists@3.0.0
│ ├─┬ loader-utils@1.1.0
│ │ ├── big.js@3.2.0
│ │ ├── emojis-list@2.1.0
│ │ └── json5@0.5.1 deduped
│ └─┬ mkdirp@0.5.1
│   └── minimist@0.0.8
├─┬ babel-preset-es2015@6.24.1
│ ├─┬ babel-plugin-check-es2015-constants@6.22.0
│ │ └── babel-runtime@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-arrow-functions@6.22.0
│ │ └── babel-runtime@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-block-scoped-functions@6.22.0
│ │ └── babel-runtime@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-block-scoping@6.26.0
│ │ ├── babel-runtime@6.26.0 deduped
│ │ ├── babel-template@6.26.0 deduped
│ │ ├── babel-traverse@6.26.0 deduped
│ │ ├── babel-types@6.26.0 deduped
│ │ └── lodash@4.17.4 deduped
│ ├─┬ babel-plugin-transform-es2015-classes@6.24.1
│ │ ├─┬ babel-helper-define-map@6.26.0
│ │ │ ├── babel-helper-function-name@6.24.1 deduped
│ │ │ ├── babel-runtime@6.26.0 deduped
│ │ │ ├── babel-types@6.26.0 deduped
│ │ │ └── lodash@4.17.4 deduped
│ │ ├─┬ babel-helper-function-name@6.24.1
│ │ │ ├── babel-helper-get-function-arity@6.24.1 deduped
│ │ │ ├── babel-runtime@6.26.0 deduped
│ │ │ ├── babel-template@6.26.0 deduped
│ │ │ ├── babel-traverse@6.26.0 deduped
│ │ │ └── babel-types@6.26.0 deduped
│ │ ├─┬ babel-helper-optimise-call-expression@6.24.1
│ │ │ ├── babel-runtime@6.26.0 deduped
│ │ │ └── babel-types@6.26.0 deduped
│ │ ├─┬ babel-helper-replace-supers@6.24.1
│ │ │ ├── babel-helper-optimise-call-expression@6.24.1 deduped
│ │ │ ├── babel-messages@6.23.0 deduped
│ │ │ ├── babel-runtime@6.26.0 deduped
│ │ │ ├── babel-template@6.26.0 deduped
│ │ │ ├── babel-traverse@6.26.0 deduped
│ │ │ └── babel-types@6.26.0 deduped
│ │ ├── babel-messages@6.23.0 deduped
│ │ ├── babel-runtime@6.26.0 deduped
│ │ ├── babel-template@6.26.0 deduped
│ │ ├── babel-traverse@6.26.0 deduped
│ │ └── babel-types@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-computed-properties@6.24.1
│ │ ├── babel-runtime@6.26.0 deduped
│ │ └── babel-template@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-destructuring@6.23.0
│ │ └── babel-runtime@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-duplicate-keys@6.24.1
│ │ ├── babel-runtime@6.26.0 deduped
│ │ └── babel-types@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-for-of@6.23.0
│ │ └── babel-runtime@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-function-name@6.24.1
│ │ ├── babel-helper-function-name@6.24.1 deduped
│ │ ├── babel-runtime@6.26.0 deduped
│ │ └── babel-types@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-literals@6.22.0
│ │ └── babel-runtime@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-modules-amd@6.24.1
│ │ ├── babel-plugin-transform-es2015-modules-commonjs@6.26.0 deduped
│ │ ├── babel-runtime@6.26.0 deduped
│ │ └── babel-template@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-modules-commonjs@6.26.0
│ │ ├─┬ babel-plugin-transform-strict-mode@6.24.1
│ │ │ ├── babel-runtime@6.26.0 deduped
│ │ │ └── babel-types@6.26.0 deduped
│ │ ├── babel-runtime@6.26.0 deduped
│ │ ├── babel-template@6.26.0 deduped
│ │ └── babel-types@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-modules-systemjs@6.24.1
│ │ ├─┬ babel-helper-hoist-variables@6.24.1
│ │ │ ├── babel-runtime@6.26.0 deduped
│ │ │ └── babel-types@6.26.0 deduped
│ │ ├── babel-runtime@6.26.0 deduped
│ │ └── babel-template@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-modules-umd@6.24.1
│ │ ├── babel-plugin-transform-es2015-modules-amd@6.24.1 deduped
│ │ ├── babel-runtime@6.26.0 deduped
│ │ └── babel-template@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-object-super@6.24.1
│ │ ├── babel-helper-replace-supers@6.24.1 deduped
│ │ └── babel-runtime@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-parameters@6.24.1
│ │ ├─┬ babel-helper-call-delegate@6.24.1
│ │ │ ├── babel-helper-hoist-variables@6.24.1 deduped
│ │ │ ├── babel-runtime@6.26.0 deduped
│ │ │ ├── babel-traverse@6.26.0 deduped
│ │ │ └── babel-types@6.26.0 deduped
│ │ ├─┬ babel-helper-get-function-arity@6.24.1
│ │ │ ├── babel-runtime@6.26.0 deduped
│ │ │ └── babel-types@6.26.0 deduped
│ │ ├── babel-runtime@6.26.0 deduped
│ │ ├── babel-template@6.26.0 deduped
│ │ ├── babel-traverse@6.26.0 deduped
│ │ └── babel-types@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-shorthand-properties@6.24.1
│ │ ├── babel-runtime@6.26.0 deduped
│ │ └── babel-types@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-spread@6.22.0
│ │ └── babel-runtime@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-sticky-regex@6.24.1
│ │ ├─┬ babel-helper-regex@6.26.0
│ │ │ ├── babel-runtime@6.26.0 deduped
│ │ │ ├── babel-types@6.26.0 deduped
│ │ │ └── lodash@4.17.4 deduped
│ │ ├── babel-runtime@6.26.0 deduped
│ │ └── babel-types@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-template-literals@6.22.0
│ │ └── babel-runtime@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-typeof-symbol@6.23.0
│ │ └── babel-runtime@6.26.0 deduped
│ ├─┬ babel-plugin-transform-es2015-unicode-regex@6.24.1
│ │ ├── babel-helper-regex@6.26.0 deduped
│ │ ├── babel-runtime@6.26.0 deduped
│ │ └─┬ regexpu-core@2.0.0
│ │   ├── regenerate@1.3.3
│ │   ├── regjsgen@0.2.0
│ │   └─┬ regjsparser@0.1.5
│ │     └── jsesc@0.5.0
│ └─┬ babel-plugin-transform-regenerator@6.26.0
│   └─┬ regenerator-transform@0.10.1
│     ├── babel-runtime@6.26.0 deduped
│     ├── babel-types@6.26.0 deduped
│     └── private@0.1.8 deduped
├─┬ babel-preset-react@6.24.1
│ ├── babel-plugin-syntax-jsx@6.18.0
│ ├─┬ babel-plugin-transform-react-display-name@6.25.0
│ │ └── babel-runtime@6.26.0 deduped
│ ├─┬ babel-plugin-transform-react-jsx@6.24.1
│ │ ├─┬ babel-helper-builder-react-jsx@6.26.0
│ │ │ ├── babel-runtime@6.26.0 deduped
│ │ │ ├── babel-types@6.26.0 deduped
│ │ │ └── esutils@2.0.2 deduped
│ │ ├── babel-plugin-syntax-jsx@6.18.0 deduped
│ │ └── babel-runtime@6.26.0 deduped
│ ├─┬ babel-plugin-transform-react-jsx-self@6.22.0
│ │ ├── babel-plugin-syntax-jsx@6.18.0 deduped
│ │ └── babel-runtime@6.26.0 deduped
│ ├─┬ babel-plugin-transform-react-jsx-source@6.22.0
│ │ ├── babel-plugin-syntax-jsx@6.18.0 deduped
│ │ └── babel-runtime@6.26.0 deduped
│ └─┬ babel-preset-flow@6.23.0
│   └─┬ babel-plugin-transform-flow-strip-types@6.22.0
│     ├── babel-plugin-syntax-flow@6.18.0
│     └── babel-runtime@6.26.0 deduped
├─┬ body-parser@1.18.2
│ ├── bytes@3.0.0
│ ├── content-type@1.0.4
│ ├─┬ debug@2.6.9
│ │ └── ms@2.0.0 deduped
│ ├── depd@1.1.1
│ ├─┬ http-errors@1.6.2
│ │ ├── depd@1.1.1 deduped
│ │ ├── inherits@2.0.3
│ │ ├── setprototypeof@1.0.3
│ │ └── statuses@1.3.1
│ ├── iconv-lite@0.4.19
│ ├─┬ on-finished@2.3.0
│ │ └── ee-first@1.1.1
│ ├── qs@6.5.1
│ ├─┬ raw-body@2.3.2
│ │ ├── bytes@3.0.0 deduped
│ │ ├── http-errors@1.6.2 deduped
│ │ ├── iconv-lite@0.4.19 deduped
│ │ └── unpipe@1.0.0
│ └─┬ type-is@1.6.15
│   ├── media-typer@0.3.0
│   └─┬ mime-types@2.1.17
│     └── mime-db@1.30.0
├── bootstrap@3.3.7
├─┬ compromise@11.1.0
│ └── efrt-unpack@2.0.3
├── jquery@3.2.1
├─┬ jshint@2.9.5
│ ├─┬ cli@1.0.1
│ │ ├── exit@0.1.2 deduped
│ │ └── glob@7.1.2 deduped
│ ├─┬ console-browserify@1.1.0
│ │ └── date-now@0.1.4
│ ├── exit@0.1.2
│ ├─┬ htmlparser2@3.8.3
│ │ ├── domelementtype@1.3.0
│ │ ├─┬ domhandler@2.3.0
│ │ │ └── domelementtype@1.3.0 deduped
│ │ ├─┬ domutils@1.5.1
│ │ │ ├─┬ dom-serializer@0.1.0
│ │ │ │ ├── domelementtype@1.1.3
│ │ │ │ └── entities@1.1.1
│ │ │ └── domelementtype@1.3.0 deduped
│ │ ├── entities@1.0.0
│ │ └─┬ readable-stream@1.1.14
│ │   ├── core-util-is@1.0.2
│ │   ├── inherits@2.0.3 deduped
│ │   ├── isarray@0.0.1
│ │   └── string_decoder@0.10.31
│ ├── lodash@3.7.0
│ ├── minimatch@3.0.4 deduped
│ ├── shelljs@0.3.0
│ └── strip-json-comments@1.0.4
├── lodash@4.17.4
├─┬ mocha@4.0.1
│ ├── browser-stdout@1.3.0
│ ├── commander@2.11.0
│ ├─┬ debug@3.1.0
│ │ └── ms@2.0.0 deduped
│ ├── diff@3.3.1
│ ├── escape-string-regexp@1.0.5
│ ├─┬ glob@7.1.2
│ │ ├── fs.realpath@1.0.0
│ │ ├─┬ inflight@1.0.6
│ │ │ ├── once@1.4.0 deduped
│ │ │ └── wrappy@1.0.2
│ │ ├── inherits@2.0.3 deduped
│ │ ├── minimatch@3.0.4 deduped
│ │ ├─┬ once@1.4.0
│ │ │ └── wrappy@1.0.2 deduped
│ │ └── path-is-absolute@1.0.1 deduped
│ ├── growl@1.10.3
│ ├── he@1.1.1
│ ├── mkdirp@0.5.1 deduped
│ └─┬ supports-color@4.4.0
│   └── has-flag@2.0.0
├─┬ pg@7.4.0
│ ├── buffer-writer@1.0.1
│ ├── js-string-escape@1.0.1
│ ├── packet-reader@0.3.1
│ ├── pg-connection-string@0.1.3
│ ├── pg-pool@2.0.3
│ ├─┬ pg-types@1.12.1
│ │ ├── postgres-array@1.0.2
│ │ ├── postgres-bytea@1.0.0
│ │ ├── postgres-date@1.0.3
│ │ └─┬ postgres-interval@1.1.1
│ │   └── xtend@4.0.1
│ ├─┬ pgpass@1.0.2
│ │ └─┬ split@1.0.1
│ │   └── through@2.3.8
│ └── semver@4.3.2
├─┬ pg-hstore@2.3.2
│ └── underscore@1.8.3
├─┬ react@16.0.0
│ ├─┬ fbjs@0.8.16
│ │ ├── core-js@1.2.7
│ │ ├─┬ isomorphic-fetch@2.2.1
│ │ │ ├─┬ node-fetch@1.7.3
│ │ │ │ ├─┬ encoding@0.1.12
│ │ │ │ │ └── iconv-lite@0.4.19 deduped
│ │ │ │ └── is-stream@1.1.0
│ │ │ └── whatwg-fetch@2.0.3
│ │ ├── loose-envify@1.3.1 deduped
│ │ ├── object-assign@4.1.1 deduped
│ │ ├─┬ promise@7.3.1
│ │ │ └── asap@2.0.6
│ │ ├── setimmediate@1.0.5
│ │ └── ua-parser-js@0.7.17
│ ├─┬ loose-envify@1.3.1
│ │ └── js-tokens@3.0.2 deduped
│ ├── object-assign@4.1.1
│ └─┬ prop-types@15.6.0
│   ├── fbjs@0.8.16 deduped
│   ├── loose-envify@1.3.1 deduped
│   └── object-assign@4.1.1 deduped
├─┬ react-dom@16.0.0
│ ├── fbjs@0.8.16 deduped
│ ├── loose-envify@1.3.1 deduped
│ ├── object-assign@4.1.1 deduped
│ └── prop-types@15.6.0 deduped
├─┬ sequelize@4.22.5
│ ├── bluebird@3.5.1
│ ├─┬ cls-bluebird@2.0.1
│ │ ├── is-bluebird@1.0.2
│ │ └── shimmer@1.1.0
│ ├── debug@3.1.0 deduped
│ ├── depd@1.1.1 deduped
│ ├── dottie@2.0.0
│ ├── generic-pool@3.2.0
│ ├── inflection@1.12.0
│ ├── lodash@4.17.4 deduped
│ ├── moment@2.19.1
│ ├─┬ moment-timezone@0.5.14
│ │ └── moment@2.19.1 deduped
│ ├─┬ retry-as-promised@2.3.2
│ │ ├── bluebird@3.5.1 deduped
│ │ └─┬ debug@2.6.9
│ │   └── ms@2.0.0 deduped
│ ├── semver@5.4.1
│ ├─┬ terraformer-wkt-parser@1.1.2
│ │ └─┬ terraformer@1.0.8
│ │   └── @types/geojson@1.0.6
│ ├── toposort-class@1.0.1
│ ├── uuid@3.1.0
│ ├── validator@9.1.1
│ └─┬ wkx@0.4.2
│   └── @types/node@8.0.50
├─┬ sqlite3@3.1.13
│ ├── nan@2.7.0
│ └─┬ node-pre-gyp@0.6.38
│   ├─┬ hawk@3.1.3
│   │ ├─┬ boom@2.10.1
│   │ │ └── hoek@2.16.3 deduped
│   │ ├─┬ cryptiles@2.0.5
│   │ │ └── boom@2.10.1 deduped
│   │ ├── hoek@2.16.3
│   │ └─┬ sntp@1.0.9
│   │   └── hoek@2.16.3 deduped
│   ├─┬ mkdirp@0.5.1
│   │ └── minimist@0.0.8
│   ├─┬ nopt@4.0.1
│   │ ├── abbrev@1.1.1
│   │ └─┬ osenv@0.1.4
│   │   ├── os-homedir@1.0.2
│   │   └── os-tmpdir@1.0.2
│   ├─┬ npmlog@4.1.2
│   │ ├─┬ are-we-there-yet@1.1.4
│   │ │ ├── delegates@1.0.0
│   │ │ └── readable-stream@2.3.3 deduped
│   │ ├── console-control-strings@1.1.0
│   │ ├─┬ gauge@2.7.4
│   │ │ ├── aproba@1.2.0
│   │ │ ├── console-control-strings@1.1.0 deduped
│   │ │ ├── has-unicode@2.0.1
│   │ │ ├── object-assign@4.1.1
│   │ │ ├── signal-exit@3.0.2
│   │ │ ├─┬ string-width@1.0.2
│   │ │ │ ├── code-point-at@1.1.0
│   │ │ │ ├─┬ is-fullwidth-code-point@1.0.0
│   │ │ │ │ └── number-is-nan@1.0.1
│   │ │ │ └── strip-ansi@3.0.1 deduped
│   │ │ ├─┬ strip-ansi@3.0.1
│   │ │ │ └── ansi-regex@2.1.1
│   │ │ └─┬ wide-align@1.1.2
│   │ │   └── string-width@1.0.2 deduped
│   │ └── set-blocking@2.0.0
│   ├─┬ rc@1.2.1
│   │ ├── deep-extend@0.4.2
│   │ ├── ini@1.3.4
│   │ ├── minimist@1.2.0
│   │ └── strip-json-comments@2.0.1
│   ├─┬ request@2.81.0
│   │ ├── aws-sign2@0.6.0
│   │ ├── aws4@1.6.0
│   │ ├── caseless@0.12.0
│   │ ├─┬ combined-stream@1.0.5
│   │ │ └── delayed-stream@1.0.0
│   │ ├── extend@3.0.1
│   │ ├── forever-agent@0.6.1
│   │ ├─┬ form-data@2.1.4
│   │ │ ├── asynckit@0.4.0
│   │ │ ├── combined-stream@1.0.5 deduped
│   │ │ └── mime-types@2.1.17 deduped
│   │ ├─┬ har-validator@4.2.1
│   │ │ ├─┬ ajv@4.11.8
│   │ │ │ ├── co@4.6.0
│   │ │ │ └─┬ json-stable-stringify@1.0.1
│   │ │ │   └── jsonify@0.0.0
│   │ │ └── har-schema@1.0.5
│   │ ├── hawk@3.1.3 deduped
│   │ ├─┬ http-signature@1.1.1
│   │ │ ├── assert-plus@0.2.0
│   │ │ ├─┬ jsprim@1.4.1
│   │ │ │ ├── assert-plus@1.0.0
│   │ │ │ ├── extsprintf@1.3.0
│   │ │ │ ├── json-schema@0.2.3
│   │ │ │ └─┬ verror@1.10.0
│   │ │ │   ├── assert-plus@1.0.0
│   │ │ │   ├── core-util-is@1.0.2 deduped
│   │ │ │   └── extsprintf@1.3.0 deduped
│   │ │ └─┬ sshpk@1.13.1
│   │ │   ├── asn1@0.2.3
│   │ │   ├── assert-plus@1.0.0
│   │ │   ├─┬ bcrypt-pbkdf@1.0.1
│   │ │   │ └── tweetnacl@0.14.5 deduped
│   │ │   ├─┬ dashdash@1.14.1
│   │ │   │ └── assert-plus@1.0.0
│   │ │   ├─┬ ecc-jsbn@0.1.1
│   │ │   │ └── jsbn@0.1.1 deduped
│   │ │   ├─┬ getpass@0.1.7
│   │ │   │ └── assert-plus@1.0.0
│   │ │   ├── jsbn@0.1.1
│   │ │   └── tweetnacl@0.14.5
│   │ ├── is-typedarray@1.0.0
│   │ ├── isstream@0.1.2
│   │ ├── json-stringify-safe@5.0.1
│   │ ├─┬ mime-types@2.1.17
│   │ │ └── mime-db@1.30.0
│   │ ├── oauth-sign@0.8.2
│   │ ├── performance-now@0.2.0
│   │ ├── qs@6.4.0
│   │ ├── safe-buffer@5.1.1
│   │ ├── stringstream@0.0.5
│   │ ├─┬ tough-cookie@2.3.3
│   │ │ └── punycode@1.4.1
│   │ ├─┬ tunnel-agent@0.6.0
│   │ │ └── safe-buffer@5.1.1 deduped
│   │ └── uuid@3.1.0
│   ├─┬ rimraf@2.6.2
│   │ └─┬ glob@7.1.2
│   │   ├── fs.realpath@1.0.0
│   │   ├─┬ inflight@1.0.6
│   │   │ ├── once@1.4.0 deduped
│   │   │ └── wrappy@1.0.2 deduped
│   │   ├── inherits@2.0.3 deduped
│   │   ├─┬ minimatch@3.0.4
│   │   │ └─┬ brace-expansion@1.1.8
│   │   │   ├── balanced-match@1.0.0
│   │   │   └── concat-map@0.0.1
│   │   ├── once@1.4.0 deduped
│   │   └── path-is-absolute@1.0.1
│   ├── semver@5.4.1
│   ├─┬ tar@2.2.1
│   │ ├─┬ block-stream@0.0.9
│   │ │ └── inherits@2.0.3 deduped
│   │ ├─┬ fstream@1.0.11
│   │ │ ├── graceful-fs@4.1.11
│   │ │ ├── inherits@2.0.3 deduped
│   │ │ ├── mkdirp@0.5.1 deduped
│   │ │ └── rimraf@2.6.2 deduped
│   │ └── inherits@2.0.3
│   └─┬ tar-pack@3.4.0
│     ├─┬ debug@2.6.9
│     │ └── ms@2.0.0
│     ├── fstream@1.0.11 deduped
│     ├─┬ fstream-ignore@1.0.5
│     │ ├── fstream@1.0.11 deduped
│     │ ├── inherits@2.0.3 deduped
│     │ └── minimatch@3.0.4 deduped
│     ├─┬ once@1.4.0
│     │ └── wrappy@1.0.2
│     ├─┬ readable-stream@2.3.3
│     │ ├── core-util-is@1.0.2
│     │ ├── inherits@2.0.3 deduped
│     │ ├── isarray@1.0.0
│     │ ├── process-nextick-args@1.0.7
│     │ ├── safe-buffer@5.1.1 deduped
│     │ ├─┬ string_decoder@1.0.3
│     │ │ └── safe-buffer@5.1.1 deduped
│     │ └── util-deprecate@1.0.2
│     ├── rimraf@2.6.2 deduped
│     ├── tar@2.2.1 deduped
│     └── uid-number@0.0.6
├─┬ webpack@3.8.1
│ ├── acorn@5.2.1
│ ├─┬ acorn-dynamic-import@2.0.2
│ │ └── acorn@4.0.13
│ ├─┬ ajv@5.3.0
│ │ ├── co@4.6.0
│ │ ├── fast-deep-equal@1.0.0
│ │ ├── fast-json-stable-stringify@2.0.0
│ │ └── json-schema-traverse@0.3.1
│ ├── ajv-keywords@2.1.1
│ ├─┬ async@2.5.0
│ │ └── lodash@4.17.4 deduped
│ ├─┬ enhanced-resolve@3.4.1
│ │ ├── graceful-fs@4.1.11
│ │ ├── memory-fs@0.4.1 deduped
│ │ ├── object-assign@4.1.1 deduped
│ │ └── tapable@0.2.8 deduped
│ ├─┬ escope@3.6.0
│ │ ├─┬ es6-map@0.1.5
│ │ │ ├─┬ d@1.0.0
│ │ │ │ └── es5-ext@0.10.35 deduped
│ │ │ ├─┬ es5-ext@0.10.35
│ │ │ │ ├── es6-iterator@2.0.3 deduped
│ │ │ │ └── es6-symbol@3.1.1 deduped
│ │ │ ├─┬ es6-iterator@2.0.3
│ │ │ │ ├── d@1.0.0 deduped
│ │ │ │ ├── es5-ext@0.10.35 deduped
│ │ │ │ └── es6-symbol@3.1.1 deduped
│ │ │ ├─┬ es6-set@0.1.5
│ │ │ │ ├── d@1.0.0 deduped
│ │ │ │ ├── es5-ext@0.10.35 deduped
│ │ │ │ ├── es6-iterator@2.0.3 deduped
│ │ │ │ ├── es6-symbol@3.1.1 deduped
│ │ │ │ └── event-emitter@0.3.5 deduped
│ │ │ ├─┬ es6-symbol@3.1.1
│ │ │ │ ├── d@1.0.0 deduped
│ │ │ │ └── es5-ext@0.10.35 deduped
│ │ │ └─┬ event-emitter@0.3.5
│ │ │   ├── d@1.0.0 deduped
│ │ │   └── es5-ext@0.10.35 deduped
│ │ ├─┬ es6-weak-map@2.0.2
│ │ │ ├── d@1.0.0 deduped
│ │ │ ├── es5-ext@0.10.35 deduped
│ │ │ ├── es6-iterator@2.0.3 deduped
│ │ │ └── es6-symbol@3.1.1 deduped
│ │ ├─┬ esrecurse@4.2.0
│ │ │ ├── estraverse@4.2.0 deduped
│ │ │ └── object-assign@4.1.1 deduped
│ │ └── estraverse@4.2.0
│ ├── interpret@1.0.4
│ ├── json-loader@0.5.7
│ ├── json5@0.5.1 deduped
│ ├── loader-runner@2.3.0
│ ├── loader-utils@1.1.0 deduped
│ ├─┬ memory-fs@0.4.1
│ │ ├─┬ errno@0.1.4
│ │ │ └── prr@0.0.0
│ │ └─┬ readable-stream@2.3.3
│ │   ├── core-util-is@1.0.2 deduped
│ │   ├── inherits@2.0.3 deduped
│ │   ├── isarray@1.0.0
│ │   ├── process-nextick-args@1.0.7
│ │   ├── safe-buffer@5.1.1 deduped
│ │   ├─┬ string_decoder@1.0.3
│ │   │ └── safe-buffer@5.1.1 deduped
│ │   └── util-deprecate@1.0.2
│ ├── mkdirp@0.5.1 deduped
│ ├─┬ node-libs-browser@2.0.0
│ │ ├─┬ assert@1.4.1
│ │ │ └── util@0.10.3 deduped
│ │ ├─┬ browserify-zlib@0.1.4
│ │ │ └── pako@0.2.9
│ │ ├─┬ buffer@4.9.1
│ │ │ ├── base64-js@1.2.1
│ │ │ ├── ieee754@1.1.8
│ │ │ └── isarray@1.0.0 deduped
│ │ ├── console-browserify@1.1.0 deduped
│ │ ├── constants-browserify@1.0.0
│ │ ├─┬ crypto-browserify@3.12.0
│ │ │ ├─┬ browserify-cipher@1.0.0
│ │ │ │ ├─┬ browserify-aes@1.1.1
│ │ │ │ │ ├── buffer-xor@1.0.3
│ │ │ │ │ ├── cipher-base@1.0.4 deduped
│ │ │ │ │ ├── create-hash@1.1.3 deduped
│ │ │ │ │ ├── evp_bytestokey@1.0.3 deduped
│ │ │ │ │ ├── inherits@2.0.3 deduped
│ │ │ │ │ └── safe-buffer@5.1.1 deduped
│ │ │ │ ├─┬ browserify-des@1.0.0
│ │ │ │ │ ├── cipher-base@1.0.4 deduped
│ │ │ │ │ ├─┬ des.js@1.0.0
│ │ │ │ │ │ ├── inherits@2.0.3 deduped
│ │ │ │ │ │ └── minimalistic-assert@1.0.0 deduped
│ │ │ │ │ └── inherits@2.0.3 deduped
│ │ │ │ └─┬ evp_bytestokey@1.0.3
│ │ │ │   ├─┬ md5.js@1.3.4
│ │ │ │   │ ├─┬ hash-base@3.0.4
│ │ │ │   │ │ ├── inherits@2.0.3 deduped
│ │ │ │   │ │ └── safe-buffer@5.1.1 deduped
│ │ │ │   │ └── inherits@2.0.3 deduped
│ │ │ │   └── safe-buffer@5.1.1 deduped
│ │ │ ├─┬ browserify-sign@4.0.4
│ │ │ │ ├── bn.js@4.11.8
│ │ │ │ ├─┬ browserify-rsa@4.0.1
│ │ │ │ │ ├── bn.js@4.11.8 deduped
│ │ │ │ │ └── randombytes@2.0.5 deduped
│ │ │ │ ├── create-hash@1.1.3 deduped
│ │ │ │ ├── create-hmac@1.1.6 deduped
│ │ │ │ ├─┬ elliptic@6.4.0
│ │ │ │ │ ├── bn.js@4.11.8 deduped
│ │ │ │ │ ├── brorand@1.1.0
│ │ │ │ │ ├─┬ hash.js@1.1.3
│ │ │ │ │ │ ├── inherits@2.0.3 deduped
│ │ │ │ │ │ └── minimalistic-assert@1.0.0 deduped
│ │ │ │ │ ├─┬ hmac-drbg@1.0.1
│ │ │ │ │ │ ├── hash.js@1.1.3 deduped
│ │ │ │ │ │ ├── minimalistic-assert@1.0.0 deduped
│ │ │ │ │ │ └── minimalistic-crypto-utils@1.0.1 deduped
│ │ │ │ │ ├── inherits@2.0.3 deduped
│ │ │ │ │ ├── minimalistic-assert@1.0.0 deduped
│ │ │ │ │ └── minimalistic-crypto-utils@1.0.1
│ │ │ │ ├── inherits@2.0.3 deduped
│ │ │ │ └─┬ parse-asn1@5.1.0
│ │ │ │   ├─┬ asn1.js@4.9.2
│ │ │ │   │ ├── bn.js@4.11.8 deduped
│ │ │ │   │ ├── inherits@2.0.3 deduped
│ │ │ │   │ └── minimalistic-assert@1.0.0 deduped
│ │ │ │   ├── browserify-aes@1.1.1 deduped
│ │ │ │   ├── create-hash@1.1.3 deduped
│ │ │ │   ├── evp_bytestokey@1.0.3 deduped
│ │ │ │   └── pbkdf2@3.0.14 deduped
│ │ │ ├─┬ create-ecdh@4.0.0
│ │ │ │ ├── bn.js@4.11.8 deduped
│ │ │ │ └── elliptic@6.4.0 deduped
│ │ │ ├─┬ create-hash@1.1.3
│ │ │ │ ├─┬ cipher-base@1.0.4
│ │ │ │ │ ├── inherits@2.0.3 deduped
│ │ │ │ │ └── safe-buffer@5.1.1 deduped
│ │ │ │ ├── inherits@2.0.3 deduped
│ │ │ │ ├─┬ ripemd160@2.0.1
│ │ │ │ │ ├─┬ hash-base@2.0.2
│ │ │ │ │ │ └── inherits@2.0.3 deduped
│ │ │ │ │ └── inherits@2.0.3 deduped
│ │ │ │ └─┬ sha.js@2.4.9
│ │ │ │   ├── inherits@2.0.3 deduped
│ │ │ │   └── safe-buffer@5.1.1 deduped
│ │ │ ├─┬ create-hmac@1.1.6
│ │ │ │ ├── cipher-base@1.0.4 deduped
│ │ │ │ ├── create-hash@1.1.3 deduped
│ │ │ │ ├── inherits@2.0.3 deduped
│ │ │ │ ├── ripemd160@2.0.1 deduped
│ │ │ │ ├── safe-buffer@5.1.1 deduped
│ │ │ │ └── sha.js@2.4.9 deduped
│ │ │ ├─┬ diffie-hellman@5.0.2
│ │ │ │ ├── bn.js@4.11.8 deduped
│ │ │ │ ├─┬ miller-rabin@4.0.1
│ │ │ │ │ ├── bn.js@4.11.8 deduped
│ │ │ │ │ └── brorand@1.1.0 deduped
│ │ │ │ └── randombytes@2.0.5 deduped
│ │ │ ├── inherits@2.0.3 deduped
│ │ │ ├─┬ pbkdf2@3.0.14
│ │ │ │ ├── create-hash@1.1.3 deduped
│ │ │ │ ├── create-hmac@1.1.6 deduped
│ │ │ │ ├── ripemd160@2.0.1 deduped
│ │ │ │ ├── safe-buffer@5.1.1 deduped
│ │ │ │ └── sha.js@2.4.9 deduped
│ │ │ ├─┬ public-encrypt@4.0.0
│ │ │ │ ├── bn.js@4.11.8 deduped
│ │ │ │ ├── browserify-rsa@4.0.1 deduped
│ │ │ │ ├── create-hash@1.1.3 deduped
│ │ │ │ ├── parse-asn1@5.1.0 deduped
│ │ │ │ └── randombytes@2.0.5 deduped
│ │ │ ├─┬ randombytes@2.0.5
│ │ │ │ └── safe-buffer@5.1.1 deduped
│ │ │ └─┬ randomfill@1.0.3
│ │ │   ├── randombytes@2.0.5 deduped
│ │ │   └── safe-buffer@5.1.1 deduped
│ │ ├── domain-browser@1.1.7
│ │ ├── events@1.1.1
│ │ ├── https-browserify@0.0.1
│ │ ├── os-browserify@0.2.1
│ │ ├── path-browserify@0.0.0
│ │ ├── process@0.11.10
│ │ ├── punycode@1.4.1
│ │ ├── querystring-es3@0.2.1
│ │ ├── readable-stream@2.3.3 deduped
│ │ ├─┬ stream-browserify@2.0.1
│ │ │ ├── inherits@2.0.3 deduped
│ │ │ └── readable-stream@2.3.3 deduped
│ │ ├─┬ stream-http@2.7.2
│ │ │ ├── builtin-status-codes@3.0.0
│ │ │ ├── inherits@2.0.3 deduped
│ │ │ ├── readable-stream@2.3.3 deduped
│ │ │ ├── to-arraybuffer@1.0.1
│ │ │ └── xtend@4.0.1 deduped
│ │ ├── string_decoder@0.10.31
│ │ ├─┬ timers-browserify@2.0.4
│ │ │ └── setimmediate@1.0.5 deduped
│ │ ├── tty-browserify@0.0.0
│ │ ├─┬ url@0.11.0
│ │ │ ├── punycode@1.3.2
│ │ │ └── querystring@0.2.0
│ │ ├─┬ util@0.10.3
│ │ │ └── inherits@2.0.1
│ │ └─┬ vm-browserify@0.0.4
│ │   └── indexof@0.0.1
│ ├── source-map@0.5.7 deduped
│ ├─┬ supports-color@4.5.0
│ │ └── has-flag@2.0.0 deduped
│ ├── tapable@0.2.8
│ ├─┬ uglifyjs-webpack-plugin@0.4.6
│ │ ├── source-map@0.5.7 deduped
│ │ ├─┬ uglify-js@2.8.29
│ │ │ ├── source-map@0.5.7 deduped
│ │ │ ├── uglify-to-browserify@1.0.2
│ │ │ └─┬ yargs@3.10.0
│ │ │   ├── camelcase@1.2.1
│ │ │   ├─┬ cliui@2.1.0
│ │ │   │ ├─┬ center-align@0.1.3
│ │ │   │ │ ├─┬ align-text@0.1.4
│ │ │   │ │ │ ├── kind-of@3.2.2 deduped
│ │ │   │ │ │ ├── longest@1.0.1
│ │ │   │ │ │ └── repeat-string@1.6.1 deduped
│ │ │   │ │ └── lazy-cache@1.0.4
│ │ │   │ ├─┬ right-align@0.1.3
│ │ │   │ │ └── align-text@0.1.4 deduped
│ │ │   │ └── wordwrap@0.0.2
│ │ │   ├── decamelize@1.2.0 deduped
│ │ │   └── window-size@0.1.0
│ │ └── webpack-sources@1.0.2 deduped
│ ├─┬ watchpack@1.4.0
│ │ ├─┬ async@2.5.0
│ │ │ └── lodash@4.17.4 deduped
│ │ ├── chokidar@1.7.0 deduped
│ │ └── graceful-fs@4.1.11 deduped
│ ├─┬ webpack-sources@1.0.2
│ │ ├── source-list-map@2.0.0
│ │ └── source-map@0.6.1
│ └─┬ yargs@8.0.2
│   ├── camelcase@4.1.0
│   ├─┬ cliui@3.2.0
│   │ ├── string-width@1.0.2 deduped
│   │ ├── strip-ansi@3.0.1 deduped
│   │ └─┬ wrap-ansi@2.1.0
│   │   ├── string-width@1.0.2 deduped
│   │   └── strip-ansi@3.0.1 deduped
│   ├── decamelize@1.2.0
│   ├── get-caller-file@1.0.2
│   ├─┬ os-locale@2.1.0
│   │ ├─┬ execa@0.7.0
│   │ │ ├─┬ cross-spawn@5.1.0
│   │ │ │ ├─┬ lru-cache@4.1.1
│   │ │ │ │ ├── pseudomap@1.0.2
│   │ │ │ │ └── yallist@2.1.2
│   │ │ │ ├─┬ shebang-command@1.2.0
│   │ │ │ │ └── shebang-regex@1.0.0
│   │ │ │ └─┬ which@1.3.0
│   │ │ │   └── isexe@2.0.0
│   │ │ ├── get-stream@3.0.0
│   │ │ ├── is-stream@1.1.0 deduped
│   │ │ ├─┬ npm-run-path@2.0.2
│   │ │ │ └── path-key@2.0.1
│   │ │ ├── p-finally@1.0.0
│   │ │ ├── signal-exit@3.0.2
│   │ │ └── strip-eof@1.0.0
│   │ ├─┬ lcid@1.0.0
│   │ │ └── invert-kv@1.0.0
│   │ └─┬ mem@1.1.0
│   │   └── mimic-fn@1.1.0
│   ├─┬ read-pkg-up@2.0.0
│   │ ├── find-up@2.1.0 deduped
│   │ └─┬ read-pkg@2.0.0
│   │   ├─┬ load-json-file@2.0.0
│   │   │ ├── graceful-fs@4.1.11 deduped
│   │   │ ├─┬ parse-json@2.2.0
│   │   │ │ └─┬ error-ex@1.3.1
│   │   │ │   └── is-arrayish@0.2.1
│   │   │ ├── pify@2.3.0
│   │   │ └── strip-bom@3.0.0
│   │   ├── normalize-package-data@2.4.0 deduped
│   │   └─┬ path-type@2.0.0
│   │     └── pify@2.3.0 deduped
│   ├── require-directory@2.1.1
│   ├── require-main-filename@1.0.1
│   ├── set-blocking@2.0.0
│   ├─┬ string-width@2.1.1
│   │ ├── is-fullwidth-code-point@2.0.0
│   │ └─┬ strip-ansi@4.0.0
│   │   └── ansi-regex@3.0.0
│   ├── which-module@2.0.0
│   ├── y18n@3.2.1
│   └─┬ yargs-parser@7.0.0
│     └── camelcase@4.1.0 deduped
└─┬ webpack-dev-server@2.9.4
  ├── ansi-html@0.0.7
  ├─┬ array-includes@3.0.3
  │ ├─┬ define-properties@1.1.2
  │ │ ├── foreach@2.0.5
  │ │ └── object-keys@1.0.11
  │ └─┬ es-abstract@1.9.0
  │   ├─┬ es-to-primitive@1.1.1
  │   │ ├── is-callable@1.1.3 deduped
  │   │ ├── is-date-object@1.0.1
  │   │ └── is-symbol@1.0.1
  │   ├── function-bind@1.1.1
  │   ├─┬ has@1.0.1
  │   │ └── function-bind@1.1.1 deduped
  │   ├── is-callable@1.1.3
  │   └─┬ is-regex@1.0.4
  │     └── has@1.0.1 deduped
  ├─┬ bonjour@3.5.0
  │ ├── array-flatten@2.1.1
  │ ├── deep-equal@1.0.1
  │ ├── dns-equal@1.0.0
  │ ├─┬ dns-txt@2.0.2
  │ │ └── buffer-indexof@1.1.1
  │ ├─┬ multicast-dns@6.1.1
  │ │ ├─┬ dns-packet@1.2.2
  │ │ │ ├── ip@1.1.5 deduped
  │ │ │ └── safe-buffer@5.1.1 deduped
  │ │ └── thunky@0.1.0
  │ └── multicast-dns-service-types@1.1.0
  ├─┬ chokidar@1.7.0
  │ ├─┬ anymatch@1.3.2
  │ │ ├── micromatch@2.3.11 deduped
  │ │ └─┬ normalize-path@2.1.1
  │ │   └── remove-trailing-separator@1.1.0
  │ ├── async-each@1.0.1
  │ ├─┬ fsevents@1.1.2
  │ │ ├── nan@2.7.0 deduped
  │ │ └─┬ node-pre-gyp@0.6.36
  │ │   ├─┬ mkdirp@0.5.1
  │ │   │ └── minimist@0.0.8
  │ │   ├─┬ nopt@4.0.1
  │ │   │ ├── abbrev@1.1.0
  │ │   │ └─┬ osenv@0.1.4
  │ │   │   ├── os-homedir@1.0.2
  │ │   │   └── os-tmpdir@1.0.2
  │ │   ├─┬ npmlog@4.1.0
  │ │   │ ├─┬ are-we-there-yet@1.1.4
  │ │   │ │ ├── delegates@1.0.0
  │ │   │ │ └── readable-stream@2.2.9 deduped
  │ │   │ ├── console-control-strings@1.1.0
  │ │   │ ├─┬ gauge@2.7.4
  │ │   │ │ ├── aproba@1.1.1
  │ │   │ │ ├── console-control-strings@1.1.0 deduped
  │ │   │ │ ├── has-unicode@2.0.1
  │ │   │ │ ├── object-assign@4.1.1
  │ │   │ │ ├── signal-exit@3.0.2
  │ │   │ │ ├─┬ string-width@1.0.2
  │ │   │ │ │ ├── code-point-at@1.1.0
  │ │   │ │ │ ├─┬ is-fullwidth-code-point@1.0.0
  │ │   │ │ │ │ └── number-is-nan@1.0.1
  │ │   │ │ │ └── strip-ansi@3.0.1 deduped
  │ │   │ │ ├─┬ strip-ansi@3.0.1
  │ │   │ │ │ └── ansi-regex@2.1.1
  │ │   │ │ └─┬ wide-align@1.1.2
  │ │   │ │   └── string-width@1.0.2 deduped
  │ │   │ └── set-blocking@2.0.0
  │ │   ├─┬ rc@1.2.1
  │ │   │ ├── deep-extend@0.4.2
  │ │   │ ├── ini@1.3.4
  │ │   │ ├── minimist@1.2.0
  │ │   │ └── strip-json-comments@2.0.1
  │ │   ├─┬ request@2.81.0
  │ │   │ ├── aws-sign2@0.6.0
  │ │   │ ├── aws4@1.6.0
  │ │   │ ├── caseless@0.12.0
  │ │   │ ├─┬ combined-stream@1.0.5
  │ │   │ │ └── delayed-stream@1.0.0
  │ │   │ ├── extend@3.0.1
  │ │   │ ├── forever-agent@0.6.1
  │ │   │ ├─┬ form-data@2.1.4
  │ │   │ │ ├── asynckit@0.4.0
  │ │   │ │ ├── combined-stream@1.0.5 deduped
  │ │   │ │ └── mime-types@2.1.15 deduped
  │ │   │ ├─┬ har-validator@4.2.1
  │ │   │ │ ├─┬ ajv@4.11.8
  │ │   │ │ │ ├── co@4.6.0
  │ │   │ │ │ └─┬ json-stable-stringify@1.0.1
  │ │   │ │ │   └── jsonify@0.0.0
  │ │   │ │ └── har-schema@1.0.5
  │ │   │ ├─┬ hawk@3.1.3
  │ │   │ │ ├─┬ boom@2.10.1
  │ │   │ │ │ └── hoek@2.16.3 deduped
  │ │   │ │ ├─┬ cryptiles@2.0.5
  │ │   │ │ │ └── boom@2.10.1 deduped
  │ │   │ │ ├── hoek@2.16.3
  │ │   │ │ └─┬ sntp@1.0.9
  │ │   │ │   └── hoek@2.16.3 deduped
  │ │   │ ├─┬ http-signature@1.1.1
  │ │   │ │ ├── assert-plus@0.2.0
  │ │   │ │ ├─┬ jsprim@1.4.0
  │ │   │ │ │ ├── assert-plus@1.0.0
  │ │   │ │ │ ├── extsprintf@1.0.2
  │ │   │ │ │ ├── json-schema@0.2.3
  │ │   │ │ │ └─┬ verror@1.3.6
  │ │   │ │ │   └── extsprintf@1.0.2 deduped
  │ │   │ │ └─┬ sshpk@1.13.0
  │ │   │ │   ├── asn1@0.2.3
  │ │   │ │   ├── assert-plus@1.0.0
  │ │   │ │   ├─┬ bcrypt-pbkdf@1.0.1
  │ │   │ │   │ └── tweetnacl@0.14.5 deduped
  │ │   │ │   ├─┬ dashdash@1.14.1
  │ │   │ │   │ └── assert-plus@1.0.0
  │ │   │ │   ├─┬ ecc-jsbn@0.1.1
  │ │   │ │   │ └── jsbn@0.1.1 deduped
  │ │   │ │   ├─┬ getpass@0.1.7
  │ │   │ │   │ └── assert-plus@1.0.0
  │ │   │ │   ├─┬ jodid25519@1.0.2
  │ │   │ │   │ └── jsbn@0.1.1 deduped
  │ │   │ │   ├── jsbn@0.1.1
  │ │   │ │   └── tweetnacl@0.14.5
  │ │   │ ├── is-typedarray@1.0.0
  │ │   │ ├── isstream@0.1.2
  │ │   │ ├── json-stringify-safe@5.0.1
  │ │   │ ├─┬ mime-types@2.1.15
  │ │   │ │ └── mime-db@1.27.0
  │ │   │ ├── oauth-sign@0.8.2
  │ │   │ ├── performance-now@0.2.0
  │ │   │ ├── qs@6.4.0
  │ │   │ ├── safe-buffer@5.0.1
  │ │   │ ├── stringstream@0.0.5
  │ │   │ ├─┬ tough-cookie@2.3.2
  │ │   │ │ └── punycode@1.4.1
  │ │   │ ├─┬ tunnel-agent@0.6.0
  │ │   │ │ └── safe-buffer@5.0.1 deduped
  │ │   │ └── uuid@3.0.1
  │ │   ├─┬ rimraf@2.6.1
  │ │   │ └─┬ glob@7.1.2
  │ │   │   ├── fs.realpath@1.0.0
  │ │   │   ├─┬ inflight@1.0.6
  │ │   │   │ ├── once@1.4.0 deduped
  │ │   │   │ └── wrappy@1.0.2 deduped
  │ │   │   ├── inherits@2.0.3 deduped
  │ │   │   ├─┬ minimatch@3.0.4
  │ │   │   │ └─┬ brace-expansion@1.1.7
  │ │   │   │   ├── balanced-match@0.4.2
  │ │   │   │   └── concat-map@0.0.1
  │ │   │   ├── once@1.4.0 deduped
  │ │   │   └── path-is-absolute@1.0.1
  │ │   ├── semver@5.3.0
  │ │   ├─┬ tar@2.2.1
  │ │   │ ├─┬ block-stream@0.0.9
  │ │   │ │ └── inherits@2.0.3 deduped
  │ │   │ ├─┬ fstream@1.0.11
  │ │   │ │ ├── graceful-fs@4.1.11
  │ │   │ │ ├── inherits@2.0.3 deduped
  │ │   │ │ ├── mkdirp@0.5.1 deduped
  │ │   │ │ └── rimraf@2.6.1 deduped
  │ │   │ └── inherits@2.0.3
  │ │   └─┬ tar-pack@3.4.0
  │ │     ├─┬ debug@2.6.8
  │ │     │ └── ms@2.0.0
  │ │     ├── fstream@1.0.11 deduped
  │ │     ├─┬ fstream-ignore@1.0.5
  │ │     │ ├── fstream@1.0.11 deduped
  │ │     │ ├── inherits@2.0.3 deduped
  │ │     │ └── minimatch@3.0.4 deduped
  │ │     ├─┬ once@1.4.0
  │ │     │ └── wrappy@1.0.2
  │ │     ├─┬ readable-stream@2.2.9
  │ │     │ ├── buffer-shims@1.0.0
  │ │     │ ├── core-util-is@1.0.2
  │ │     │ ├── inherits@2.0.3 deduped
  │ │     │ ├── isarray@1.0.0
  │ │     │ ├── process-nextick-args@1.0.7
  │ │     │ ├─┬ string_decoder@1.0.1
  │ │     │ │ └── safe-buffer@5.0.1 deduped
  │ │     │ └── util-deprecate@1.0.2
  │ │     ├── rimraf@2.6.1 deduped
  │ │     ├── tar@2.2.1 deduped
  │ │     └── uid-number@0.0.6
  │ ├─┬ glob-parent@2.0.0
  │ │ └── is-glob@2.0.1 deduped
  │ ├── inherits@2.0.3 deduped
  │ ├─┬ is-binary-path@1.0.1
  │ │ └── binary-extensions@1.10.0
  │ ├─┬ is-glob@2.0.1
  │ │ └── is-extglob@1.0.0
  │ ├── path-is-absolute@1.0.1 deduped
  │ └─┬ readdirp@2.1.0
  │   ├── graceful-fs@4.1.11 deduped
  │   ├── minimatch@3.0.4 deduped
  │   ├── readable-stream@2.3.3 deduped
  │   └── set-immediate-shim@1.0.1
  ├─┬ compression@1.7.1
  │ ├─┬ accepts@1.3.4
  │ │ ├── mime-types@2.1.17 deduped
  │ │ └── negotiator@0.6.1
  │ ├── bytes@3.0.0 deduped
  │ ├─┬ compressible@2.0.12
  │ │ └── mime-db@1.30.0 deduped
  │ ├─┬ debug@2.6.9
  │ │ └── ms@2.0.0 deduped
  │ ├── on-headers@1.0.1
  │ ├── safe-buffer@5.1.1
  │ └── vary@1.1.2
  ├── connect-history-api-fallback@1.4.0
  ├── debug@3.1.0 deduped
  ├─┬ del@3.0.0
  │ ├─┬ globby@6.1.0
  │ │ ├─┬ array-union@1.0.2
  │ │ │ └── array-uniq@1.0.3
  │ │ ├── glob@7.1.2 deduped
  │ │ ├── object-assign@4.1.1 deduped
  │ │ ├── pify@2.3.0
  │ │ └─┬ pinkie-promise@2.0.1
  │ │   └── pinkie@2.0.4
  │ ├── is-path-cwd@1.0.0
  │ ├─┬ is-path-in-cwd@1.0.0
  │ │ └─┬ is-path-inside@1.0.0
  │ │   └── path-is-inside@1.0.2
  │ ├── p-map@1.2.0
  │ ├── pify@3.0.0
  │ └─┬ rimraf@2.6.2
  │   └── glob@7.1.2 deduped
  ├─┬ express@4.16.2
  │ ├── accepts@1.3.4 deduped
  │ ├── array-flatten@1.1.1
  │ ├── body-parser@1.18.2 deduped
  │ ├── content-disposition@0.5.2
  │ ├── content-type@1.0.4 deduped
  │ ├── cookie@0.3.1
  │ ├── cookie-signature@1.0.6
  │ ├─┬ debug@2.6.9
  │ │ └── ms@2.0.0 deduped
  │ ├── depd@1.1.1 deduped
  │ ├── encodeurl@1.0.1
  │ ├── escape-html@1.0.3
  │ ├── etag@1.8.1
  │ ├─┬ finalhandler@1.1.0
  │ │ ├─┬ debug@2.6.9
  │ │ │ └── ms@2.0.0 deduped
  │ │ ├── encodeurl@1.0.1 deduped
  │ │ ├── escape-html@1.0.3 deduped
  │ │ ├── on-finished@2.3.0 deduped
  │ │ ├── parseurl@1.3.2 deduped
  │ │ ├── statuses@1.3.1 deduped
  │ │ └── unpipe@1.0.0 deduped
  │ ├── fresh@0.5.2
  │ ├── merge-descriptors@1.0.1
  │ ├── methods@1.1.2
  │ ├── on-finished@2.3.0 deduped
  │ ├── parseurl@1.3.2
  │ ├── path-to-regexp@0.1.7
  │ ├─┬ proxy-addr@2.0.2
  │ │ ├── forwarded@0.1.2
  │ │ └── ipaddr.js@1.5.2
  │ ├── qs@6.5.1 deduped
  │ ├── range-parser@1.2.0
  │ ├── safe-buffer@5.1.1 deduped
  │ ├─┬ send@0.16.1
  │ │ ├─┬ debug@2.6.9
  │ │ │ └── ms@2.0.0 deduped
  │ │ ├── depd@1.1.1 deduped
  │ │ ├── destroy@1.0.4
  │ │ ├── encodeurl@1.0.1 deduped
  │ │ ├── escape-html@1.0.3 deduped
  │ │ ├── etag@1.8.1 deduped
  │ │ ├── fresh@0.5.2 deduped
  │ │ ├── http-errors@1.6.2 deduped
  │ │ ├── mime@1.4.1 deduped
  │ │ ├── ms@2.0.0 deduped
  │ │ ├── on-finished@2.3.0 deduped
  │ │ ├── range-parser@1.2.0 deduped
  │ │ └── statuses@1.3.1 deduped
  │ ├─┬ serve-static@1.13.1
  │ │ ├── encodeurl@1.0.1 deduped
  │ │ ├── escape-html@1.0.3 deduped
  │ │ ├── parseurl@1.3.2 deduped
  │ │ └── send@0.16.1 deduped
  │ ├── setprototypeof@1.1.0
  │ ├── statuses@1.3.1 deduped
  │ ├── type-is@1.6.15 deduped
  │ ├── utils-merge@1.0.1
  │ └── vary@1.1.2 deduped
  ├── html-entities@1.2.1
  ├─┬ http-proxy-middleware@0.17.4
  │ ├─┬ http-proxy@1.16.2
  │ │ ├── eventemitter3@1.2.0
  │ │ └── requires-port@1.0.0
  │ ├─┬ is-glob@3.1.0
  │ │ └── is-extglob@2.1.1
  │ ├── lodash@4.17.4 deduped
  │ └─┬ micromatch@2.3.11
  │   ├─┬ arr-diff@2.0.0
  │   │ └── arr-flatten@1.1.0
  │   ├── array-unique@0.2.1
  │   ├─┬ braces@1.8.5
  │   │ ├─┬ expand-range@1.8.2
  │   │ │ └─┬ fill-range@2.2.3
  │   │ │   ├─┬ is-number@2.1.0
  │   │ │   │ └── kind-of@3.2.2 deduped
  │   │ │   ├─┬ isobject@2.1.0
  │   │ │   │ └── isarray@1.0.0 deduped
  │   │ │   ├─┬ randomatic@1.1.7
  │   │ │   │ ├─┬ is-number@3.0.0
  │   │ │   │ │ └─┬ kind-of@3.2.2
  │   │ │   │ │   └── is-buffer@1.1.6 deduped
  │   │ │   │ └─┬ kind-of@4.0.0
  │   │ │   │   └── is-buffer@1.1.6 deduped
  │   │ │   ├── repeat-element@1.1.2 deduped
  │   │ │   └── repeat-string@1.6.1
  │   │ ├── preserve@0.2.0
  │   │ └── repeat-element@1.1.2
  │   ├─┬ expand-brackets@0.1.5
  │   │ └── is-posix-bracket@0.1.1
  │   ├─┬ extglob@0.3.2
  │   │ └── is-extglob@1.0.0 deduped
  │   ├── filename-regex@2.0.1
  │   ├── is-extglob@1.0.0 deduped
  │   ├── is-glob@2.0.1 deduped
  │   ├─┬ kind-of@3.2.2
  │   │ └── is-buffer@1.1.6 deduped
  │   ├── normalize-path@2.1.1 deduped
  │   ├─┬ object.omit@2.0.1
  │   │ ├─┬ for-own@0.1.5
  │   │ │ └── for-in@1.0.2
  │   │ └── is-extendable@0.1.1
  │   ├─┬ parse-glob@3.0.4
  │   │ ├─┬ glob-base@0.3.0
  │   │ │ ├── glob-parent@2.0.0 deduped
  │   │ │ └── is-glob@2.0.1 deduped
  │   │ ├── is-dotfile@1.0.3
  │   │ ├── is-extglob@1.0.0 deduped
  │   │ └── is-glob@2.0.1 deduped
  │   └─┬ regex-cache@0.4.4
  │     └─┬ is-equal-shallow@0.1.3
  │       └── is-primitive@2.0.0
  ├─┬ import-local@0.1.1
  │ ├── pkg-dir@2.0.0 deduped
  │ └─┬ resolve-cwd@2.0.0
  │   └── resolve-from@3.0.0
  ├─┬ internal-ip@1.2.0
  │ └─┬ meow@3.7.0
  │   ├─┬ camelcase-keys@2.1.0
  │   │ ├── camelcase@2.1.1
  │   │ └── map-obj@1.0.1 deduped
  │   ├── decamelize@1.2.0 deduped
  │   ├─┬ loud-rejection@1.6.0
  │   │ ├─┬ currently-unhandled@0.4.1
  │   │ │ └── array-find-index@1.0.2
  │   │ └── signal-exit@3.0.2 deduped
  │   ├── map-obj@1.0.1
  │   ├── minimist@1.2.0
  │   ├─┬ normalize-package-data@2.4.0
  │   │ ├── hosted-git-info@2.5.0
  │   │ ├─┬ is-builtin-module@1.0.0
  │   │ │ └── builtin-modules@1.1.1
  │   │ ├── semver@5.4.1 deduped
  │   │ └─┬ validate-npm-package-license@3.0.1
  │   │   ├─┬ spdx-correct@1.0.2
  │   │   │ └── spdx-license-ids@1.2.2
  │   │   └── spdx-expression-parse@1.0.4
  │   ├── object-assign@4.1.1 deduped
  │   ├── read-pkg-up@1.0.1 deduped
  │   ├─┬ redent@1.0.0
  │   │ ├─┬ indent-string@2.1.0
  │   │ │ └── repeating@2.0.1 deduped
  │   │ └─┬ strip-indent@1.0.1
  │   │   └── get-stdin@4.0.1
  │   └── trim-newlines@1.0.0
  ├── ip@1.1.5
  ├── killable@1.0.0
  ├── loglevel@1.5.1
  ├─┬ opn@5.1.0
  │ └── is-wsl@1.1.0
  ├─┬ portfinder@1.0.13
  │ ├── async@1.5.2
  │ ├─┬ debug@2.6.9
  │ │ └── ms@2.0.0 deduped
  │ └── mkdirp@0.5.1 deduped
  ├─┬ selfsigned@1.10.1
  │ └── node-forge@0.6.33
  ├─┬ serve-index@1.9.1
  │ ├── accepts@1.3.4 deduped
  │ ├── batch@0.6.1
  │ ├─┬ debug@2.6.9
  │ │ └── ms@2.0.0 deduped
  │ ├── escape-html@1.0.3 deduped
  │ ├── http-errors@1.6.2 deduped
  │ ├── mime-types@2.1.17 deduped
  │ └── parseurl@1.3.2 deduped
  ├─┬ sockjs@0.3.18
  │ ├─┬ faye-websocket@0.10.0
  │ │ └─┬ websocket-driver@0.7.0
  │ │   ├── http-parser-js@0.4.9
  │ │   └── websocket-extensions@0.1.2
  │ └── uuid@2.0.3
  ├─┬ sockjs-client@1.1.4
  │ ├─┬ debug@2.6.9
  │ │ └── ms@2.0.0 deduped
  │ ├─┬ eventsource@0.1.6
  │ │ └─┬ original@1.0.0
  │ │   └─┬ url-parse@1.0.5
  │ │     ├── querystringify@0.0.4
  │ │     └── requires-port@1.0.0 deduped
  │ ├─┬ faye-websocket@0.11.1
  │ │ └── websocket-driver@0.7.0 deduped
  │ ├── inherits@2.0.3 deduped
  │ ├── json3@3.3.2
  │ └─┬ url-parse@1.2.0
  │   ├── querystringify@1.0.0
  │   └── requires-port@1.0.0 deduped
  ├─┬ spdy@3.4.7
  │ ├─┬ debug@2.6.9
  │ │ └── ms@2.0.0 deduped
  │ ├── handle-thing@1.2.5
  │ ├── http-deceiver@1.2.7
  │ ├── safe-buffer@5.1.1 deduped
  │ ├── select-hose@2.0.0
  │ └─┬ spdy-transport@2.0.20
  │   ├─┬ debug@2.6.9
  │   │ └── ms@2.0.0 deduped
  │   ├── detect-node@2.0.3
  │   ├─┬ hpack.js@2.1.6
  │   │ ├── inherits@2.0.3 deduped
  │   │ ├── obuf@1.1.1 deduped
  │   │ ├── readable-stream@2.3.3 deduped
  │   │ └── wbuf@1.7.2 deduped
  │   ├── obuf@1.1.1
  │   ├── readable-stream@2.3.3 deduped
  │   ├── safe-buffer@5.1.1 deduped
  │   └─┬ wbuf@1.7.2
  │     └── minimalistic-assert@1.0.0
  ├─┬ strip-ansi@3.0.1
  │ └── ansi-regex@2.1.1
  ├── supports-color@4.5.0 deduped
  ├─┬ webpack-dev-middleware@1.12.0
  │ ├── memory-fs@0.4.1 deduped
  │ ├── mime@1.4.1
  │ ├── path-is-absolute@1.0.1 deduped
  │ ├── range-parser@1.2.0 deduped
  │ └── time-stamp@2.0.0
  └─┬ yargs@6.6.0
    ├── camelcase@3.0.0
    ├── cliui@3.2.0 deduped
    ├── decamelize@1.2.0 deduped
    ├── get-caller-file@1.0.2 deduped
    ├─┬ os-locale@1.4.0
    │ └── lcid@1.0.0 deduped
    ├─┬ read-pkg-up@1.0.1
    │ ├─┬ find-up@1.1.2
    │ │ ├─┬ path-exists@2.1.0
    │ │ │ └── pinkie-promise@2.0.1 deduped
    │ │ └── pinkie-promise@2.0.1 deduped
    │ └─┬ read-pkg@1.1.0
    │   ├─┬ load-json-file@1.1.0
    │   │ ├── graceful-fs@4.1.11 deduped
    │   │ ├── parse-json@2.2.0 deduped
    │   │ ├── pify@2.3.0
    │   │ ├── pinkie-promise@2.0.1 deduped
    │   │ └─┬ strip-bom@2.0.0
    │   │   └── is-utf8@0.2.1
    │   ├── normalize-package-data@2.4.0 deduped
    │   └─┬ path-type@1.1.0
    │     ├── graceful-fs@4.1.11 deduped
    │     ├── pify@2.3.0
    │     └── pinkie-promise@2.0.1 deduped
    ├── require-directory@2.1.1 deduped
    ├── require-main-filename@1.0.1 deduped
    ├── set-blocking@2.0.0 deduped
    ├─┬ string-width@1.0.2
    │ ├── code-point-at@1.1.0
    │ ├─┬ is-fullwidth-code-point@1.0.0
    │ │ └── number-is-nan@1.0.1
    │ └── strip-ansi@3.0.1 deduped
    ├── which-module@1.0.0
    ├── y18n@3.2.1 deduped
    └─┬ yargs-parser@4.2.1
      └── camelcase@3.0.0`;

module.exports = npmLibraries
