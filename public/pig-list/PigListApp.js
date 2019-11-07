import Component from '../Component.js';
import Header from '../common/Header.js';
import PigList from './PigList.js';
import { getPigs } from '../services/pig-api.js';

class PigListApp extends Component {
    onRender(dom) {
        const header = new Header({ title: 'List of Pigs' });
        dom.prepend(header.renderDOM());

        const list = new PigList({ pigs: [] });
        const main = dom.querySelector('main');
        main.appendChild(list.renderDOM());

        getPigs().then(pigs => {
            list.update({ pigs });
        });
    }

    renderHTML() {
        return /*html*/ `
            <div>
                <main></main>
            </div>
        `;
    }
}

export default PigListApp;