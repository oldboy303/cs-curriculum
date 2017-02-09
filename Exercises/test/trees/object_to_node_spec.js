const expect = require('chai').expect
var objectToNode = require('../../src/trees/object_to_node');
var Node = require('../../src/trees/node');

describe('objectToNode', function() {

  it("turns a plain javascript object into a Node", function () {
    var input = {
      name: 'a',
      children: []
    };
    var rootNode = objectToNode(input);
    expect(rootNode.name).to.deep.equal('a');
    expect(rootNode).to.be.an.instanceof(Node);
  });

  it("handles deeply nested objects", function () {
    var input = {
      name: 'a',
      children: [
        {
          name: 'b',
          children: [
            {
              name: 'c',
              children: [
                {
                  name: 'd',
                  children: []
                }
              ]
            }
          ]
        }
      ]
    };
    var rootNode = objectToNode(input);
    expect(rootNode.name).to.deep.equal('a');
    expect(rootNode).to.be.an.instanceof(Node);
    expect(rootNode.children[0].name).to.deep.equal('b');
    expect(rootNode.children[0]).to.be.an.instanceof(Node);
    expect(rootNode.children[0].children[0].name).to.deep.equal('c');
    expect(rootNode.children[0].children[0].children[0].name).to.deep.equal('d');
  });
});
