const Queue = () => {
  const data = [];

  const add = (payload) => {
    data.unshift(payload);
  };

  const processing = (fn = () => {}, callback = () => {}) => {
    const lastItem = data.length - 1;

    const item = data[lastItem];

    console.log(`processing item: ${item}`);

    const response = fn(item);

    callback(response);

    data.splice(lastItem);
  };

  const print = () => {
    console.log(data);
  };

  return {
    add,
    processing,
    print,
  };
};

const queue = Queue();

setInterval(() => {
  queue.add(Math.floor(Math.random() * 9));
}, 1000);

const myInterval = setInterval(() => {
  queue.print();
  queue.processing();
}, 2000);
