import template from './image-detail.html';

export default {
    template,
    bindings: {
        image: '=',
        add: '<'
    },
    controller
};

function controller() {
    this.addNew = () => {
        this.add({
            title: this.title,
            description: this.description,
            url: this.url
        });
    };
}