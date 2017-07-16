Router.configure({
  layoutTemplate: 'layout'
});
//라우터는 들어오자마자 layout 확인

Router.route('/', {template: 'main'});

Router.route('/relationship', {template: 'relationship'});
Router.route('/explain', {template: 'explain'});
Router.route('/question', {template: 'question'});
Router.route('/detail', {path: 'detail/:_id', template: 'detail'});
