# Ngx RxJS Practice

```
const observable = Observable.create(function (observer) {
      try {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
      } catch (err) {
        observer.throw(new Error(err));
      }
    });
```