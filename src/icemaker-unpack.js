const _ = require("lodash");
const acorn = require("acorn");
const walker = require("acorn/dist/walk");


function walk(src) {
  let ast;
  try {
    ast = acorn.parse(src, {
      ecmaVersion: 6,
    });
  } catch (e) {
    throw new Error("Unable to parse. Try naming the anonymous function");
  }
  const nodes = ["FunctionDeclaration", "ArrowFunctionExpression"];
  const found = walker.findNodeAt(ast, 0, null, nodeType => _(nodes).includes(nodeType));
  return _.map(found.node.params, n => n.name);
}


function unpack(items, func) {
  if (_.isArray(items)) {
    return func(...items);
  }

  const names = walk(func);
  const args = _.map(names, (name) => {
    if (items[name]) {
      return items[name];
    }
    throw new Error(`'${name}' is missing`);
  });

  return func(...args);
}

module.exports = unpack;
