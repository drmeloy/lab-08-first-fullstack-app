import Component from '../Component.js';
import Header from '../common/Header.js';
import Loading from '../common/Loading.js';
import PigList from './PigList.js';
import { getPigs } from '../services/pig-api.js';

class PigListApp extends Component {
    onRender(dom) {
        const header = new Header({ title: 'List of Pigs' });
        dom.prepend(header.renderDOM());

        const list = new PigList({ pigs: [] });
        const main = dom.querySelector('main');
        main.appendChild(list.renderDOM());

        const loading = new Loading({ loading: true });
        main.appendChild(loading.renderDOM());

        try {
            getPigs().then(pigs => {
                setTimeout(() => list.update({ pigs }), 2000);
            });
        }
        catch (err) {
            console.log('Load pigs failed\n', err);
        }
        finally {
            setTimeout(() => loading.update({ loading: false }), 2000);
        }


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