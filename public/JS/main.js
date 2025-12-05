document.addEventListener("DOMContentLoaded", function() {
    const deleteForms = document.querySelectorAll('.delete-form');

    deleteForms.forEach(form => {
        form.addEventListener('submit', function(e){
            const confirmDelete = confirm("Are you sure you want to delete this message?");
            if(!confirmDelete){
                e.preventDefault(); // Stop deletion if user cancels
            }
        });
    });
});

