document.addEventListener('DOMContentLoaded', () => {
    const dogPicsUrl = 'https://dog.ceo/api/breeds/image/random/9'; // Fetch 9 dog images

    const fetchDogPics = async () => {
        try {
            const response = await fetch(dogPicsUrl);
            const data = await response.json();
            displayDogPics(data.message);
        } catch (error) {
            console.error('Error fetching dog pictures:', error);
        }
    };

    const displayDogPics = (dogPics) => {
        const apiData = document.getElementById('api-data');
        dogPics.forEach(dogPic => {
            const dogCol = document.createElement('div');
            dogCol.className = 'col-md-4';
            dogCol.innerHTML = `
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">Dog Picture</h5>
                        <img src="${dogPic}" class="img-fluid" alt="Random Dog">
                    </div>
                </div>
            `;
            apiData.appendChild(dogCol);
        });
    };

    fetchDogPics();
});
