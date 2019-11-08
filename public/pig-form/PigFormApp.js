import Component from '../Component.js';
import Header from '../common/Header.js';
import PigForm from './PigForm.js';
import { getDegrees } from '../services/pig-api.js';

class PigFormApp extends Component {
    onRender(dom) {
        const header = new Header({ title: 'Add a Pig' });
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');

        const degrees = await getDegrees();
        const pigForm = new PigForm({ degrees });
        main.appendChild(pigForm.renderDOM());
    }

    renderHTML() {
        return /*html*/ `
            <div>
                <main>
                    <p>Pig Form Page</p>
                </main>
            </div>
        `;
    }
}

export default PigFormApp;