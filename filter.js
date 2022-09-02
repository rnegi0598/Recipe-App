


const filterOne=document.querySelector('.filter-ingredients');
const filterTwo=document.querySelector('.filter-category');
const filterThree=document.querySelector('.filter-country');

document.querySelector('.type-one').addEventListener(
    'click',
    ()=>{
        document.querySelector('.type-one').style.backgroundColor="#D36B00";
        document.querySelector('.type-two').style.backgroundColor="darkred";
        document.querySelector('.type-three').style.backgroundColor="darkred";
        if(filterOne.classList.contains('hide')){
            filterOne.classList.remove('hide');
        }
        if(!filterTwo.classList.contains('hide')){
            filterTwo.classList.add('hide');
        }
        if(!filterThree.classList.contains('hide')){
            filterThree.classList.add('hide');
        }
    }
);

document.querySelector('.type-two').addEventListener(
    'click',
    ()=>{
        document.querySelector('.type-two').style.backgroundColor="#D36B00";
        document.querySelector('.type-one').style.backgroundColor="darkred";
        document.querySelector('.type-three').style.backgroundColor="darkred";
        if(filterTwo.classList.contains('hide')){
            filterTwo.classList.remove('hide');
        }
        if(!filterOne.classList.contains('hide')){
            filterOne.classList.add('hide');
        }
        if(!filterThree.classList.contains('hide')){
            filterThree.classList.add('hide');
        }
    }
);

document.querySelector('.type-three').addEventListener(
    'click',
    ()=>{
        document.querySelector('.type-three').style.backgroundColor="#D36B00";
        document.querySelector('.type-two').style.backgroundColor="darkred";
        document.querySelector('.type-one').style.backgroundColor="darkred";
        if(filterThree.classList.contains('hide')){
            filterThree.classList.remove('hide');
        }
        if(!filterTwo.classList.contains('hide')){
            filterTwo.classList.add('hide');
        }
        if(!filterOne.classList.contains('hide')){
            filterOne.classList.add('hide');
        }
    }
);






//

// 

const showFood=(meals)=>{
    if(meals==null){
        alert("enter corrent text");
        return ;
    }
    
    let output='';
    meals.forEach(element => {
        output+=`
        <div id="${element.idMeal}" class="main-item ${element.idMeal}">
            <div  class="image"><img src="${element.strMealThumb}" alt="food-img"></div>
            <div class="food-name">${element.strMeal}</div>

            
    
        </div>
        </div>
        `;
    });
    document.querySelector('.main').innerHTML=output;

   
    

};


const getIngredients=async (ing)=>{
    let url='https://www.themealdb.com/api/json/v1/1/filter.php?i='+ing;
    const resp=await fetch(url);
    const data=await resp.json();
    
    return showFood(data.meals);
};

document.querySelector('.formOne').addEventListener(
    'submit',
    (event)=>{
        const ing=document.querySelector('.formOne input');
        getIngredients(ing.value);
        document.querySelector('.food-title').innerHTML=`
            <h2>${ing.value}</h2>
        `;
        ing.value="";
        event.preventDefault();
    }
)
// 
const getCategory=async (cat)=>{
    let url='https://www.themealdb.com/api/json/v1/1/filter.php?c='+cat;
    const resp=await fetch(url);
    const data=await resp.json();
    return showFood(data.meals);
};

document.querySelector('.formTwo').addEventListener(
    'submit',
    (event)=>{
        
        const cat=document.querySelector('.formTwo input');
        getCategory(cat.value);
        document.querySelector('.food-title').innerHTML=`
            <h2>${cat.value}</h2>
        `;
        cat.value="";
        event.preventDefault();
    }
)

// 
const getCountry=async (country)=>{
    let url='https://www.themealdb.com/api/json/v1/1/filter.php?a='+country;
    const resp=await fetch(url);
    const data=await resp.json();
    return showFood(data.meals);
};

document.querySelector('.formThree').addEventListener(
    'submit',
    (event)=>{
        const country=document.querySelector('.formThree input');
        getCountry(country.value);
        document.querySelector('.food-title').innerHTML=`
            <h2>${country.value}</h2>
        `;
        country.value="";
        event.preventDefault();
    }
)

// 

const getItem=async (item)=>{
    let url='https://www.themealdb.com/api/json/v1/1/search.php?s='+item;
    const resp=await fetch(url);
    const data=await resp.json();
    return showFood(data.meals);
};

document.querySelector('.search-box form').addEventListener(
    'submit',
    (event)=>{
        
        const item=document.querySelector('.search-box form input');
        getItem(item.value);
        document.querySelector('.food-title').innerHTML=`
            <h2>${item.value}</h2>
        `;
        item.value="";
        event.preventDefault();
    }
)