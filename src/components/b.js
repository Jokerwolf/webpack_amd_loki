define('b', function() {
  console.log('Component b');
  return {
    talk: (from) => console.log(`${from}: My name is Component b`)
  };
});