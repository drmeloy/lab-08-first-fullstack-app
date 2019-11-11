import Component from '../Component.js';
import { deletePig } from '../services/pig-api.js';

class PigDetail extends Component {
    async onRender(dom) {
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');
        const deleteButton = dom.querySelector('#delete-button');
        deleteButton.addEventListener('click', async() => {
            if (confirm('Are you sure you want to delete? This operation cannot be undone.'))
                await deletePig(id);
            window.location = './pig-list.html';
        });
    }
    
    renderHTML() {
        const { pig } = this.props;
        return /*html*/ `
            <div class="pig-item">
                <div class="info-container">
                    <p class="pig-name">${pig.name} - <span class="pig-year">${pig.year}</span></p>
                    <p><span class="pig-evil">Degree of Evil: ${pig.degree_of_evil}</span></p>
                </div>
                <div class="image-container">
                    <img src="${pig.image.includes('://') ? pig.image : ('./assets/' + pig.image)}" alt="${pig.name} image" />
                </div><br>
                <p class="description">${pig.description}</p><br>
                <p class="num-legs">This piggie walks on: ${pig.walks_on_num_legs} legs.</p><br>
                <p class="has-tusks">This piggie ${pig.has_tusks ? 'has' : 'does not have'} tusks.</p>
                <button id="delete-button">Delete</button>
            </div>
        `;
    }
}

export default PigDetail;