const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');
(async function(){
  const model=await tf.loadGraphModel('file://model/model_50.jason')
  console.log('model loading sucess!')
})()
