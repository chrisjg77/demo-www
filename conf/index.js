var conf = {
  title: 'The Action Committee',
  description: 'Happiness lies in the joy of achievement and the thrill of creative effort. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nostrum eveniet vero iste repellat sit laboriosam, omnis facilis, sequi ad.',
  brand: 'img/ac-logo-white.svg',
  pages: [
    {
      title: 'About',
      path: '#'
    },
    {
      title: 'Issues',
      path: '#'
    },
    {
      title: 'Join',
      path: '#'
    },
    {
      title: 'Take Action',
      path: '#'
    },
    {
      title: 'Contact',
      path: '#'
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
