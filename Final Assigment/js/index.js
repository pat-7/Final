/******* GLOABL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references

// let course0Name = `Usability Testing 1`;
// let course0Code = `INTR2014`;
// let course0Intstructor = `Nastaran Dadashi`;
// let course0Start = `Fall 2019`;
// let course0Weeks = 15;
// let course0Breaks = `Yes`;
// let course0Duration = 180;

const products = [
    {
      name: `Off-White Presto Black`,
      code: `AA3830-001`,
      price: `$200`,
      img: `img/prestoblack.jpg`
    }, 

    {
        name: `Off-White Presto White`,
        code: `AA3830-002`,
        price: `$200`,
        img: `img/prestowhite.jpg`
      }, 

      {
        name: `Off-White Presto OG`,
        code: `AA3830-003`,
        price: `$200`,
        img: `img/ogpresto.jpg`
      }, 

      {
        name: `Off-White Air Max 90 Black`,
        code: `AA3330-001`,
        price: `$220`,
        img: `img/airmaxblack.jpg`
      }, 

      {
        name: `Off-White Air Max 90 Tan`,
        code: `AA3330-002`,
        price: `$220`,
        img: `img/airmaxtan.jpg`
      }, 

      {
        name: `Off-White Air Max 90 White`,
        code: `AA3330-003`,
        price: `$220`,
        img: `img/ogairmax.jpg`
      }, 

      {
        name: `Yeezy 350 Boost Cream`,
        code: `Y111`,
        price: `$340`,
        img: `img/cream.jpg`
      }, 

      {
        name: `Yeezy 350 Boost BRED`,
        code: `Y112`,
        price: `$340`,
        img: `img/bred.jpg`
      }, 

      {
        name: `Yeezy 350 Boost Citrin`,
        code: `Y113`,
        price: `$340`,
        img: `img/citrin.jpg`
      }, 

      {
        name: `Yeezy 350 Boost Cloud White`,
        code: `Y114`,
        price: `$340`,
        img: `img/cloud.jpg`
      }, 

      {
        name: `Yeezy 350 Boost Copper`,
        code: `Y115`,
        price: `$340`,
        img: `img/copper.jpg`
      }, 
     
      {
        name: `Yeezy 350 Boost Oreo`,
        code: `Y119`,
        price: `$340`,
        img: `img/oreo.jpg`
      }, 
  
      {
        name: `Yeezy 350 Boost Lundmark`,
        code: `Y1145`,
        price: `$340`,
        img: `img/lundmark.jpg`
      }, 
  
      {
        name: `Yeezy 350 Boost Red`,
        code: `Y1132`,
        price: `$340`,
        img: `img/red.jpg`
      }, 
  
      {
        name: `Yeezy 350 Boost Sesame`,
        code: `Y1153`,
        price: `$340`,
        img: `img/sesame.jpg`
      }, 

      {
        name: `Yeezy 350 Boost Butter`,
        code: `Y1312`,
        price: `$340`,
        img: `img/butter.jpg`
      }, 
  
      {
        name: `Yeezy 350 Boost Beluga`,
        code: `Y1124`,
        price: `$340`,
        img: `img/beluga.jpg`
      },  
  
      {
        name: `Yeezy 350 Boost Beluga 2.0`,
        code: `Y1148`,
        price: `$340`,
        img: `img/beluga2.jpg`
      }, 
  
      {
        name: `Yeezy 350 Boost Blue Tint`,
        code: `Y1128`,
        price: `$340`,
        img: `img/bluetint.jpg`
      }, 
  
      {
        name: `Yeezy 350 Boost Clay`,
        code: `Y1175`,
        price: `$340`,
        img: `img/clay.jpg`
      }, 
    
  ];
  
  
  /************* FUNCTIONS *************/
  // Stored functions that will run as part of this application
  
 
  // Function: getCourseAsHtmlString
  // Parameters: course:Object
  // Return: String of HTML (<article>)
  function getProductsAsHtmlString(products) {
  
    return `<article class="course ${products.category}">
      <h3>${products.name}</h3>
      <img src="${products.img}" alt="Logo for ${products.name}" class="product-img">
      <ul>
        <li>Products Code: <strong>${products.code}</strong></li>
        <li>Price: <strong>${products.price}</strong></li>
      </ul>  
    </article>`;
  }
  
  // Add or remove ("toggle") the .column-view class on the layout
  // Function: switchLayout
  // Parameters: none
  // Return: none
   function switchLayout() {
     document.getElementById('products').classList.toggle('column-view');
   }


   // Only include products under 1300
// Function: filterByPrice
// Parameters: prod:Object
// Return: true if less than 1300, false otherwise
function filterByPrice(prod) {
  return prod.price < 1500;
}


// Event listener, will run with each keystroke
function checkInput(event) {
  const userIsLookingFor = event.target.value.toLowerCase();
 
  const onlyMatchingNames = products.filter(prod => prod.name.toLowerCase().includes(userIsLookingFor));
  renderProducts(onlyMatchingNames);
}
  
  // Put all items of a supplied Array into the document
  // Function: renderCourses
  // Parameters: arr:Array
  // Return: none
  function renderProducts(arr) {
    // 1. map() the Array through getCourseAsHtmlString into a new Array
    const arrOfHtml = arr.map(getProductsAsHtmlString)
  
    // 2. join() the new Array into a single String of HTML
    const strOfHtml = arrOfHtml.join('\n')
  
    // 3. Put the String into the innerHTML of the document's #courses
    document.getElementById('products').innerHTML = strOfHtml;
  }
  
  
  
  /************* EXECUTABLE *************/
  // Execute functions that will access data
  

  console.table(products);

// Render courses less than 1300
const affordableProducts = products.filter(filterByPrice);
renderProducts(affordableProducts);



function checkCategory(event) {
  const userIsLookingFor = event.target.value;

  const onlyMatchingCategories = products.filter(prod => prod.category == userIsLookingFor);
  renderProducts(onlyMatchingCategories);
}


  // Render the first 10 products
     renderProducts(products.slice(0, 20));
  
  // Find the layout <button>, add a "listener" to wait for a click, then call switchLayout()
document.getElementById('layout').addEventListener('click', event => switchLayout() )

// Find the <input> field, run checkInput when a user changes the 'input'
document.getElementById('productName').addEventListener('input', event => checkInput(event) )

// Find the <select> field, run checkCategory when there's a 'change' to the drop down value
document.getElementById('productCategory').addEventListener('change', event => checkCategory(event) )