/*Vue.component('comp1', {
    template: '<div>{{ message }}</div>',
    data: function () {
        return {
            message: 'poopipoopipoopi',
        };

    },
});
Vue.component('comp2', {
    template: '<div>weeweeweewee</div>',
});
*/
Vue.component('global', {
    template: '<div>This is global</div>',
});

var comp1 = {
    template: '<div><global></global>Hello there</div>',
};

var comp2 = {
    template: '<div>General Kenobi<comp1></comp1></div>',
    components: {
        comp1,
    }
};

var comp3 = {
    template: '<div>{{text}}</div>',
    props: ['text'],
};

var app = new Vue({
    el: '#app',
    data: {
        text: 'dsdsdsdsds',
    },
    components: {
        comp1,
        comp2,
        comp3,
    }
});
