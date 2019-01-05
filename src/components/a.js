define(function() {
  console.log('Component a');
  return {
    talk: (from) => console.log(`${from}: My name is Component a`)
  };
});