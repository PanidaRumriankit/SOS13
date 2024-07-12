const navLinks = [
  { name: "Problems", link: "/Problemspage", current: false },
  { name: "FAQ", link: "/FAQ", current: false },
  { name: "Contacts", link: "/Contacts", current: false },
];

const slides = [
  { name: "Day1", link: "https://www.canva.com/design/DAGHDuMEA0Q/v4TSfftbxOHk4d_QXOPpuA/view?utm_content=DAGHDuMEA0Q&utm_campaign=designshare&utm_medium=link&utm_source=editor" },
  { name: "Day2", link: "https://www.canva.com/design/DAGH5yooEBg/5cEyLxrY9OUq_XJlUKOz9g/view?utm_content=DAGH5yooEBg&utm_campaign=designshare&utm_medium=link&utm_source=editor" },
  { name: "Day3", link: "https://www.canva.com/design/DAGIp5fK_ik/II51RqZy-BNtzVToBr0CBg/view?utm_content=DAGIp5fK_ik&utm_campaign=designshare&utm_medium=link&utm_source=editor" }
];

const problems = [
  { title: "print()",
    describe: "Learn how to use the print() function in Python to display output.",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/9k7wrh59oh/",
    img: "sword.png",
    id: 1 
  },

  { title: "Data Type",
    describe: "Understand the basics of Python variable types through this problem.",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/kh2161it3m/",
    img: "knight.png",
    id: 2 
  },

  { title: "Basic Operations 1",
    describe:  "Explore the use of +, -, * operations on strings and integers.",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/ovus65cebm/",
    img: "shield.png",
    id: 3 
  },

  { title: "Basic Operations 2",
    describe: "Discover how to perform /, //, % operations on strings and integers.",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/5chqulocvs/",
    img: "archer.png",
    id: 4 
  },
  
  { title: "Assigning",
    describe: "understand how to update the value of an existing variable.",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/msz2huvw9x/",
    img: "arrow.png",
    id: 5 
  },

  { title: "Comparing",
    describe: "Understand how to compare variables in Python.",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/kvotlm9c6j/",
    img: "witch-hat.png",
    id: 6 
  },

  
  { title: "Type Casting",
    describe: "Master the input() function and type conversion techniques.",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/arh53gaa2u/",
    img: "jesus.png",
    id: 7 
  },


  { title: "Length of String",
    describe: "You will learn how to adaptively use the len() function",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/5up5ks3qex/",
    img: "book.png",
    id: 8 
  },

  { title: "f-string",
    describe: "Discover how to format strings using f-strings in Python.",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/vki2jny4ed/",
    img: "crystal-ball.png",
    id: 9
  },

  { title: "Comment",
    describe: "Learn how to use comments to handle errors in your code.",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/p89oazjhhe/",
    img: "feather.png",
    id: 10
  },

  { title: "String Modifying 1",
    describe: "Explore techniques to remove unwanted characters from a string.",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/q0z9certb8/",
    img: "hat.png",
    id: 11
  },

  { title: "String Modifying 2",
    describe: "Learn how to convert strings to lists and remove leading/trailing characters.",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/82yn4woz6a/",
    img: "fire.png",
    id: 12
  },

  { title: "Data Slicing",
    describe: "Yeah slicing is slicing cut cut chop chop.",
    day: 1,
    link: "https://elabsheet.org/elab/taskpads/show/zu42rs2ez1/",
    img: "church.png",
    id: 13
  },
  
  /*Day 2 begin!! fighto!! */

  { title: "List Items",
    describe: "This problem will help you understand how to acess and modify list items.",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/show/gxo0ktgcvy/",
    img: "game.png",
    id: 14
  },

  { title: "List Sorting",
    describe: "Sort is not Sauce and it is not Sword. Learn how to sort in list",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/show/we4myj3drv/",
    img: "mushroom.png",
    id: 15
  },

  { title: "List to String",
    describe: "You will learn how to convert list to str from this problem.",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/show/wogn44ajmx/",
    img: "angry-birds.png",
    id: 16
  },

  { title: "List methods",
    describe: "Get familiar with various list methods like pop(), remove(), and append().",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/show/oc6wbu3lox/",
    img: "block.png",
    id: 17
  },
  
  { title: "Tuple",
    describe: "Learn how to access and modify values within a tuple.",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/show/tfxrviqbau/",
    img: "pikachu.png",
    id: 18
  },

  { title: "Set",
    describe: "Explore various methods for using sets in Python ex union, intersection stc.",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/show/r0bmxvjeai/",
    img: "ghost.png",
    id: 19
  },

  { title: "Dict 1",
    describe: "Understand how to access and modify dictionary values.",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/show/538inm6ad9/",
    img: "noughts-and-crosses.png",
    id: 20
  },

  { title: "Dict 2",
    describe: "Learn to convert dictionary keys and values into lists using dict methods.",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/show/b4wa4fy33d/",
    img: "snake.png",
    id: 21
  },

  { title: "Dict 3",
    describe: "Why hamburger has banana in it?",
    day: 2,
    link: "https://elabsheet.org/elab/taskpads/show/fee4ktlb4m/",
    img: "jigsaw.png",
    id: 22
  },
  
  // Day 3 Let's go!! (I WANT TO REST.)

  { title: "if-else",
    describe: "You will learn how to use if-else in a function.",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/3nc6lrir1p/",
    img: "sun.png",
    id: 23
  },

  { title: "Banaifelse",
    describe: "Make previous day code better!",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/civv6hoa3k/",
    img: "moon.png",
    id: 24
  },

  { title: "For-loop",
    describe: "You will learn how to use for-loop in these problems.",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/e9x4ceit4e/",
    img: "earth.png",
    id: 25
  },

  { title: "For-loop 2",
    describe: "and now you encounter for-loop again",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/hntk8jfwne/",
    img: "mars.png",
    id: 26
  },

  { title: "While-loop",
    describe: "You will learn how to use while-loop in this problem.",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/4yio2aorp0/",
    img: "jupiter.png",
    id: 27
  },

  { title: "Comprehension",
    describe: "Simplify your code using list comprehensions.",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/c3e8udk2mp/",
    img: "planet.png",
    id: 28
  },

  { title: "(Extra)",
    describe: "Learn to create dictionary comprehension.",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/ipijjeghzz/",
    img: "galaxy.png",
    id: 29
  },

  { title: "Function",
    describe: "Understand how to define and use function.",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/qiqqirlgvk/",
    img: "ufo.png",
    id: 30
  },

  { title: "Chasing Down The Killer",
    describe: "CREATE MORE FUNCTION.",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/p8ni6s863c/",
    img: "volcano.png",
    id: 31
  },

  { title: "(Extra) List-String Converter",
    describe: "Develop a program that converts lists-strings.",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/jfl5l0tpka/",
    img: "monkey.png",
    id: 32
  },

  { title: "Banana Module Banana",
    describe: "Learn the basics of Python modules",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/fbud4i79vz/",
    img: "banana.png",
    id: 33
  },

  { title: "(Extra) The Shattered Veil",
    describe: "Understand how to use the random module.",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/hz9ikrrrab/",
    img: "smileyichi.png",
    id: 34
  },

  { title: "(Extra) Final Confrontation: The Abyss Unleashed",
    describe: "auto-turn-based game",
    day: 3,
    link: "https://elabsheet.org/elab/taskpads/show/xyl7u0sq38/",
    img: "christmasichi.png",
    id: 35
  },

  { title: "Impossible Challenge",
    describe: "Hardest project.",
    day: 3,
    link: "http://bitly.com/98K8eH ",
    img: "",
    id: 36
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
