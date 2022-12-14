import { of } from "rxjs";
import { map, first } from "rxjs/operators/index.js";
// import pkg1 from "rxjs";
// import pkg2 from 'rxjs/operators/index.js';

// console.log(pkg1);
// console.log(pkg2);

const observer = {
  next: x => console.log(`Obeserver got next value of ${x}`),
  error: err => console.error(`Obeserver got the following error ${err}`),
  complete:  () => console.log('Observer is complete')
}

of(1, 2, 3)
.pipe(first((x) => x * x))
.subscribe((v) => console.log(`value: ${v}`));


of(1, 2, 5).pipe(map((x) => x * x))
.subscribe(observer);