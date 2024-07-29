function Events() {
  this.subList = new Map();

  this.subscribe = function (name, cb) {
    if (!this.subList.has(name)) {
      this.subList.set(name, [cb]);
    } else {
      const existingUserData = this.subList.get(name);
      this.subList.set(name, [...existingUserData, cb]);
    }

    return {
      remove: () => {
        const existingUserData = this.subList.get(name);
        const filteredUserData = existingUserData.filter((item) => item !== cb);
        this.subList.set(name, filteredUserData);
      },
    };
  };

  this.publish = function (name, data) {
    const cbs = this.subList.get(name);
    if (cbs) {
      cbs.forEach((element) => {
        element(data);
      });
    }
  };

  this.publishAll = function (data) {
    const entries = this.subList.entries;
    for (let [key, value] of entries) {
      value.forEach((entry) => {
        entry(data);
      });
    }
  };
}

const events = new Events();

const userSubscription1 = events.subscribe('user1', function (payload) {
  console.log(`Notify sub1 about ${payload}`);
});

events.publish('user1', 'Bob');

const userSubscription2 = events.subscribe('user1', function (payload) {
  console.log(`Notify sub2 about ${payload}`);
});

events.publish('user1', 'Nemo');

userSubscription1.remove();

events.publish('user1', 'Alan');

events.publishAll('Avengers');
