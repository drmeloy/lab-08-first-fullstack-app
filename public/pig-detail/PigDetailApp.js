import Component from '../Component.js';
import Header from '../common/Header.js';
import Loading from '../common/Loading.js';
import PigDetail from './PigDetail.js';
import { getPig } from '../services/pig-api.js';

class PigDetailApp extends Component {
    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');

        const loading = new Loading({ loading: true });
        main.appendChild(loading.renderDOM());

        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');

        if (!id) {
            window.location = 'pig-list.html';
            return;
        }

        try {
            const pig = await getPig(id);
            const pigDetail = new PigDetail({ pig });
            main.appendChild(pigDetail.renderDOM());
        }
        catch (err) {
            console.log(err);
        }
        finally {
            loading.update({ loading: false });
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

export default PigDetailApp;