const navLinks = [
  { name: "Problems", link: "./Problemspage.tsx", current: false, icon: "", description: "" },
  { name: "FAQ", link: "#", current: false, icon: "", description: "" },
  { name: "Contacts", link: "#", current: false, icon: "", description: "" },
];

const slides = [
  { name: "Introduction", link: "" },
  { name: "Day1", link: "" },
  { name: "Day2", link: "" },
  { name: "Day3", link: "" }
];

const problems = [
  { title: "print()",
    describe: "This problem will help you understand how to use print() function in Python.",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/9k7wrh59oh/",
    img: "",
    id: 1 
  },

  { title: "Data Type",
    describe: "This problem will help you understand basic Python variable type.",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/kh2161it3m/",
    img: "",
    id: 2 
  },

  { title: "Basic Operations 1",
    describe: "The problem will include +, -, * operations",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/ovus65cebm/",
    img: "",
    id: 3 
  },

  { title: "Basic Operations 2",
    describe: "The problem will include /, //, % operations",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/5chqulocvs/",
    img: "",
    id: 4 
  },
  
  { title: "Assigning",
    describe: "Add later",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/msz2huvw9x/",
    img: "",
    id: 5 
  },

  { title: "Comparing",
    describe: "Add later",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/kvotlm9c6j/",
    img: "",
    id: 6 
  },

  
  { title: "input() and Type Casting",
    describe: "Add later",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/arh53gaa2u/",
    img: "",
    id: 7 
  },


  { title: "Length of String",
    describe: "Add later",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/5up5ks3qex/",
    img: "",
    id: 8 
  },

  { title: "f-string",
    describe: "Add later",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/vki2jny4ed/",
    img: "",
    id: 9
  },

  { title: "Comment",
    describe: "Add later",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/p89oazjhhe/",
    img: "",
    id: 10
  },

  { title: "String Modifying 1",
    describe: "Add later",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/q0z9certb8/",
    img: "",
    id: 11
  },

  { title: "String Modifying 2",
    describe: "Add later",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/82yn4woz6a/",
    img: "",
    id: 12
  },

  { title: "Data Slicing",
    describe: "Add later",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/zu42rs2ez1/",
    img: "",
    id: 13
  },
  
  /*Day 2 begin!! fighto!! */

  { title: "List Items",
    describe: "Add later",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/show/gxo0ktgcvy/",
    img: "",
    id: 14
  },

  { title: "List Sorting",
    describe: "Add later",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/show/we4myj3drv/",
    img: "",
    id: 15
  },

  { title: "List to String Conversion",
    describe: "Add later",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/show/wogn44ajmx/",
    img: "",
    id: 16
  },

  { title: "pop() remove() and append()",
    describe: "Add later",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/show/oc6wbu3lox/",
    img: "",
    id: 17
  },
  
  { title: "Tuple",
    describe: "Add later",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/show/tfxrviqbau/",
    img: "",
    id: 18
  },

  { title: "Set",
    describe: "Add later",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/show/r0bmxvjeai/",
    img: "",
    id: 19
  },

  { title: "Dict 1",
    describe: "Add later",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/show/538inm6ad9/",
    img: "",
    id: 20
  },

  { title: "Dict 2",
    describe: "Add later",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/show/b4wa4fy33d/",
    img: "",
    id: 21
  },

  { title: "Dict 3",
    describe: "Add later",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/show/fee4ktlb4m/",
    img: "",
    id: 22
  },
  
  // Day 3 Let's go!!

  { title: "if-else",
    describe: "Add later",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/3nc6lrir1p/",
    img: "",
    id: 23
  },

  { title: "Banaifelse",
    describe: "Add later",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/civv6hoa3k/",
    img: "",
    id: 24
  },

  { title: "For-loop",
    describe: "Add later",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/e9x4ceit4e/",
    img: "",
    id: 25
  },

  { title: "Filter The Document",
    describe: "Add later",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/hntk8jfwne/",
    img: "",
    id: 26
  },

  { title: "While-loop",
    describe: "Add later",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/4yio2aorp0/",
    img: "",
    id: 27
  },

  { title: "List Comprehension",
    describe: "Add later",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/c3e8udk2mp/",
    img: "",
    id: 28
  },

  { title: "(Extra) Dict Comprehension",
    describe: "Add later",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/ipijjeghzz/",
    img: "",
    id: 29
  },

  { title: "Function",
    describe: "Add later",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/qiqqirlgvk/",
    img: "",
    id: 30
  },

  { title: "Chasing Down The Killer",
    describe: "Add later",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/p8ni6s863c/",
    img: "",
    id: 31
  },

  { title: "(Extra) List-String Converter",
    describe: "Add later",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/jfl5l0tpka/",
    img: "",
    id: 32
  },

  { title: "Module",
    describe: "Add later",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/fbud4i79vz/",
    img: "",
    id: 33
  },

  { title: "(Extra) The Shattered Veil",
    describe: "Add later",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/hz9ikrrrab/",
    img: "",
    id: 34
  },

  { title: "(Extra) Final Confrontation: The Abyss Unleashed",
    describe: "Add later",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/xyl7u0sq38/",
    img: "",
    id: 35
  },

];

