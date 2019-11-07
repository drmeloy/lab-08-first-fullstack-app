import Component from '../Component.js';
import Header from '../common/Header.js';

class App extends Component {

    onRender(dom) {
        const header = new Header({ title: 'Piggy Home Page' });
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <main>
                    <p>Pigs... are they ALL evil? The TRUTH might SHOCK you!</p>
                </main>
            </div>
        `;
    }
}

export default App;