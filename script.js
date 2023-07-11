let allVideos = [
   {
      name: "Computer Monitor Shape",
      src: "https://www.youtube.com/watch?v=Rai1TOVflQ8",
      id: "vid_1"
   },
   {
      name: "Button Hover Effect",
      src: "https://www.youtube.com/embed/Rai1TOVflQ8",
      id: "vid_2"
   },
   {
      name: "Confirm Password using Html CSS & js",
      src: "https://www.youtube.com/embed/Rai1TOVflQ8",
      id: "vid_3"
   },
   {
      name: "Creative Card Hover Effect",
      src: "https://www.youtube.com/embed/Rai1TOVflQ8",
      id: "vid_4"
   },
   {
      name: "Creative Digital Clock Ui Design",
      src: "https://www.youtube.com/embed/Rai1TOVflQ8",
      id: "vid_5"
   },
   {
      name: "Creative Our Team Section",
      src: "https://www.youtube.com/embed/Rai1TOVflQ8",
      id: "vid_6"
   },
   {
      name: "Filter Text Animation Using Html and CSS",
      src: "https://www.youtube.com/embed/Rai1TOVflQ8",
      id: "vid_7"
   },
   {
      name: "Glassmorphism Calculater New Design",
      src: "https://www.youtube.com/embed/Rai1TOVflQ8",
      id: "vid_8"
   },
   {
      name: "How To  Make Cheatsheet",
      src: "https://www.youtube.com/embed/Rai1TOVflQ8",
      id: "vid_9"
   },
   {
      name: "How to create Login Form",
      src: "https://www.youtube.com/embed/Rai1TOVflQ8",
      id: "vid_10"
   },
   {
      name: "How To Make Animated Menu Icon",
      src: "https://www.youtube.com/embed/Rai1TOVflQ8",
      id: "vid_11"
   },
   {
      name: "How to make Read More Function",
      src: "https://www.youtube.com/embed/Rai1TOVflQ8",
      id: "vid_12"
   },
   {
      name: "Vertical Navigation Bar",
      src: "https://www.youtube.com/embed/Rai1TOVflQ8",
      id: "vid_13"
   }
];



function play(s,i){
let vid = document.getElementById("vid");
vid.src= s;
let all = document.getElementsByClassName("playing");
for (let i = 0; i < all.length; i++) {
all[i].classList.remove("playing");
}

let act = document.getElementById(i);
act.classList.add("playing");
}

let container = document.getElementById("playlist");

allVideos.map( (elem)=>{
   let li = document.createElement("li");
   li.innerText = elem.name;
   li.setAttribute("id", elem.id);
   li.addEventListener('click', function(){
      play(elem.src,elem.id);
   });
   container.append(li)
})