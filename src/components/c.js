define('c', function() {
  console.log('Component c');
  return {
    talk: (from) => console.log(`${from}: My name is Component c`)
  };
});