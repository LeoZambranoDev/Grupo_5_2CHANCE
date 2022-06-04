window.addEventListener('load', function () {

    let form = document.querySelector('form');
    
    
    form.addEventListener('submit',async function (e) {
        let email = document.getElementById('email').value
        

        let result= await fetch('http://localhost:8000/user/api/existEmail',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( { email: email  })
            }
        ).then( (response)=> {
            return response.json();
        })

        if(result.data){
            e.preventDefault();
            alert('El email ya existe')
        }

    })












});