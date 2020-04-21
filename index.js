const { argv } = require('process');
module.exports = (identifier, msg, type, require) => {
  let target = argv.indexOf(identifier);
  if (target != -1) {
    switch (type) {
      case 'Int':
        return parseInt(argv[target + 1]);
        break;
      case 'Float':
        return parseFloat(argv[target + 1]);
        break;
      case 'Bool':
        return Boolean(argv[target + 1]);
      default:
        return String(argv[target + 1]);
        break;
    }
  } else if (require) {
    throw new Error(msg);
  }
};