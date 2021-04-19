function result(){
    var len = document.getElementById("ip1").value;
    var lensize = len.length;
    var wc = 0;
    for(var i = 0; i < lensize; i++){
        if(len[i] === ' '){
            wc++;
        }
    }
    document.getElementById('p1').innerHTML = "Number of characters = "+lensize+" and number of words = "+wc;
    document.getElementById('p1').style.textAlign = 'center';
    document.getElementById('i1').innerHTML = "";
    var analysis = "";
    if(wc < 20){
        analysis = "Do more pratise!!! Your typing speed is bad.";
    }
    if((wc > 20)&&(wc < 40)){
        analysis = "Ooh!!! Your typing speed is average.";
    }
    if((wc > 40)&&(wc < 60)){
        analysis = "Wow!!! Your typing speed is good.";
    }
    if((wc > 60)&&(wc < 80)){
        analysis = "Awesome!!! Your typing speed is excellent.";
    }
    if(wc > 80){
        analysis = "Congratulations!!! You are PRO in typing..&#128525;";
    }

    document.getElementById('msg').innerHTML = analysis;
}

function displayTime(){
    var rightnow = new Date();
    document.getElementById('timing').innerHTML = rightnow.toLocaleTimeString();
    var textcolor = ['crimson', 'white', 'green', 'blue', 'tomato', 'darkgreen', 'skyblue'];
    document.getElementById('msg').style.color = textcolor[Math.floor(Math.random()*7)];
}

function timer(){
    var rightnow = new Date();
    var content = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facere modi impedit aperiam placeat voluptas magni nihil, unde quae laudantium distinctio, cupiditate qui earum nostrum. Totam distinctio expedita, atque molestias quod ad animi commodi delectus tempora, architecto corrupti magni in suscipit placeat! Dolorum praesentium commodi explicabo ipsam debitis assumenda ab, ex impedit deserunt velit. Ducimus iste laborum possimus non repellendus numquam rem distinctio voluptatibus cum qui, ex sunt voluptates debitis, aliquid, excepturi perferendis eaque! Incidunt, dolor eum sed quidem veniam iure tenetur eveniet doloremque ex optio nulla, itaque non amet suscipit. Voluptates, modi! Unde voluptatum molestiae doloremque, adipisci eos perferendis!", 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aliquam fuga nulla magnam id tempore iusto, doloribus aliquid debitis distinctio cum totam odio corporis accusamus nihil atque impedit ducimus illo molestias eligendi architecto inventore unde? Voluptatum, recusandae? Officiis, illo laboriosam. Inventore voluptates, blanditiis aut modi voluptatum labore, itaque nulla natus fugit veritatis adipisci sed eligendi impedit, atque ex? Animi placeat vitae sequi eius perferendis, aspernatur deserunt reiciendis dolorem? A deserunt exercitationem molestiae quod pariatur. Architecto quia ducimus dignissimos id laudantium voluptas voluptatibus sint nihil in, numquam atque expedita, alias repellendus dolorem! Consequatur nobis voluptates quas adipisci, debitis consequuntur nulla qui.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate impedit maxime doloremque, autem nihil aut error quia ipsam laborum earum? Tempora, suscipit esse! Est voluptates ipsam hic. Modi deserunt cupiditate, ipsum, perferendis omnis necessitatibus, corrupti vitae repellat aliquam architecto unde. Harum aut reiciendis ratione, atque sapiente eum corporis nihil maxime incidunt. Sed repellat enim temporibus voluptates quisquam nobis ex atque molestias corporis cum provident recusandae sunt doloribus pariatur ea rerum hic autem libero praesentium, quod animi dolor aut culpa? Inventore culpa est odio quibusdam natus, voluptates quod distinctio alias consectetur deserunt, debitis veritatis aspernatur ex officiis. Similique ipsum fuga odio.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste possimus ipsa porro, sapiente nihil et ab quisquam! Mollitia quia delectus iste saepe quo inventore sit sint voluptates nihil. Praesentium totam accusantium id eius est explicabo, dolorum corporis aut, voluptatem, repudiandae exercitationem eaque debitis accusamus. Dolorum sed repellendus nam blanditiis adipisci at perspiciatis dolorem aspernatur aliquam mollitia assumenda eveniet sint aperiam laboriosam accusamus cupiditate quod, voluptatibus tempora cumque exercitationem, architecto eos quo iste. Quia praesentium ratione, nihil dolor ipsum facilis cupiditate nesciunt minus? Nam perferendis, ipsa voluptatem incidunt quod officiis repudiandae ex est veniam vitae commodi quas a laboriosam corrupti velit."
    ];
    var cntnt = content[Math.floor(Math.random()*4)];
    document.getElementById('p1').innerHTML = cntnt;
    document.getElementById('p1').style.textAlign = 'justify';
    document.getElementById('msg').innerHTML = "";
    //var ip = "<input type='text' id='ip1' placeholder='text here' style='width:100%;'>";
    var ip = "<textarea id='ip1' placeholder='write here' style='width: 94%; margin-left: 2rem; margin-right: 2rem; height: 20vh'></textarea>";
    document.getElementById('i1').innerHTML = ip;
    setInterval(displayTime, 1000);
    setTimeout(result, 60000);
}