const viewController = new ViewController(licenseView);
const storage = new Storage(
    {
        name: '',
        balance: 5000
    },
    {
        name: (value) => {
            nameValue.innerHTML = value;
        },
        balance: (value) => {
            balanceValue1.innerHTML = value;
            balanceValue2.innerHTML = value;
        }
    });

document.querySelector('.accept_btn').addEventListener('click', () => {
    if (storage.get('name')) {
        viewController.setView(gameView)
    } else {
        viewController.setView(nameView)

    }
});


const submitName = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (!nameInp.value) {
        return;
    }

    storage.set('name', nameInp.value);
    viewController.setView(gameView);
};

document.querySelector('.name-form').addEventListener('submit', submitName);
document.querySelector('.name-btn').addEventListener('click', submitName);
document.querySelector('.btn-play').addEventListener('click', () => viewController.setView(roletteView));