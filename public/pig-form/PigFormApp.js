import Component from '../Component.js';
import Header from '../common/Header.js';

class PigFormApp extends Component {
    onRender(dom) {
        const header = new Header({ title: 'Add a Pig' });
        dom.prepend(header.renderDOM());
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