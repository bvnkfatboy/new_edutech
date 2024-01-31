
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

// เรียกใช้ฟังก์ชันทันทีที่ไฟล์ถูกโหลด
fetchAndCreateCarousel();
