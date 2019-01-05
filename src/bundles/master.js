define(['loki/components/b'], function(component) {
  'use strict';

  function init() {
    component.talk('From master');
    require(['loki/components/d'], (componentDynamic) => componentDynamic.talk('From master'));
  }

  return {
    init,
    talk: () => console.log('My name is master')
  };
});