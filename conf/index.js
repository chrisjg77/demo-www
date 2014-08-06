var conf = {
  title: 'The Action Committee',
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
      title: 'Take Action',
      path: '/action'
    },
    {
      title: 'Contact',
      path: '/contact'
    }
  ],
  typekit: 'tvf5sur',
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
