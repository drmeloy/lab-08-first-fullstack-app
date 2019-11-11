import Component from '../Component.js';
import { addPig } from '../services/pig-api.js';

class PigForm extends Component {
    onRender(form) {
        const legsRange = form.querySelector('#walks-on-num-legs');
        const legsDisplay = form.querySelector('#num-legs-display');
        const syncLegs = () => legsDisplay.textContent = legsRange.value;
        legsRange.addEventListener('input', syncLegs);
        syncLegs();

        form.addEventListener('submit', async event => {
            event.preventDefault();
            const formData = new FormData(form);

            const pig = {
                name: formData.get('name'),
                year: parseInt(formData.get('year')),
                hasTusks: JSON.parse(formData.get('has-tusks')),
                walksOnNumLegs: parseInt(formData.get('walks-on-num-legs')),
                isEvil: JSON.parse(formData.get('is-evil')),
                degreeOfEvilId: parseInt(formData.get('degree-id')),
                image: formData.get('image'),
                description: formData.get('description')
            };
            console.log(pig);

            try {
                const saved = await addPig(pig);
                console.log(saved);
                window.location = `pig-list.html`;
            }
            catch (err) {
                console.log('Pig not saved :(', err);
            }
        });
    }

    renderHTML() {
        const { degrees } = this.props;
        const optionsList = degrees.map(row => `<option value="${row.id}">${row.degree}</option>
        `);

        const joinedOptionsList = optionsList.join('');

        return /*html*/ `
            <form class="pig-form">
                <p>
                    <label for="name">Name</label>
                    <input id="name" name="name" required placeholder="Evil Pig">
                </p>
                <p>
                    <label for="year">Year Created</label>
                    <input id="year" name="year" required type="number" min="0">
                </p>
                <p>
                    <label for="has-tusks">Does Your Pig Have Tusks?</label><br><br>
                    <input type="radio" name="has-tusks" value="true" required>Yes
                    <input type="radio" name="has-tusks" value="false">No
                </p>
                <p>
                    <label for="walks-on-num-legs">How Many Legs Does Your Pig Walk On?</label><br><br>
                    <input id="walks-on-num-legs" name="walks-on-num-legs" type="range" min="1" max="4" value="2" required>
                    <span id="num-legs-display"></span>
                </p>
                <p>
                    <label for="is-evil">Is Your Pig Evil?</label><br><br>
                    <input type="radio" name="is-evil" value="true" required>Yes
                    <input type="radio" name="is-evil" value="true">Yes<br>
                </p>
                <p>
                    <label for="degree">Degree of Evil</label>
                    <select id="degree" name="degree-id" required>
                        <option disabled selected>Select How Evil Your Pig Is</option>
                        ${joinedOptionsList}
                    </select>
                </p>
                <p>
                    <label for="image">Image URL</label>
                    <input id="image" name="image" type="url" required>
                </p>
                <p>
                    <label for="description">Description</label><br>
                    <textarea id="description" name="description" type="text-area" rows="4" cols="50" required placeholder="Describe your pig here"></textarea>
                </p>
                <p>
                    <button>Add This Pig</button>
                </p>
            </form>
        `;
    }
}

export default PigForm;