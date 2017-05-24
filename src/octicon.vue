<template>
        <svg version="1.1" aria-hidden="true" role="presentation" :class="cssClasses" :icon-name="iconName" :extra-css-classes="extraCssClasses"
             :width="width" :height="height" :viewBox="viewBox" v-html="iconPath">
        </svg>
</template>

<script>
    let octicons = require("octicons");

    export default {
        name: 'octicon',
        props: {
            iconName: {
                type: String,
                validator (value) {
                    if (value) {
                        if (octicons[value]) {
                            return true;
                        }
                        Vue.util.warn(value + ' is not a valid octicon icon-name.', this);
                        return false;
                    }
                    Vue.util.warn('You must specify an octicon icon-name.', this);
                    return null;
                }
            },
            extraCssClasses: {
                type: String,
                default: function () {
                    return '';
                }
            },
            width: {
                type: [Number, String],
                default: function () {
                    return 12;
                }
            },
            height: {
                type: [Number, String],
                default: function () {
                    return 16;
                }
            },
            viewBox: {
                type: String,
                default: function () {
                    return '0 0 12 16';
                }
            }
        },
        computed: {
            // Add the default CSS class, the icon CSS class and any extra CSS classes together.
            cssClasses: function () {
                return 'octicon ' + 'octicon-' + this.iconName + ' ' + this.extraCssClasses;
            },
            // Get the icon's path tag.
            iconPath: function () {
                return octicon[this.iconName].path;
            }
        }
    }
</script>

<style>
    .octicon {
        display: inline-block;
        vertical-align: text-top;
        fill: currentColor;
    }
</style>