const form = document.querySelector('form');
document.addEventListener('mousemove', showForm)

// write a function that triggers the pop up subscribe form
// The event should be a MouseEvent.clientY 
// < 10 px from the window


function showForm(e) {
    if (e.clientY < 10) {
        form.style.display = 'none';
    } else {
        form.style.display = 'flex';
    }
};


