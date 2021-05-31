const button = document.getElementById('button-1');
const data = document.getElementById('inputs-here');
const setContent = document.getElementById('content');
const inputField = document.getElementById('input-field');
const output = document.getElementById('your-output');
const performance = document.getElementById('performance');
const outputField = document.getElementById('output-here');


function result(cntnt){
    var len = inputField.value;
    var lensize = len.length;
    var wc = 0, cw = 0, icw = 0;
    var l_Arr = [];
    var o_Arr = [];

    l_Arr = len.split(" ");
    o_Arr = cntnt.split(" ");

    for(var j = 0; j < l_Arr.length; j++){
        if(l_Arr[j] == o_Arr[j]){
            cw++;
        }
        else{
            icw++;
        }
    }

    if(l_Arr.length !== 0){
        var accuracy_percentage = (cw/(l_Arr.length))*100;
    }

    for(var i = 0; i < lensize; i++){
        if(len[i] === ' '){
            wc++;
        }
    }

    output.innerHTML = "Number of characters = "+lensize+",  Number of words = "+wc+" and Accuracy is "+accuracy_percentage;

    var analysis = "";
    if(wc < 20){
        analysis = "Do more pratise!!! Your typing speed is bad.";
    }if((wc > 20)&&(wc < 40)){
        analysis = "Ooh!!! Your typing speed is average.";
    }if((wc > 40)&&(wc < 60)){
        analysis = "Wow!!! Your typing speed is good.";
    }if((wc > 60)&&(wc < 80)){
        analysis = "Awesome!!! Your typing speed is excellent.";
    }if(wc > 80){
        analysis = "Congratulations!!! You are PRO in typing..&#128525;";
    }

    performance.innerHTML = analysis;

    data.style.display = 'none';
    outputField.style.display = 'block';

    // scriptTag = '<script src="./confetti.js"></script>';
    // const scripts = document.createElement('script');
    // scripts.setAttribute('src', './confetti.js');
    // document.body.appendChild(scripts);
}

function displayTime(){
    var rightnow = new Date();
    document.getElementById('timing').innerHTML = rightnow.toLocaleTimeString();
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
    setContent.innerHTML = cntnt;
    setInterval(displayTime, 1000);
    setTimeout(()=>{result(cntnt)}, 15000);
}

function presentText(){
    inputField.value = "";
    data.style.display = 'block';
    outputField.style.display = 'none';
    timer();
}

button.addEventListener('click', presentText);