const elab_exercise_source_code = [
  /*Dear my junior.
  Do not modifly these code if you modifly it. It will affects SOS13 problems.
  Scroll down to see for_sos14 const you can use the link at the for_sos14 const to clone my exercise.
  Ichi will come to your house at 5 a.m. if you modifly the code in these link.*/

  {
    title: "print()",
    day:1,
    link: "https://elabsheet.org/elab/taskpads/change/9k7wrh59oh/gdrpx14n2x/",
    id: 1
  },

  {
    title: "Data Type",
    day:1,
    link: "https://elabsheet.org/elab/taskpads/change/kh2161it3m/kv2mu8iqfu/",
    id: 2
  },

  {
    title: "Basic Operations 1",
    day:1,
    link: "https://elabsheet.org/elab/taskpads/change/ovus65cebm/8xms5dxc1y/",
    id: 3
  },

  {
    title: "Basic Operation 2",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/change/5chqulocvs/88fof3abfu/",
    id: 4
  },

  {
    title: "Assigning",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/change/msz2huvw9x/5upyf7ajlu/",
    id: 5
  },

  {
    title: "Comparing",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/change/kvotlm9c6j/p7lcmostrh/",
    id: 6
  },

  {
    title: "input() and Type Casting",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/change/arh53gaa2u/6q76iarz2h/",
    id: 7
  },
  
  {
    title: "Length of String",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/change/5up5ks3qex/367femczew/",
    id: 8
  },


  {
    title: "f-string",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/change/vki2jny4ed/j6zwli08b5/",
    id: 9
  },


  {
    title: "Comment",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/change/p89oazjhhe/hsbm60chyn/",
    id: 10
  },

  {
    title: "String Modifying 1",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/change/q0z9certb8/wo480bt0sz/",
    id: 11
  },

  {
    title: "String Modifying 2",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/change/82yn4woz6a/0x4lguz0if/",
    id: 12
  },

  {
    title: "Data Slicing",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/change/zu42rs2ez1/md250emcyo/",
    id: 13
  },

  {
    title: "List Items",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/change/gxo0ktgcvy/ocisekfk01/",
    id: 14
  },

  {
    title: "List Sorting",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/change/we4myj3drv/ul6izx64v6/",
    id: 15
  },

  {
    title: "List to String Conversion",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/change/wogn44ajmx/tsfib4gn5w/",
    id: 16
  },

  {
    title: "pop() remove() and append()",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/change/oc6wbu3lox/jerrmfwcna/",
    id: 17
  },

  {
    title: "Tuple",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/change/tfxrviqbau/ko15r63jav/",
    id: 18
  },

  {
    title: "Set",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/change/r0bmxvjeai/ofu4k1y5rw/",
    id: 19
  },

  {
    title: "Dict 1",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/change/538inm6ad9/ag39nb4icb/",
    id: 20
  },

  {
    title: "Dict 2",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/change/b4wa4fy33d/581tr5ur8z/",
    id: 21
  },

  {
    title: "Dict 3",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/change/fee4ktlb4m/99yqhoudx8/",
    id: 22
  },

  {
    title: "if-else",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/change/3nc6lrir1p/taedv4uiub/",
    id: 23
  },

  {
    title: "Banaifelse",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/change/civv6hoa3k/ckxmtr7udh/",
    id: 24
  },

  {
    title: "For-loop",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/change/e9x4ceit4e/e47kdqjhcq/",
    id: 25
  },

  {
    title: "Filter The Document",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/change/hntk8jfwne/s1a59f0phu/",
    id: 26
  },

  {
    title: "While-loop",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/change/4yio2aorp0/pkurian4tz/",
    id: 27
  },

  {
    title: "List Comprehension",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/change/c3e8udk2mp/962eb817dv/",
    id: 28
  },
  
  {
    title: "(Extra) Dict Comprehension",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/change/ipijjeghzz/ubjbg6p5r5/",
    id: 29
  },

  {
    title: "Function",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/change/qiqqirlgvk/g74n4y1zor/",
    id: 30
  },

  {
    title: "Chasing Down The Killer",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/change/p8ni6s863c/330fkqjx5l/",
    id: 31
  },

  {
    title: "(Extra) List-String Converter",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/change/jfl5l0tpka/5q5m4hp9ru/",
    id: 32
  },

  {
    title: "Module",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/change/fbud4i79vz/ddu0lamfbd/",
    id: 33
  },

  {
    title: "(Extra) The Shattered Veil",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/change/hz9ikrrrab/t3vx8pbuxd/",
    id: 34
  },

  {
    title: "(Extra) Final Confrontation: The Abyss Unleashed",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/change/xyl7u0sq38/blwgr6utdy/",
    id: 35
  },



  
]

const for_sos14 = [
/*Hi, My junior for_sos14 const is used for store cloneable Elab code. 
If SOS14 is coming and you have no idea how to write Elab problems. You can use these Elab links to see my Elab codes by cloning it.
However, don't modifly my code at elab_exercise_source_code only modifly your copy code.*/

 



];

export { navLinks, slides, problems };
