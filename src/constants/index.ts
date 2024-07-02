const navLinks = [
  { name: "Problems", link: "/Problemspage", current: false, icon: "", description: "" },
  { name: "FAQ", link: "/FAQ", current: false, icon: "", description: "" },
  { name: "Contacts", link: "#", current: false, icon: "", description: "" },
];

const slides = [
  { name: "Day1", link: "https://www.canva.com/design/DAGHDuMEA0Q/v4TSfftbxOHk4d_QXOPpuA/view?utm_content=DAGHDuMEA0Q&utm_campaign=designshare&utm_medium=link&utm_source=editor" },
  { name: "Day2", link: "https://www.canva.com/design/DAGH5yooEBg/5cEyLxrY9OUq_XJlUKOz9g/view?utm_content=DAGH5yooEBg&utm_campaign=designshare&utm_medium=link&utm_source=editor" },
  { name: "Day3", link: "https://www.canva.com/design/DAGIp5fK_ik/II51RqZy-BNtzVToBr0CBg/view?utm_content=DAGIp5fK_ik&utm_campaign=designshare&utm_medium=link&utm_source=editor" }
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

];


const for_sos14 = [
/*Hi, My junior for_sos14 const is used for store modifiable Elab code. 
If SOS14 is coming and you have no idea how to write Elab problems. You can use these Elab links to see my Elab codes.
However, don't modifly my code only modifly your own code. It will affects SOS13 problems if you modify it. (I'm not sure.) 
Ichi will come to your house at 5 a.m. if you modifly it.*/

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


];

export { navLinks, slides, problems };
