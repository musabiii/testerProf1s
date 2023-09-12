import db1 from "./db1.json";
import db2 from "./db2.json";
import db3 from "./db3.json";

const db = {
  db1: db1,
  db2: db2,
  db3: db3,
};

function getQuestion(id, dbNum) {
  const el = db["db" + dbNum].find((el) => el.id == id);
  return el;
}

function getQuestions(dbNum) {
  return db["db" + dbNum]
}

function getList(dbNum) {
  return db["db" + dbNum].map((el) => el.title);
}

function getCount(dbNum) {
  return  db["db" + dbNum].length

}

export { getQuestion, getList,getCount,getQuestions };
