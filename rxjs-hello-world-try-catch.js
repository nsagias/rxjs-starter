import  { Observable } from "rxjs";

const oberservable = new Observable ((subscriber) => {
  try {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();  // completing inside of promise
    });
    // subscriber.complete();
  } catch (err) {
    subscriber.error(err); // delivers an error if it caught one
  }
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

