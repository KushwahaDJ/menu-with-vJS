const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img:
      "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2015/06/Strawberry-Buttermilk-Pancakes-3.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img:
      "https://res.cloudinary.com/culturemap-com/image/upload/ar_4:3,c_fill,g_faces:center,w_980/v1534346504/photos/279800_original.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img:
      "https://d3hkrbfxf7jd3r.cloudfront.net/article/lead_image/6371095/0_DSC_5334-copy-1.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img:
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/36/d8/8e/hill-country-delight.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img:
      "https://i.pinimg.com/originals/8a/b3/43/8ab3435d1d4016cf8a4bab17ead0a6b0.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img:
      "https://www.thecheesecakefactory.com/assets/images/Menu-Import/960x720-CCF_OreoDreamExtremeCheesecake.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img:
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/0b/6a/7a/the-food-here-was-appetite.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img:
      "https://www.seriouseats.com/images/2012/07/20120710-Fried-Chicken-Biscuit-PRIMARY-Cara%20Howe.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img:
      "https://assets.weforum.org/project/image/PpMO6Z44Sftl2SVQV-9rmXW6Ty7Ni9wbQgjSBaWb3J8.png",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "quarantine buddy",
    category: "dinner",
    price: 38.99,
    img:
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/36/d8/8e/hill-country-delight.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const container = document.querySelector(".btn-container");
const sectionCenter = document.querySelector(".section-center");
// load the item
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItem(menu);
  displayMenuBtn();
});

function displayMenuItem(menuItem) {
  let displayMenu = menuItem.map((item) => {
    // console.log("ping pong");
    return `<article class="menu-item">
      <img src=${item.img} class="photo" alt=${item.title} />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">${item.desc}</p>
      </div>
    </article>`;
  });
  // console.log(displayMenu);
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuBtn() {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" data-id=${category} type="button">${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  // console.log(categoryBtns);
  const filterBtns = container.querySelectorAll(".filter-btn");
  //filter the item
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset;
      const menuCotegory = menu.filter((item) => {
        if (item.category === category.id) {
          // console.log(item);
          return item;
        }
      });
      if (category.id === "all") {
        displayMenuItem(menu);
      } else {
        displayMenuItem(menuCotegory);
      }
    });
  });
}
