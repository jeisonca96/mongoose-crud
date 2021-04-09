require('./database');
const DeviceModel = require('./models/device.model');

(async () => {
  const data = {
    "classroom": {},
    "state": {
      "current": "1A",
      "max": "1A",
      "skipSlides": ["1A", "2A", "3A"],
    },
    "isAlreadyConnected": true,
    "students": [
      {
        "name": "Name Students",
        "externalUserId": 12345,
      },
    ],
  };

  const newDevice = new DeviceModel(data);
  await newDevice.save();
  console.log('Added Successfully');
})();
