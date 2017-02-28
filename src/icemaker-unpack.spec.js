const unpack = require("./icemaker-unpack");


describe("unpack", () => {
  it("spreads by key names", () => {
    const obj = {
      one: 1,
      two: 2,
      three: 3,
    };

    const sum = unpack(obj, (two, one, three) => one + two + three);

    expect(sum).to.equal(6);
  });

  it("spreads by position", () => {
    const items = [1, 2, 3];

    unpack(items, (a, b, c) => {
      expect(a).to.equal(1);
      expect(b).to.equal(2);
      expect(c).to.equal(3);
    });
  });

  it("returns callback's return value", () => {
    const items = [1, 2, 3];

    const sum = unpack(items, (a, b, c) => a + b + c);

    expect(sum).to.equal(6);
  });


  it("errors when key is missing", () => {
    const sum = () => {
      unpack({}, (foo) => { // eslint-disable-line no-unused-vars
      });
    };

    expect(sum).to.throw(Error);
  });

  it("errors when callback is invalid", () => {
    const run = () => {
      unpack({}, "foo bar");
    };
    expect(run).to.throw(Error);
  });
});
