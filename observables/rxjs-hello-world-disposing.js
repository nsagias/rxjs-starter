import  { Observable, from } from "rxjs";

const observable = from([10, 20, 30]);
const subscription = observable.subscribe((x) => console.log(x));
const observable2 = new Observable ((subscriber) => {
  let intervalId;
  try {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    intervalId = setTimeout(() => {
      subscriber.next(4);
      // subscriber.complete();  // completing inside of promise
    });
    // subscriber.complete();
  } catch (err) {
    subscriber.error(err); // delivers an error if it caught one
  }

  return function unsubscribe() {
    console.log("UNSUB")
    clearInterval(intervalId);
  };
}); 

console.info("BEFORE SUBSCRIBE");
observable2.subscribe({
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

subscription.unsubscribe();
