import a from 'loki/components/a';

a.talk('From components bundle');

const talk = () => console.log('My name is Components');
const getComponent = (name) => import(`loki/components/${name}`).then(component => component);

export { a, talk, getComponent };