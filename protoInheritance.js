const obj = {
  name: 'Aneena',
  city: 'trz',
  getData: function () {
    console.log(`${this.name} is from ${this.city}`);
  },
  get1: () => {
    console.log(`Name: ${this.name}, City: ${this.city}`);
  },
};

obj.getData();
obj.get1();

const arr = [1, 2, 3];

function chumma() {
  console.log('Hello');
}

const myPromise = new Promise((resolve, reject) => {
  let success = 'true';
  if (success) {
    resolve('Succcc');
  } else {
    reject('failed');
  }
});

myPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .finally('Done');

const fetchData = new Promise((res) => {
  setTimeout(() => {
    res('Data fetched');
  }, 1000);
});

fetchData
  .then((res) => {
    console.log(res);
    return `Processing data`;
  })
  .then((processedData) => {
    console.log(processedData);
    return `Data processed successfully`;
  })
  .then((finalMsg) => {
    console.log(finalMsg);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('Doneee');
  });

const getData = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('Data fetched!'), 3000);
  });

async function processData() {
  try {
    const data = await getData();
    console.log(data);
    console.log('Processed');
  } catch (err) {
    console.log(err);
  } finally {
    console.log('from finally');
  }
}

processData();
