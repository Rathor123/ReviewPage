const allContent = [
  {
    person: "Rajesh Rathor",
    job: "Front End Developer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGhhcHB5JTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    review:
      " I am extremely satisfied with my purchase! The product exceeded my expectations and the customer service was top-notch. Shipping was fast and the packaging was secure. Highly recommend this company to anyone looking for quality products and excellent service.",
  },
  {
    // Id:1,
    // image:""
    person: "Rahul Yadav",
    job: "Backend Developer",
    img: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    review:
      "I was initially hesitant to buy from this company, but I m so glad I did! The product is fantastic, the shipping was fast, and customer service went above and beyond. Highly recommend giving them a try!",
  },
  {
    // id:2,
    person: "Ram Mohan",
    job: " Designer",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    review:
      "The product arrived in good condition and was as described. However, the shipping took longer than expected and I had some difficulty getting in touch with customer service. Overall, satisfied with the purchase but room for improvement",
  },
  {
    // id:2,
    person: "Ravi Verma",
    job: " Marketer",
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    review:
      "The customer service was top-notch, they went above and beyond to help me. The product itself is amazing, exactly what I was looking for. I highly recommend this company to anyone in need of their services.",
  },
];
const image = document.getElementById("image");
const person = document.getElementsByClassName("full")[0];
const profession = document.getElementsByClassName("profession")[0];
const about = document.getElementsByClassName("aboutMe")[0];

const less = document.getElementById("less-than");
const greater = document.getElementById("greater-than");
const surprise = document.getElementById("surprise");

let count = 0;
window.addEventListener("DOMContentLoaded", function () {
  number(count);
});

function number(count) {
  const item = allContent[count];
  image.src = item.img;
  person.textContent = item.person;
  profession.textContent = item.job;
  about.textContent = item.review;
}
greater.addEventListener("click", function () {
  count++;
  if (count > allContent.length - 1) {
    count = 0;
  }
  number(count);
});
less.addEventListener("click", function () {
  if (count <= 0) {
    count = allContent.length;
  }
  count--;
  number(count);
});
// console.log(randomNumber)
surprise.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * allContent.length);
  number(randomNumber);
});

