icemaker-unpack
===============

Synopsis
--------

Spread object proporties or array elements into a callback function. It makes
unit tests more expressive and concise.


Usage
-----

.. code-block:: javascript

  var numbers = {
    "one": 1,
    "two": 2,
    "three": 3
  }

  const unpack = require('icemaker-unpack');
  unpack(numbers, (one, two, three) => {
    let sum = one + two + three;
    assert sum === 6
  });


License
-------

MIT_

.. _MIT: LICENSE
