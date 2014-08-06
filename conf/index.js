var conf = {
  title: 'Organization',
  description: 'Happiness lies in the joy of achievement and the thrill of creative effort.',
  pages: [
    {
      title: 'About',
      path: '/about'
    },
    {
      title: 'Issues',
      path: '/issues'
    },
    {
      title: 'Join',
      path: '/join'
    },
    {
      title: 'Contact',
      path: '/contact'
    }
  ],
  styles: [
    {'path':'/css/app.css'}
  ],
  scripts: [
    {'path':'vendor/require.js'},
    {'path':'js/config.js'}
  ]
}
module.exports = function(mode) {
    return conf;
}
