<template>
  <div id="app" class="container">
    <h1>vue-octicons</h1>
    <h2>All Icons with Random Colors</h2>
    <section class="row">
      <div v-for="icon in iconList" class="col-md-1">
        <octicon :icon-name="icon.name" :class="icon.cssClass"></octicon>
      </div>
    </section>
    <h2>Icons in Specific Contexts</h2>
    <section class="row">
      <div class="col-md-6">
        <p>This is a test of an icon in a paragraph. <octicon :icon-name="iconList[6].name"></octicon> is an icon. Here is a sentence that spaces out the two icons in this paragraph. This sentence is followed by another icon <octicon :icon-name="iconList[34].name"></octicon>. Those are some great icons.</p>
        <p>This is a test of an icon in a paragraph. <span class="fa fa-caret-right"></span> is an icon. Here is a sentence that spaces out the two icons in this paragraph. This sentence is followed by another icon <span class="fa fa-credit-card"></span>. Those are some great icons.</p>
      </div>
      <div class="col-md-3">
        <h1><octicon :icon-name="iconList[6].name"></octicon> Warning</h1>
        <h1><span class="fa fa-caret-right"></span> Warning</h1>
        <h1><octicon icon-name="alert"></octicon> Warning</h1>
        <h1><span class="fa fa-warning"></span> Warning</h1>
        <h2><octicon :icon-name="iconList[6].name"></octicon> Warning</h2>
        <h2><span class="fa fa-caret-right"></span> Warning</h2>
        <h2><octicon icon-name="alert"></octicon> Warning</h2>
        <h2><span class="fa fa-warning"></span> Warning</h2>
      </div>
      <div class="col-md-3">
        <h3><octicon :icon-name="iconList[6].name"></octicon> Warning</h3>
        <h3><span class="fa fa-caret-right"></span> Warning</h3>
        <h3><octicon icon-name="alert"></octicon> Warning</h3>
        <h3><span class="fa fa-warning"></span> Warning</h3>
        <h4><octicon :icon-name="iconList[6].name"></octicon> Warning</h4>
        <h4><span class="fa fa-caret-right"></span> Warning</h4>
        <h4><octicon icon-name="alert"></octicon> Warning</h4>
        <h4><span class="fa fa-warning"></span> Warning</h4>
        <h5><octicon :icon-name="iconList[6].name"></octicon> Warning</h5>
        <h5><span class="fa fa-caret-right"></span> Warning</h5>
        <h5><octicon icon-name="alert"></octicon> Warning</h5>
        <h5><span class="fa fa-warning"></span> Warning</h5>
        <h6><octicon :icon-name="iconList[6].name"></octicon> Warning</h6>
        <h6><span class="fa fa-caret-right"></span> Warning</h6>
        <h6><octicon icon-name="alert"></octicon> Warning</h6>
        <h6><span class="fa fa-warning"></span> Warning</h6>
      </div>
      <div class="col-md-6">
        <octicon></octicon>
      </div>
      <div class="col-md-6">
        <octicon></octicon>
      </div>
      <div class="col-md-6">
        <octicon></octicon>
      </div>
      <div class="col-md-6">
        <octicon></octicon>
      </div>
    </section>
  </div>
</template>

<script>
 import Octicon from './components/Octicon';

export default {
   name: 'app',
   components: {
     Octicon,
   },
   computed: {
     iconList() {
       const iconObjects = [];
       const sampleClasses = ['text-default', 'text-muted', 'text-default', 'text-info', 'text-default',
         'text-warning', 'text-default', 'text-danger', 'text-default', 'text-success'];
       for (let index = 0; index < this.icons.length; index += 1) {
         iconObjects.push({
           name: this.icons[index],
           cssClass: sampleClasses[Math.floor(Math.random() * sampleClasses.length)],
         });
       }
       return iconObjects;
     },
   },
   data() {
     return {
       icons: [
         'alert', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-small-down', 'arrow-small-left',
         'arrow-small-right', 'arrow-small-up', 'arrow-up', 'beaker', 'bell', 'bold', 'book', 'bookmark',
         'briefcase', 'broadcast', 'browser', 'bug', 'calendar', 'check', 'checklist', 'chevron-down',
         'chevron-left', 'chevron-right', 'chevron-up', 'circle-slash', 'circuit-board', 'clippy', 'clock',
         'cloud-download', 'cloud-upload', 'code', 'comment-discussion', 'comment', 'credit-card', 'dash',
         'dashboard', 'database', 'desktop-download', 'device-camera', 'device-camera-video', 'device-desktop',
         'device-mobile', 'diff-added', 'diff', 'diff-ignored', 'diff-modified', 'diff-removed', 'diff-renamed',
         'ellipses', 'ellipsis', 'eye', 'file-binary', 'file-code', 'file-directory', 'file', 'file-media',
         'file-pdf', 'file-submodule', 'file-symlink-directory', 'file-symlink-file', 'file-text', 'file-zip',
         'flame', 'fold', 'gear', 'gift', 'gist', 'gist-secret', 'git-branch', 'git-commit', 'git-compare',
         'git-merge', 'git-pull-request', 'globe', 'grabber', 'graph', 'heart', 'history', 'home', 'horizontal-rule',
         'hubot', 'inbox', 'info', 'issue-closed', 'issue-opened', 'issue-reopened', 'italic', 'jersey', 'key',
         'keyboard', 'law', 'light-bulb', 'link-external', 'link', 'list-ordered', 'list-unordered', 'location',
         'lock', 'logo-gist', 'logo-github', 'mail', 'mail-read', 'mail-reply', 'mark-github', 'markdown',
         'megaphone', 'mention', 'milestone', 'mirror', 'mortar-board', 'mute', 'no-newline', 'note', 'octoface',
         'organization', 'package', 'paintcan', 'pencil', 'person', 'pin', 'plug', 'plus', 'plus-small',
         'primitive-dot', 'primitive-square', 'project', 'pulse', 'question', 'quote', 'radio-tower', 'reply',
         'repo-clone', 'repo-force-push', 'repo-forked', 'repo', 'repo-pull', 'repo-push', 'rocket', 'rss', 'ruby',
         'screen-full', 'screen-normal', 'search', 'server', 'settings', 'shield', 'sign-in', 'sign-out', 'smiley',
         'squirrel', 'star', 'stop', 'sync', 'tag', 'tasklist', 'telescope', 'terminal', 'text-size', 'three-bars',
         'thumbsdown', 'thumbsup', 'tools', 'trashcan', 'triangle-down', 'triangle-left', 'triangle-right',
         'triangle-up', 'unfold', 'unmute', 'unverified', 'verified', 'versions', 'watch', 'x', 'zap',
       ],
     };
   },
};
</script>
