
// เปลี่ยน localhost เป็น 10.253.54.57
function fetchAndCreateCarousel() {
    // ดึงข้อมูลจาก API
    fetch('http://localhost/edu_tech_backend/component/API/getAPI.php?database=carousal_img')
        .then(response => response.json())
        .then(data => {
            // สร้าง indicators
            const indicatorsContainer = document.getElementById('carousel-indicators');
            data.forEach((item, index) => {
                const li = document.createElement('li');
                li.setAttribute('data-target', '#oar-slide');
                li.setAttribute('data-slide-to', index.toString());
                if (index === 0) {
                    li.classList.add('active');
                }
                indicatorsContainer.appendChild(li);
            });

            // สร้าง carousel items
            const carouselInnerContainer = document.getElementById('carousel-inner');
            data.forEach((item, index) => {
                const div = document.createElement('div');
                div.classList.add('carousel-item');
                if (index === 0) {
                    div.classList.add('active');
                }
                const img = document.createElement('img');
                img.src = item.img_resource;
                img.alt = `slide-img-${index + 1}`;
                img.classList.add('d-block', 'w-100');
                div.appendChild(img);
                carouselInnerContainer.appendChild(div);
            });
        })
        .catch(error => console.error('Error:', error));
}
fetchAndCreateCarousel();

function fetchGallaryAPI() {
    fetch('http://localhost/edu_tech_backend/component/API/getAPI.php?database=gallery')
    .then(response => response.json())
    .then(data => {
        // Iterate through the data and create HTML elements
        const owlSlide = document.getElementById('owlslide1');

        data.forEach(item => {
            const carouselItem = document.createElement('div');
            carouselItem.className = 'item';

            const link = document.createElement('a');
            link.href = item.img_link;

            const img = document.createElement('img');
            img.src = item.img_resource;
            img.alt = item.img_title;

            const text = document.createElement('p');
            text.className = 'item-text';
            text.textContent = item.img_title;

            link.appendChild(img);
            link.appendChild(text);
            carouselItem.appendChild(link);
            owlSlide.appendChild(carouselItem);
        });

        // Initialize Owl Carousel
        $('#owlslide1').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: [
            "<i class='fas fa-chevron-circle-left'></i>",
            "<i class='fas fa-chevron-circle-right'></i>"
            ],
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass:true,
            
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}
fetchGallaryAPI();
// เรียกใช้ฟังก์ชันทันทีที่ไฟล์ถูกโหลด
