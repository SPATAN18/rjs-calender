import * as idb from "idb";

const dataBasebName = "rjs-cal-events-121";
const StoreName = "calEvents";
const opType = "readwrite";

class CalEvent {
  constructor(
    name = "aaa",
    desc = "",
    time = { day: 1, month: 1, year: 2019, hour: 0, min: 0 },
    remindMe = false,
    remindMeBefore = null
  ) {
    this.name = name;
    this.desc = desc;
    this.day = time.day;
    this.month = time.month;
    this.year = time.year;
    this.hour = time.hour;
    this.minute = time.min;
    this.remindMe = remindMe;
    this.remindMeBefore = remindMeBefore;
    this.markDone = false;
  }

  editEvent = (
    name = "",
    desc = "",
    time = { day: 1, month: 1, year: 2019, hour: 0, min: 0 },
    remindMe = false,
    remindMeBefore = null,
    markDone = false
  ) => {
    this.name = name;
    this.desc = desc;
    this.day = time.day;
    this.month = time.month;
    this.year = time.month;
    this.hour = time.hour;
    this.minute = time.min;
    this.remindMe = remindMe;
    this.remindMeBefore = remindMeBefore;
    this.markDone = markDone;
  };

  markDone = () => {
    this.markDone = true;
  };

  /**
   * @description
   */
  saveEvent = () => {
    return new Promise((resolve, reject) => {
      if (!("indexedDB" in window)) {
        reject(new Error("Your browser does not support event saving."));
      }
      idb
        .openDb(dataBasebName, 1, upgradeDb => {
          if (!upgradeDb.objectStoreNames.contains(StoreName)) {
            console.log("CAl event has no object store");
            const objStore = upgradeDb.createObjectStore(StoreName, {
              autoIncrement: true
            });
            objStore.createIndex("title", "title", { unique: false });
            objStore.createIndex("month", "month", { unique: false });
            objStore.createIndex("year", "year", { unique: false });
          }
        })
        .then(db => {
          const tx = db.transaction(StoreName, opType);
          const stroe = tx.objectStore(StoreName);
          const item = {
            title: this.name,
            desc: this.desc,
            day: this.day,
            month: this.month,
            year: this.year,
            hour: this.hour,
            minute: this.minute,
            remindMe: this.remindMe,
            remindMeBefore: this.remindMeBefore,
            markDone: this.markDone
          };
          stroe.add(item);
          return tx.complete;
        })
        .then(() => {
          const item = {
            title: this.name,
            desc: this.desc,
            day: this.day,
            month: this.month,
            year: this.year,
            hour: this.hour,
            minute: this.minute,
            remindMe: this.remindMe,
            remindMeBefore: this.remindMeBefore,
            markDone: this.markDone
          };
          resolve({ success: true, event: item });
        })
        .catch(err => {
          console.log("error in saving event");
        });
    });
  };

  // storeEventInDb = (db) => {
  //   db.
  // }
}

export default CalEvent;
