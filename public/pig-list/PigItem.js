import Component from '../Component.js';

class PigItem extends Component {
    renderHTML(){
        const pig = this.props.pig;

        return /*html*/ `
            <a href="pig-detail.html?id=${pig.id}">
                <li class="pig-item">
                    <div class="info-container">
                        <p class="pig-name">${pig.name} - <span class="pig-year">${pig.year}</span></p>
                        <p><span class="pig-evil">Degree of Evil: ${pig.degree_of_evil}</span></p>
                    </div>
                    <div class="image-container">
                        <img src="${pig.image.includes('://') ? pig.image : ('./assets/' + pig.image)}" alt="${pig.name} image" />
                    </div>
                </li>
            </a>
        `;
    }
}

export default PigItem;