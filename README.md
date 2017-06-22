# Server-Sent Events + ServiceWorker - skipWaiting problem

```
npm i
npm start
```

## Steps to reproduce

* open localhost:3000
* in Chrome Dev Tools open application tab
* change anything in sw.js (e.g. add empty line in the beginning)
* refresh page
* in the application tab you can't skip waiting

![](http://i.makeagif.com/media/6-22-2017/pEFuyx.gif)