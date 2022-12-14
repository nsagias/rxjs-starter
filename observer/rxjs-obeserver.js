import  { from } from "rxjs";

const observable = from([10, 20, 30]);
const observer = {
  next: x => console.log(`Obeserver got next value of ${x}`),
  error: err => console.error(`Obeserver got the following error ${err}`),
  complete:  () => console.log('Observer is complete')
}
// const subscription = observable.subscribe((x) => console.log(x));
const subscription = observable.subscribe(observer);

subscription.unsubscribe();