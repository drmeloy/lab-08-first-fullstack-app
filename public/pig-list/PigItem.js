import Component from '../Component.js';

class PigItem extends Component {
    renderHTML(){
        const pig = this.props.pig;

        return /*html*/ `
            <li class="pig-item">
                <div class="info-container">
                    <h2>${pig.name}</h2>
                    <p class="pig-year">${pig.year}</p>
                    <p class="pig-evil">${pig.degree_of_evil}</p>
                </div>
                <div class="image-container">
                    <img src="./assets/${pig.image}" alt="${pig.name} image" />
                </div>
                <p class="description">${pig.description}</p>
            </li>
        `;
    }
}

export default PigItem;