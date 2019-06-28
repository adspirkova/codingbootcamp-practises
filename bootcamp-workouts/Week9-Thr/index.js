document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    const q1 = new Question ('How are you?', 'Not bad.', 0, 1);
    q1.mount(app);

    const q2 = new Question ('Did you sleep well?', 'Not at all.', 0, 2);
    q2.mount(app);

    const q3 = new Question ('Do you like gummy bears?', 'Love them.', 0, 3);
    q3.mount(app);

    q3a = document.querySelector('.q3');
    const a1 = new Answer('Gummy bears are not healthy', 'Based on scientists', '1', 'q1');
    a1.mount(q3a);
});