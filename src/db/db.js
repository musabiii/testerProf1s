import db1 from "./db1.json";
import db2 from "./db2.json";
import db3 from "./db3.json";
import db4 from "./db4.json";
import db5 from "./db5.json";
import db6 from "./db6.json";
import db7 from "./db7.json";
import db8 from "./db8.json";
import db9 from "./db9.json";
import db10 from "./db10.json";
import db11 from "./db11.json";
import db12 from "./db12.json";
import db13 from "./db13.json";
import db14 from "./db14.json";

const db = {
  db1: db1,
  db2: db2,
  db3: db3,
  db4: db4,
  db5: db5,
  db6: db6,
  db7: db7,
  db8: db8,
  db9: db9,
  db10: db10,
  db11: db11,
  db12: db12,
  db13: db13,
  db14: db14,
};

function getQuestion(id, dbNum) {
  const el = db["db" + dbNum].find((el) => el.id == id);
  return el;
}

function getQuestions(dbNum) {
  return db["db" + dbNum];
}

function getExamQuestions() {
  const examQuestions = [];

  for (const key in db) {
    if (Object.hasOwnProperty.call(db, key)) {

      console.log("key",key)
      const dbElement = db[key];
      console.log("dbElement", dbElement)
      const count = dbElement.length;
      const randomIndex = getRandom(0, count - 1);

      console.log("random index", randomIndex)

      examQuestions.push(dbElement[randomIndex]);
    }
  }

  console.log("exam q",examQuestions)
  return examQuestions;
}

function getList(dbNum) {
  return db["db" + dbNum].map((el) => el.title);
}

function getCount(dbNum) {
  return db["db" + dbNum].length;
}

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export { getQuestion, getList, getCount, getQuestions,getExamQuestions };
