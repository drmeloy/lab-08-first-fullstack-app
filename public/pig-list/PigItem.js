import Component from '../Component.js';

class PigItem extends Component {
    renderHTML(){
        const pig = this.props.pig;

        return /*html*/ `
            <li class="pig-item">
                <div class="info-container">
                    <p>${pig.name} - <span class="pig-year">${pig.year}</span> - <span class="pig-evil">Degree of Evil: ${pig.degree_of_evil}</span></p>
                </div>
                <div class="image-container">
                    <img src="${pig.image.includes('://') ? pig.image : ('./assets/' + pig.image)}" alt="${pig.name} image" />
                </div>
                <p class="description">${pig.description}</p>
            </li>
        `;
    }
}

export default PigItem;