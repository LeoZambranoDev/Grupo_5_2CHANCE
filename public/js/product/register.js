window.addEventListener('load', function () {
    
    let categorySelect = document.getElementById('category')
    fetch('http://localhost:8000/api/categories')
        .then(response => response.json())
        .then(categories => {
            
            categories.forEach(element => {
                categorySelect.innerHTML+=
                `<option value="${element.id}">${element.name}</option>`
            });

        });
    let brandSelect = document.getElementById('mark')
    fetch('http://localhost:8000/api/brands')
        .then(response => response.json())
        .then(list => {
            
            list.forEach(element => {
                brandSelect.innerHTML+=
                `<option value="${element.id}">${element.name}</option>`
            });

        });
    let memorySelect = document.getElementById('memory')
    fetch('http://localhost:8000/api/memories')
        .then(response => response.json())
        .then(list => {
            
            list.forEach(element => {
                memorySelect.innerHTML+=
                `<option value="${element.id}">${element.name}</option>`
            });

        });
    let ramSelect = document.getElementById('ram')
    fetch('http://localhost:8000/api/rams')
        .then(response => response.json())
        .then(list => {
            
            list.forEach(element => {
                ramSelect.innerHTML+=
                `<option value="${element.id}">${element.name}</option>`
            });

        });
    let colorSelect = document.getElementById('color')
    fetch('http://localhost:8000/api/colors')
        .then(response => response.json())
        .then(list => {
            
            list.forEach(element => {
                colorSelect.innerHTML+=
                `<option value="${element.id}">${element.name}</option>`
            });

        });

})