import Component from '../Component.js';
import PigItem from './PigItem.js';

class PigList extends Component {
    onRender(dom) {
        const pigs = this.props.pigs;

        pigs.forEach(pig => {
            const props = { pig };
            const pigItem = new PigItem(props);
            const pigItemDOM = pigItem.renderDOM();
            dom.appendChild(pigItemDOM);
        });
    }

    renderHTML() {
        return /*html*/ `
            <ul class="pigs"></ul>
        `;
    }
}

export default PigList;