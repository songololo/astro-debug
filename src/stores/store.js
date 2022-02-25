import { atom } from "nanostores";

const data = atom(["boo"]);

setTimeout(() => {
  data.set(["boo", "baa"]);
}, 1000);

export { data };
