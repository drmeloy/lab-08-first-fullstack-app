import Component from '../Component.js';

class Loading extends Component {
    renderHTML() {
        const loading = this.props.loading;
        if (!loading) {
            return /*html*/`<div></div>`;
        }
        
        return /*html*/`
            <div class="loading-container">
                <img src="assets/pig_on_fire_4.gif">
            </div>
        `;
    }
}

export default Loading;