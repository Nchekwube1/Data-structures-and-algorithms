// For hash tables implementation, we first start with creating a hashing function where we pass in the string we want to hash
// and then the meximum number of "buckets" we are using to store in our hash table

const hash = (val: string, max: number) => {
  let hashed = 0;
  for (let i = 0; i < val.length; i++) {
    hashed += val.charCodeAt(i);
  }

  return hashed % max;
};

const hashTable = function () {
  let storage: any[] = [];
  const storageLimit = 4;

  hashTable.prototype.print = function () {
    console.log({ storage });
  };

  hashTable.prototype.add = function (key: string, value: number) {
    let index = hash(key, storageLimit);
    if (!storage[index]) {
      storage[index] = [[key, value]];
    } else {
      let inserted = false;

      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (!inserted) {
        storage[index].push([key, value]);
      }
    }
  };
  hashTable.prototype.remove = function (key: string) {
    let index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index]; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index];
        }
      }
    }
  };
};

// let newTable = new hashTable()
// newTable.

// console.log({ table:  hashTable() });
