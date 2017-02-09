const expect = require('chai').expect
var arrayToNode = require('../../src/trees/array_to_node');

describe('arrayToNode', function() {
  it("turns a two-element arrays into a node", function () {
    var input = [
      'a',
      []
    ];
    var rootNode = arrayToNode(input);
    expect(rootNode.name).to.deep.equal('a');
  });

  it("turns nested arrays into child nodes", function () {
    var input = [
      'a',
      [
        [
          'b',
          []
        ],
        [
          'c',
          []
        ]
      ]
    ];
    var rootNode = arrayToNode(input);
    expect(rootNode.name).to.deep.equal('a');
    expect(rootNode.children[0].name).to.deep.equal('b');
    expect(rootNode.children[1].name).to.deep.equal('c');
  });

  it("handles deeply nested nodes", function () {
    var input = [
      'a',
      [
        [
          'b',
          [
            [
              'c',
              [
                [
                  'd',
                  []
                ]
              ]
            ]
          ]
        ]
      ]
    ];
    var rootNode = arrayToNode(input);
    expect(rootNode.name).to.deep.equal('a');
    expect(rootNode.children[0].name).to.deep.equal('b');
    expect(rootNode.children[0].children[0].name).to.deep.equal('c');
    expect(rootNode.children[0].children[0].children[0].name).to.deep.equal('d');
  });
});
