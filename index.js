const moment = require('moment'); // eslint-disable-line

const howOld = function howOld(birthday) {
  return moment().diff(birthday, 'years');
};

module.exports = {
  howOld,
};
