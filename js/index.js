//Sticky Navabar
const heroSection = document.querySelector("#hero-section");
const navbar = document.querySelector(".navbar");

const navObserver = new IntersectionObserver(function(entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}, 
{
    root: null, 
    threshold: 0, 
});

navObserver.observe(heroSection);


//Counter
const counterSection = document.querySelector("#counter-section");
let num = document.querySelectorAll(".counter-column h2");
let speed = 200;

const countObserver = new IntersectionObserver(function(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        return;
    } 
    else {
        num.forEach( (count) => {
    
            let target_count = count.dataset.count;
            let init_count = +count.innerText;
            // console.log(target_count)
            
            let new_increment_num = Math.floor(target_count / speed);
            
            const updateNumber = () => {
                init_count +=  new_increment_num;
                count.innerText = init_count;
                
                if(init_count < target_count){
                    setTimeout(() => {updateNumber()}, 5)
                }
            }
            
            updateNumber(); 
        });
        observer.unobserve(counterSection);
    } 
}, 
{
    root: null, 
    threshold: 0, 
});

countObserver.observe(counterSection);


//Contact

const date = document.querySelector("#date");
const todayDate = new Date();

date.valueAsDate = todayDate;