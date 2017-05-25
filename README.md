# vue-octicons

[![npm version](https://badge.fury.io/js/vue-octicons.svg)](https://badge.fury.io/js/vue-octicons)

> A [GitHub Octicons](https://octicons.github.com/) component for
[Vue.js](https://vuejs.org/).

**Quick Note:** This is my first NPM package, and I'm a PHP developer primarily.
I needed this for an application and couldn't get
[Justineo/vue-octicon](https://github.com/Justineo/vue-octicon) to work for me. I used
the [webpack template for VueJS](https://github.com/vuejs-templates/webpack), and 
while there are e2e and unit tests, these are currently just the sample tests that
came with the template. Any suggestions and contributions are greatly appreciated.

## Installation

### NPM

``` bash
 npm install vue-octicon
```

## Loading the component

``` javascript

// Registers the component globally.
Vue.component('octicon', require('vue-octicons/src/components/Octicon.vue'));

```

## Using the component

The `<octicon>` component will output an `<svg>` tag. In order for an icon to appear
you must include `icon-name`  attribute.  The icon name much match the
[symbol of an octicon](https://github.com/primer/octicons#octiconsalertsymbol). 

By default the following attributes are set on the `<svg>` tag:
- `version="1.1"`
- `aria-hidden="true"`
- `role="presentation"`

By default the the following classes are added to the `class` attribute of
the `<svg>` tag:
- `octicon`
- `octicon-[icon name]`

In an effort to keep the usage of **octicons** similar to the usage of FontAwesome
icons the `height`, `width` and `viewBox` attributes are calculated based on the
container's font size.

The `viewBox` attribute is set to `'0 0 svg-width svg-height'`. The svg-width and
height are the dimensions of the icon within the svg path. 

The `height` attribute is set to the `font-height` of the `<svg>`.

The `width` attribute is calculated multiplying `height` by the aspect ratio of the
icon.

```javascript
    width = height * (svg-width / svg-height);
```

## Build Setup

``` bash# install dependenciesnpm install
# serve with hot reload at localhost:8080npm run dev
# build demo with minificationnpm run build
# build demo and view the bundle analyzer reportnpm run build --report
# run unit tests - currently just template sample tests.npm run unit
# run e2e tests - currently just template sample tests.npm run e2e
# run all tests - currently just template sample tests.npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
