const game = document.getElementById("main")
const dialogbox = document.getElementById("dialog")
const textareabox = document.getElementById("textarea");
textareabox.value = `
Me: "Bro… bhook itni lag rahi hai na, pet andar se maa-behen kar raha hai."
Bro: "Mere pet ne toh direct warning de di—Maggie ya maut."

Scene: "*dono chupke se kitchen me ghuste hain*"

Me: "Light dheere on kar, disco nahi khol rahe."
Bro: "Tu gas on kar be bhukkad."

Scene: "*fridge khulta hai*"

Bro: "ABE—"
Me: "YE KYA BAKCHODI HAI?!"

Scene: "*Papa kitchen me khade, shaanti se ICE CREAM kha rahe*"

Papa: "Kya dekh raha hai be gadhe?"
Me: "Papa… aap bhi midnight kaand?"
Papa: "Chup re nalayako, tum log se hi seekha hai."

Bro: "Toh Maggie?"
Papa: "Banao banao, jaldi. Ice cream pighal rahi hai meri izzat ki tarah."

Me: "Papa aap toh legend nikle."
Papa: "Haan haan, ab bakwaas band aur paani daal."

Scene: "*gas jalti hai*"

Bro: "Abe dheere, cylinder bhi bolega—kaunsa chutiya aa gaya."

Scene: "*ACHANAK FOOTSTEPS*"

Papa: "OH SHIT—MUMMY AA RAHI HAI!"
Me: "Papa bolo kuch!"
Papa: "TIME NAHI HAI BE!"

Scene: "*Papa ice cream uthata hai*"

Papa: "Main nikal raha hoon, tum dono apna dekh lo."

Scene: "*Papa full sprint maar ke bedroom me bhaag jaata hai*"
Scene: "*ice cream tapak rahi hoti hai*"

Bro: "ABE DHOKHEBAAZ!"
Me: "Kasam se, ye aadmi khud ka baap nikla!"

Mummy: "KITCHEN ME KYA CHAL RAHA HAI?!"
Me: "Mummy wo—"
Mummy: "CHUP!"

Scene: "*chappal ready*"

Mummy: "Raat ke 12:40 pe Maggie?! Dimag ghaas charne gaya hai kya?!"

Scene: "*DHAAP*"

Bro: "AA MUMMY!"
Me: "Mummy main toh bas dekh raha tha!"

Mummy: "AB TU!"

Scene: "*THAPP*"

Me: "YE SAB BRO KI GHATIYA PLANNING THI!"
Bro: "ABE KAMINE DOUBLE GAME!"

Mummy: "DONO NAMOONE! SO JAO, WARNA AUR PADEGI!"
Scene: *Mummy gusse me chali jaati hai*

Scene: "*silence*"

Me: "Bro… papa safe hai?"
Bro: "Haan… aur ice cream bhi."

Scene: "*Bedroom se awaaz*"

Papa: "Next time chocolate flavour laana."
Me: "Kasam se, sabse bada harami toh papa nikla."
Bro: "Hum Maggie ke liye pit gaye, aur banda dessert review de raha hai."
`
let script = textareabox.value;

let index = 0
let commands = script
  .split("\n")  // Breaks the script into lines
  .map(line => line.trim()) // Removes spaces etc.
  .filter(line => line !== "") // Removes empty lines
let cha,dia;

function update(){
  script = textareabox.value;
  index = 0
  commands = script
  .split("\n")  // Breaks the script into lines
  .map(line => line.trim()) // Removes spaces etc.
  .filter(line => line !== "")
  dialogf()
}

let dialogf = ()=>{
  if(commands.length == 0) return console.error("bhai script tho likho");
  if(index >= commands.length) return
  else{
    cha = commands[index].split(":")[0].trim() // only splitting
    dia = commands[index].match(/"(.*)"/)[1].trim() // only splitting
    index++
    dialogbox.innerText = cha + ": " + dia;
  }
}
dialogf()
dialogbox.onclick = dialogf;
