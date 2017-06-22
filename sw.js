self.addEventListener('fetch', function (event) {
    // if you comment out code below it works fine
    event.respondWith(
        fetch(event.request)
    );
});