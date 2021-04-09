require('./database');
const DeviceModel = require('./models/device.model');

(async () => {
  const _id = '607072d7719e1deee8aec005';
  const slideId = '3A';

  const device = await DeviceModel.findById(_id);
  await device.updateOne({
    'state.current': slideId,
    'state.max': slideId,
  });
  await device.save();
  console.log('Updated Successfully');
})();
