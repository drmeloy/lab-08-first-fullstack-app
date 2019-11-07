import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        const title = this.props.title || 'Pigs';

        return /*html*/ `
            <header>
                <h1>${title}</h1>
                <nav>
                    <a href="../">Home</a>
                    <a href="../pig-list.html">Pigs</a>
                    <a href="../pig-form.html">Add a Pig</a>
                </nav>
            </header>
        `;
    }
}

export default Header;