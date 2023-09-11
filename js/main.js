(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);



// const search = document.querySelector(".search-input");
// const inputBox = search.querySelector("input");
// const suggBox = search.querySelector(".option-box")

// inputBox.onkeyup =(e) =>{
//     let userdata = e.target.value;
//     let emptyArray = [];
//     if(userdata){
//         emptyArray = suggestions.filter((data)=>{

//             return data.toLocaleLowerCase().startsWith(userdata.toLocaleLowerCase());

//         });

//         emptyArray = emptyArray.map((data)=>{
//             return data = '<li>'+ data +'</li>';

//         });
//         console.log(emptyArray);
//     }

// }


const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".option-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if (userData) {
        icon.onclick = () => {
            webLink = `https://www.travelsvalley.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data) => {
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}
function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {

        if (selectData == "Australia") {
            window.location.href = "https://www.travelsvalley.com/Aus&NZ.html";
        }

        else if (selectData == "International Packages") {
            window.location.href = "https://www.travelsvalley.com/international.html";
        }

        else if (selectData == "Domestic Packages") {
            window.location.href = "https://www.travelsvalley.com/Domestic.html";
        }

        else if (selectData == "Bali") {
            window.location.href = "https://www.travelsvalley.com/Bali.html";
        }

        else if (selectData == "Bali") {
            window.location.href = "https://www.travelsvalley.com/Bali.html";
        }

        else if (selectData == "Europe & UK") {
            window.location.href = "https://www.travelsvalley.com/Europe&uk.html";
        }

        else if (selectData == "Hongkong & China") {
            window.location.href = "https://www.travelsvalley.com/HongkongAndChina.html";
        }

        else if (selectData == "Kenya & Uganda") {
            window.location.href = "https://www.travelsvalley.com/Kenya - Uganda.html";
        }

        else if (selectData == "Maldives") {
            window.location.href = "https://www.travelsvalley.com/Maldives.html";
        }

        else if (selectData == "Mauritius") {
            window.location.href = "https://www.travelsvalley.com/Mauritius.html";
        }

        else if (selectData == "Nepal  & Bhutan") {
            window.location.href = "https://www.travelsvalley.com/Nepal and Bhutan.html";
        }

        else if (selectData == "Russia") {
            window.location.href = "https://www.travelsvalley.com/Russia.html";
        }

        else if (selectData == "Seychelles") {
            window.location.href = "https://www.travelsvalley.com/Seychelles.html";
        }

        else if (selectData == "Singapore & Malaysia") {
            window.location.href = "https://www.travelsvalley.com/Singapore & Malaysia.html";
        }

        else if (selectData == "Sri Lanka") {
            window.location.href = "https://www.travelsvalley.com/Sri Lanka.html";
        }

        else if (selectData == "Thailand") {
            window.location.href = "https://www.travelsvalley.com/Thailand.html";
        }
        
        else if (selectData == "UAE") {
            window.location.href = "https://www.travelsvalley.com/UAE.html";
        }
        
        else if (selectData == "Vietnam") {
            window.location.href = "https://www.travelsvalley.com/Vietnam.html";
        }

        else if (selectData == "Andaman & Nicobar") {
            window.location.href = "https://www.travelsvalley.com/andaman.html";
        }

        else if (selectData == "Goa") {
            window.location.href = "https://www.travelsvalley.com/goa.html";
        }

        else if (selectData == "Kashmir") {
            window.location.href = "https://www.travelsvalley.com/kashmir.html";
        }

        else if (selectData == "Leh & Ladakh") {
            window.location.href = "https://www.travelsvalley.com/leh.html";
        }

        else if (selectData == "Corporate Tours") {
            window.location.href = "https://www.travelsvalley.com/corporate.html";
        }

        else if (selectData == "Deals & Offers") {
            window.location.href = "https://www.travelsvalley.com/offers.html";
        }

        else if (selectData == "Flights") {
            window.location.href = "https://www.travelsvalley.com/flights.html";
        }
        
        else if (selectData == "Hotel") {
            window.location.href = "https://www.travelsvalley.com/hotels.html";
        }

        else if (selectData == "Villa") {
            window.location.href = "https://www.travelsvalley.com/villa.html";
        }

        else if (selectData == "Cruise") {
            window.location.href = "https://www.travelsvalley.com/cruise.html";
        }

        else if (selectData == "About Us") {
            window.location.href = "https://www.travelsvalley.com/about.html";
        }

        else if (selectData == "Contact") {
            window.location.href = "https://www.travelsvalley.com/contact.html";
        }

        else if (selectData == "Booking") {
            window.location.href = "https://www.travelsvalley.com/booking.html";
        }

        else{
            alert("Please provide valid information");
        }
       


    }
    searchWrapper.classList.remove("active");
}
function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}


