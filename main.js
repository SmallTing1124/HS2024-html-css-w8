import Swiper from 'swiper';
import { Grid, Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/bundle';

// 初始化 Swiper
const swiperBanner = new Swiper('.swiper-banner', {
    modules: [Navigation, Pagination, Grid],  // 設置使用的模塊
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-banner-button-next",
        prevEl: ".swiper-banner-button-prev",
    },
    pagination: {
        el: '.swiper-banner-pagination',
        clickable: true,
    },
    breakpoints: {
        992: {
            slidesPerView: "auto",
            spaceBetween: 24,
            navigation: {
                enabled: true,  // 禁用 navigation
            },
            pagination: {
                enabled: false,
            },
        },
        0: {  // 當螢幕寬度小於 992px (手機)
            slidesPerView: 1,  // 單個滑塊顯示
            pagination: {
                enabled: true,
            },
            navigation: {
                enabled: false,  // 禁用 navigation
            },
        },
    },
});

const swiperRow2 = new Swiper(".swiper-row2", {
    modules: [Pagination, Grid],  // 加載 Grid 模塊
    slidesPerView: 1.2,
    spaceBetween: 8,
    pagination: {
        el: ".swiper-row2-pagination",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 24,

            grid: {
                rows: 2,  // 使用 'rows' 而不是 'row'
                fill: 'row',
            },
        }
    }
});

const swiperColumn4 = new Swiper('.swiper-col-4', {
    modules: [Navigation],  // 設置使用的模塊
    spaceBetween: 24,

    navigation: {
        nextEl: ".swiper-col-4-button-next",
        prevEl: ".swiper-col-4-button-prev",
    },

    breakpoints: {
        992: {
            slidesPerView: 4,
            navigation: {
                enabled: true,  // 禁用 navigation
            },
        },
        0: {  // 當螢幕寬度小於 992px (手機)
            slidesPerView: 1.2,  // 單個滑塊顯示
            navigation: {
                enabled: false,  // 禁用 navigation
            },
        },
    },
});

const swiperColumn6 = new Swiper('.swiper-col-6', {
    modules: [Navigation],  // 設置使用的模塊
    spaceBetween: 16,
    slidesPerView: 1.8, 
    navigation: {
        nextEl: ".swiper-col-6-button-next",
        prevEl: ".swiper-col-6-button-prev",
    },

    breakpoints: {
        992: {
            slidesPerView: 6,
    spaceBetween: 24,

        },

    },
});


const swiperRow4 = new Swiper(".swiper-row-4", {
    modules: [Pagination, Grid],  // 加載 Grid 模塊
    slidesPerView: 1.2,
    spaceBetween: 8,
    pagination: {
        el: ".swiper-row-4-pagination",
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
            spaceBetween: 24,

            grid: {
                rows: 4,  // 使用 'rows' 而不是 'row'
                fill: 'row',
            },
        },
        0: {
            slidesPerView: 1.2,
            spaceBetween: 24,

            grid: {
                rows: 2,  // 使用 'rows' 而不是 'row'
                fill: 'row',
            },
        }
    }
});


const swiperRow3 = new Swiper(".swiper-row-3", {
    modules: [Pagination],  // 加載 Grid 模塊
    slidesPerView: 1,
    spaceBetween: 24,

    pagination: {
        el: ".swiper-row-3-pagination",
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
        }
    }
});


const swiperCoursesTag = new Swiper(".swiper__courses-tag", {
    modules: [Navigation],  // 設置使用的模塊
    slidesPerView: "auto",
    spaceBetween: 8,

    navigation: {
        nextEl: ".swiper__courses-tag__button-next",
        prevEl: ".swiper__courses-tag__button-prev",
        enabled: false,
    },
    breakpoints: {
        576: {
            navigation: {
                enabled: true,
            },
        }
    }

});




import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './assets/scss/all.scss';
import 'bootstrap';