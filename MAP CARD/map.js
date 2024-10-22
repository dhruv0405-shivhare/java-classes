let aarofobj = [
{
    "id":1,
    "imageurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s",
    "pname":"shoes",
    "bname":"nike",
    "pprice":999

},

{
    "id":2,
    "imageurl":"https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg",
    "pname":"shoes",
    "bname":"nike",
    "pprice":999

},

{
    "id":3,
    "imageurl":"https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1729468800&semt=ais_hybrid",
    "pname":"shoes",
    "bname":"nike",
    "pprice":999

},

];

let selectdiv = document.querySelector('#ans');

selectdiv.innerHTML = aarofobj.map((card) =>`
    <div style = "margin:20px;box-shadow:0px 0px 10px 2px black">
        <img src = "${card.imageurl}" alt = "" width = "200px" height ="200px">
        <div>${card.pname}</div>
        <div>${card.bname}</div>
        <div>${card.pprice}</div>
        <div>add to cart</div>
        <div>buy now</div>
    </div>
`).join(" ")