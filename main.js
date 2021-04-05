var RSS = require('rss');
var path = require('path')
var fs = require('fs')

/* lets create an rss feed */
var feed = new RSS({
    title: 'title',
    description: 'description field',
    site_url: 'http://www.google.com',
});

/* loop over data and add to feed */
feed.item({
    title:  '搞事情啊第二版',
    description: 'u这个是description.',
    url: 'http://www.baidu.com', // link to the item
});

// cache the xml to send to clients
var xml = feed.xml();

console.log(xml);


fs.writeFileSync(path.resolve('.','output.xml'),xml)