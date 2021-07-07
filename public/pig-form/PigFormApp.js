import Component from '../Component.js';
import Header from '../common/Header.js';
import PigForm from './PigForm.js';
import Loading from '../common/Loading.js';
import { getDegrees } from '../services/pig-api.js';

class PigFormApp extends Component {
    async onRender(dom) {
        const header = new Header({ title: 'Add a Pig' });
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');

        const loading = new Loading({ loading: true });
        main.appendChild(loading.renderDOM());

        try {
            const degrees = await getDegrees();
            const pigForm = new PigForm({ degrees });
            setTimeout(() => main.appendChild(pigForm.renderDOM()), 1500);
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
                <main>
                </main>
            </div>
        `;
    }
}

export default PigFormApp;