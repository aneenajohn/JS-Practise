console.log(this);
let myUser = 'Aneena';

function getMyUser() {
  console.log(this.myUser);
}

// window.getMyUser();

const userObj = {
  userName: 'Shiva Prasad',
  printName: function () {
    function print() {
      console.log('Inside inner:', this.userName);
    }
    print();
  },
};
userObj.printName();
