import Component from '../Component.js';

class PigDetail extends Component {
    renderHTML() {
        const { pig } = this.props;
        const json = JSON.stringify(pig, true, 4);
        return /*html*/ `
            <pre>${json}</pre>
        `;
    }
}

export default PigDetail;