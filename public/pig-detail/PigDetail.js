import Component from '../Component.js';

class PigDetail extends Component {
    renderHTML() {
        const { pig } = this.props;
        const json = JSON.stringify(pig, true, 4);
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
            </div>
        `;
    }
}

export default PigDetail;