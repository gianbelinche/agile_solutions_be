/* One should have a database here, for the scope of this exercise I will mock the data */
/* In an SQL Database, this would be a table data with an entry for every brand and 4 colums, one for each month*/

/* Important Note: since I am faking the content of data, each time you restart the server will change the data */

var { faker } = require("@faker-js/faker");

const months = ["January", "February", "March", "April"];

const Data = {
  Brand1: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand2: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand3: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand4: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand5: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand6: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand7: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand8: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand9: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand10: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand11: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand12: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand13: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand14: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand15: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand16: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand17: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand18: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand19: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand20: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand21: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand22: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand23: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand24: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand25: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand26: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
  Brand27: months.map((m) => {
    return faker.datatype.number({ min: 100, max: 600, precision: 10 });
  }),
};

module.exports = { Data };
