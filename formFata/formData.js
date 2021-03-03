const root = document.querySelector('.root');
const form = document.querySelector('form');

document.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
});
form.addEventListener('input', (event) => {
    const btn = event.currentTarget.querySelector('button');
    const input = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(formData);
    console.log(data, JSON.stringify(data));
    const regex = /^[a-z]+$/;
    if (!data.userName || !regex.test(data.userName)) {
        console.log('wrong form');
        input.style.color = 'red';
        return btn.disabled = true;
    }
    btn.disabled = false;
    input.style.color = 'inherit';
});
