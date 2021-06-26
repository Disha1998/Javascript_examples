

let MenuData = {

    "menu": {
        "slice of pizza": "2.00",
        "toppings": {
            "pepperoni": ".25",
            "meatballs": ".35",
            "mushrooms": ".40",
            "olives": ".20"
        },
        "sides": {
            "potato salad": "1.25",
            "hummus": "2.50",
            "caesar salad": "3.50",
            "garden salad": "2.25"
        },
        "drinks": {
            "soda": {
                "small": "1.95",
                "medium": "2.20",
                "large": "2.50"
            },
            "juice": "2.00",
            "water": "1.25"
        }
    }


};


//fetch the JSON data from locally(which is already saved in our folder or file)

fetch("./menu.json")
    .then(response => {
        return response.json();
    })
    .then(data => console.log(data));




//Print the JSON data using pure JavaScript

function menuList() {
    let img = document.querySelector(".img");
    let hide = document.querySelector('.disable');
    let cont = document.querySelector('.container');

    let foodMenu = document.querySelector('.food-menu');
    const ul = document.createElement('ul');

    // console.log(ul);

    // ul.setAttribute('id', 'menu-list');

    for (var i in MenuData['menu']) {
        // i.addEventListener=('click' , () => setVisiblity(false));
        if (typeof (MenuData)['menu'][i] == "object") {
            // MenuData['menu'][i]='none';
            const li = document.createElement('li');

            li.appendChild(ul);

            li.innerHTML = i;
            // console.log(i);
            // console.log(li);
           
            ul.appendChild(li);


            const childul = document.createElement('ul');
            // console.log(childul);
            // ul.setAttribute('id','childUL');

            for (var j in MenuData['menu'][i]) {
                if (typeof MenuData['menu'][i][j] == "object") {
                    const li = document.createElement('li');
                    

                    li.innerHTML = j;

                    childul.appendChild(li);
                    // console.log(childul);

                    const grandchild = document.createElement('ul');
                    // ul.setAttribute('id', 'grandul');
                    for (var k in MenuData['menu'][i][j]) {
                        const li = document.createElement('li');
                        li.setAttribute('id', 'push');
                        li.innerHTML = k;
                        grandchild.appendChild(li);
                    }
                    li.appendChild(grandchild);
                }
                else {
                    const li = document.createElement('li');
                    li.setAttribute('id', 'push');
                   

                    // console.log(li);
                    li.innerHTML = j;
                    childul.appendChild(li);
                }
            }
            li.appendChild(childul);
        }
        else {
            const li = document.createElement('li');
            li.setAttribute('id', 'push');

           
            var button = document.createElement("button");
            button.innerHTML = "Add Order";

            li.innerHTML = i;
            ul.appendChild(li);
        }
    }
    foodMenu.appendChild(ul);
}

menuList();



//show the order 

const btn = document.querySelector('#order');
const cont = document.querySelector('#orderlist');
const ul = document.createElement('ul');
ul.setAttribute('id', 'showUl');





btn.addEventListener('click', () => {

    //   $("#showUl").empty(); --> this is working by jQuery
    

    if (document.getElementById('showUl')) {
        document.getElementById('showUl').innerHTML = "";
        document.getElementById('showUl').style.pointerEvents = 'none';
        document.getElementById('showUl').style.pointerEvents = null;
        
    }
    
    const orderList = JSON.parse(localStorage.getItem('order'));
    


    if (orderList == null) {
        alert('Select at least one food item..!');
    }
    else {
      
        JSON.stringify(localStorage.getItem('order'));
        
        orderList.map((order) => {
            const li = document.createElement('li');
           
            li.innerHTML = order;
           
            ul.appendChild(li);


        }),
            cont.appendChild(ul);




    }

})


//Add item buttons 
var li = document.querySelectorAll('#push');
li.forEach(function(item){ 
    var button=document.createElement('button');
    button.setAttribute('id','btn');
button.appendChild(document.createTextNode('Add item')); //or  button.innerHTML='add item';

item.appendChild(button);
 });

// save orders 

var orders = [];



[...document.querySelectorAll('#btn')].forEach(el => el.addEventListener('click', function (event) {
    




    if (document.querySelectorAll('#btn')) {
        
           
        orders.push(event.target.parentNode.childNodes[0].nodeValue);

        localStorage.setItem('order', JSON.stringify(orders));
        console.log(event.target);

        return orders;


    }
    else (event.target == btn); {

        alert('please add your order.!');

    }







    // }
}));
// document.querySelectorAll('#push').addEventListener('click', function (event) );





