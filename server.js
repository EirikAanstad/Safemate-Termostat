var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '505512',
  key: '05b7307f7874f401465b',
  secret: '5336e8161593fce530fc',
  cluster: 'eu',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
});