import  { Observable } from "rxjs";

const oberservable = new Observable ((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  });
});

console.info("BEFORE SUBSCRIBE");
oberservable.subscribe({
  next(x) {
    console.log(`GOT VALUE ${x} ON RXJS HELLO WORLD`);
  },
  error(err) {
    console.error("ERROR ON RXJS HELLO WORLD");
  },
  complete() {
    console.log("RXJS HELLOW WORLD, DONE!");  
  }
});

console.info("AFTER SUBSCRIBE");