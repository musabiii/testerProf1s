import { db1 } from "./db1";
import { db2 } from "./db2";

const db = {
  db1: db1,
  db2: db2,
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
