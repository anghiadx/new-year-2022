const blockTransitionTime = 1000;
const trucTransitionTime = 500;

var bg = document.getElementById('background');
var truc = document.getElementById('truc');
var all_ = document.getElementById('all--');
var tip = document.getElementById('tip');
var block = document.querySelectorAll('#truc .block');
var subBlock = document.querySelectorAll('#truc .sub-block');
var blockText = document.querySelectorAll('.block .block-text');
var text = document.querySelectorAll('.block .sub-block .text');
var ngaytetqueem = new Audio('asset/audio/ngaytetqueem.mp3');
var tinhtinh = new Audio('asset/audio/tinhtinh.mp3');
var quayso = new Audio('asset/audio/quayso.mp3');

var subBg = document.querySelectorAll('#background .sub-bg');

function script(){
    function set(){
        // set transition for block
        for(let value of block)
            value.style.transition = `transform ${blockTransitionTime}ms`;
        
        truc.style.transition = `transform ${trucTransitionTime}ms`;


    }
    function one(){
        truc.onclick = function(){

            block[0].style.transform = 'rotateX(90deg) translateZ(60px)';
            block[1].style.transform = 'rotateX(-270deg) translateZ(60px)';
            block[2].style.transform = 'rotateX(-990deg) translateZ(60px)';
            block[3].style.transform = 'rotateX(-1350deg) translateZ(60px)';
            quayso.play();
            tip.style.display = 'none';
            
            setTimeout(()=>{
                tinhtinh.play();
            },trucTransitionTime+500);
            setTimeout(()=>{
                bg.style.transform = 'translateY(0)';
                setTimeout(()=>{
                    truc.style.transform = 'rotateY(10deg) translateY(100%)';
                    // goi two
                    two();
                },trucTransitionTime);

                ngaytetqueem.play();
                ngaytetqueem.loop = true;
            },blockTransitionTime+2500);
            this.onclick = ()=>{};
        };
    }

    function two(){
        setTimeout(()=>{
            test();
        },500);
    }


    set();
    one();
}

script();

function test(){
    for(let value of block)
        value.style.transition = `transform 500ms`;

    subBg[0].style.display = 'block';
    subBg[1].style.display = 'block';

    setTimeout(()=>{
        let index = -1;
        var set = setInterval(()=>{
            index++;

            if(index==3){
                clearInterval(set);
                subBlock[0].style.animation = 'hkhh .7s 1s';
                subBlock[1].style.animation = 'hkhh .7s 1.1s ';
                subBlock[2].style.animation = 'hkhh .7s 1.2s ';
                subBlock[3].style.animation = 'hkhh .7s 1.3s ';
                setTimeout(autoHoaRoi,1400);
                setTimeout(happynewyear,2200);
                setTimeout(RUNFIREWORKS,3000);

                setTimeout(()=>{
                    blockText[0].style.animation = 'hpny2 3.5s infinite';
                    blockText[1].style.animation = 'hpny2 3.5s .15s infinite';
                    blockText[2].style.animation = 'hpny2 3.5s .3s infinite';
                    blockText[3].style.animation = 'hpny2 3.5s .45s infinite';
                },3300)

                setTimeout(()=>{
                    text[0].style.animation = 'hkhh2 3.5s infinite';
                    text[1].style.animation = 'hkhh2 3.5s infinite';
                    text[2].style.animation = 'hkhh2 3.5s infinite';
                    text[3].style.animation = 'hkhh2 3.5s infinite';
                },4700);
                
            }
                
            
            block[index].style.transform = block[index].style.transform + 'translateZ(40px)';
            blockText[index].style.display = 'block';
            setTimeout(()=>{
                block[index].style.transform = block[index].style.transform + 'translateZ(-40px)';
            },250);

        },300);
    },500);
            
}


class HOA{
    constructor(){
        this.set();
        this.create();
        this.run();
    }
    set(){
        this.left = Math.floor(Math.random() * 90);
        this.timeDown = Math.floor(Math.random() * (8-3) + 3);
        this.scale = Math.floor(Math.random() * (11-7) + 7)/10;
    }
    create(){
        // Khoi tao hoa
        this.hoa = document.createElement('div');
        this.hoa.classList.add('hoa');
        this.hoaroi = document.createElement('div');
        this.hoaroi.classList.add('hoaroi');

        // random do lon cua hoa
        this.hoa.style.transform = `scale(${this.scale})`;

        // add hoa vao hoaroi
        this.hoaroi.appendChild(this.hoa);

        // Thiet lap vi tri
        this.hoaroi.style.left = `${this.left}%`;
        this.hoaroi.style.top = '-10%';
        this.hoaroi.style.transition = `top ${this.timeDown}s linear`;
        

    }
    run(){
        
        // add hoa vao body
        document.body.appendChild(this.hoaroi);

        // cho hoa roi xuong
        setTimeout(()=>{
            this.hoaroi.style.top = '110%';
        },100);
        
        
        // remove
        setTimeout(()=>{
            document.body.removeChild(this.hoaroi);
        },this.timeDown*1000+100);
    }
}
var hoaroi;
function autoHoaRoi(){
    new HOA();
    hoaroi = setTimeout(()=>{
        autoHoaRoi();
    },Math.floor(Math.random() * (11-5) + 5)*100);
}

var hpny = document.querySelector("#happynewyear");
var textNewYear = document.querySelector("#text-ny");
var nghiadx = document.querySelectorAll(".nghiadx");
function happynewyear(){
    hpny.style.display = 'flex';
    setTimeout(()=>{
        nghiadx[0].style.width=nghiadx[1].style.width = "100%";
        setTimeout(()=>{
            textNewYear.stop();
            textNewYear.innerText = 'Năm hết tết đến, xin chúc cho tất cả mọi người có một năm mới phát tài, tràn ngập niềm vui, đẩy lùi được dịch bệnh. HAPPY NEW YEAR! <3';
            textNewYear.start();
            hpny.style.animation = 'happynewyear2 2s linear infinite';
        },700);
    },800);
}


// FIREWORK

// Thông số điều chỉnh
const TIME_FIRE = 800; //ms - 
const MAX_ARRAY_FIREWORK = 25; 

// Khởi tạo các element cần thiết


class FIRE_1{
    constructor(){

    }
    create(){
        //create fire-1
        this.fire = $("<div>",{class: 'fire-1'});


        //create dot
        this.dot_1 = $("<div>",{class: 'dot dot-1'});
        this.dot_2 = $("<div>",{class: 'dot dot-2'});
        this.dot_3 = $("<div>",{class: 'dot dot-3'});
        this.dot_4 = $("<div>",{class: 'dot dot-4'});
        this.dot_5 = $("<div>",{class: 'dot dot-5'});

        //append vao fire 1
        this.fire.append(this.dot_1,this.dot_2,this.dot_3,this.dot_4,this.dot_5);

    }

    effect(){
        this.dot_1.css('transform','scale(.6)');
        this.dot_2.css('top','0');
        this.dot_3.css('top','0');
        this.dot_4.css('top','0');
        this.dot_5.css('top','0');
            
        // An di sau khi ban
        this.fire.css('opacity',0);
    }
}

class FIRE_2{ //g2
    constructor(){
        
        this.NAME = 'normal'; 

        this.TRANSITION_DOT_1 = 900; //ms 
        this.TRANSITION_DOT_2 = 800; //ms
        this.TRANSITION_DOT_3 = 1100; //ms
        this.TRANSITION_DOT_4 = 1250; //ms
        this.TRANSITION_DOT_5 = 1600; //ms

        this.TIME_HIDDEN_FIRE2 = 800; //ms 

        // Remove
        this.REMOVE = 3000; //ms
        
    }
    create(){

        // Tao fire 2
        this.fire_2 = $('<div>',{class: 'fire-2'});  
        
        this.group = [];

        this.dot2 = [];

        for(var i = 0; i<20; i++){

            
            this.group[i] = $('<div>',{class: 'group'});

            
            this.dot2[i*5] = $('<div>',{class: 'dot2 dot-2-1',style: `transition: top ${this.TRANSITION_DOT_1}ms`});
            this.dot2[i*5+1] = $('<div>',{class: 'dot2 dot-2-2',style: `transition: top ${this.TRANSITION_DOT_2}ms`});
            this.dot2[i*5+2] = $('<div>',{class: 'dot2 dot-2-3',style: `transition: top ${this.TRANSITION_DOT_3}ms`});
            this.dot2[i*5+3] = $('<div>',{class: 'dot2 dot-2-4',style: `transition: top ${this.TRANSITION_DOT_4}ms`});
            this.dot2[i*5+4] = $('<div>',{class: 'dot2 dot-2-5',style: `transition: top ${this.TRANSITION_DOT_5}ms`});

            // append dot vao group
            this.group[i].append(this.dot2[i*5],this.dot2[i*5+1],this.dot2[i*5+2],this.dot2[i*5+3],this.dot2[i*5+4]);

            // append group vao fire_2
            this.fire_2.append(this.group[i]);
        }

        

        this.audio = new Audio('asset/audio/normal-2-1.mp3');

    }

    effect(){
        
        this.fire_2.css('opacity',1);

        
        let ran = Math.floor(Math.random() * 10);
        let scope; 

        
        for(var i = 0; i<this.group.length; i++){
            let corner = i==0 ? 0 : i==1 ? 18 : i==2 ? 36 : i==3 ? 54 : i==4 ? 72 : i==5 ? 90 :
            i==6 ? 108 : i==7 ? 126 :  i==8 ? 144 : i==9 ? 162 : i==10 ? 180 : i==11 ? 198 : i==12 ? 216 :
            i==13 ? 234 : i==14 ? 252 : i==15 ? 270 : i==16 ? 288 : i==17 ? 306 : i==18 ? 324 : 342;

            // Set goc ban
            this.group[i].css('transform',`rotate(${corner}deg)`);

            // Set pham vi ban (130 - 250)

            // XÁC SUẤT TỎA THƯỜNG 50%
            if(ran<=5)
                scope = Math.floor(Math.random() * (251 - 130) + 130);
            else if(ran>5 && ran <=7) // XÁC SUÁT TỎA TRÁI TIM 20%
                scope = i==0 ? 210 : i==1 ? 180 : i==2 ? 170 : i==3 ? 170 : i==4 ? 180 : i==5 ? 200 :
                    i==6 ? 210 : i==7 ? 210 :  i==8 ? 200 : i==9 ? 170 : i==10 ? 120 : i==11 ? 170 : i==12 ? 200 :
                    i==13 ? 210 : i==14 ? 210 : i==15 ? 200 : i==16 ? 180 : i==17 ? 170 : i==18 ? 170 : 180;
            else{ // XÁC SUẤT TỎA TRÒN 30%
                scope = 250;
                // Set transition de hieu ung cham hon
                this.dot2[i*5].css('transition',`top ${this.TRANSITION_DOT_1+200}ms`);
                this.dot2[i*5+1].css('transition',`top ${this.TRANSITION_DOT_2+300}ms`);
                this.dot2[i*5+2].css('transition',`top ${this.TRANSITION_DOT_3+350}ms`);
                this.dot2[i*5+3].css('transition',`top ${this.TRANSITION_DOT_4+400}ms`);
                this.dot2[i*5+4].css('transition',`top ${this.TRANSITION_DOT_5+450}ms`);
            }

            this.dot2[i*5].css('top',`${scope}px`);
            this.dot2[i*5+1].css('top',`${scope}px`);
            this.dot2[i*5+2].css('top',`${scope}px`);
            this.dot2[i*5+3].css('top',`${scope}px`);
            this.dot2[i*5+4].css('top',`${scope}px`);
        }

        // Kích hoạt âm thanh nổ
        this.audio.play();

        // An Fire_2 sau khi ban
        setTimeout(()=>{
            // di chuyen fire 2 xuong va an
            this.fire_2.css({transition: 'opacity 1s linear, top .7s linear', top: '10%',opacity: 0});

        },scope==250 ? this.TIME_HIDDEN_FIRE2+200 : this.TIME_HIDDEN_FIRE2);
    }

}

class FIRE_2_DOUBLE{
    constructor(){
        // Thiet lap thong so

        this.NAME = 'double'; // Tên của loại pháo - để thiết lập âm thanh phù hợp

        this.TRANSITION_DOT_1 = 800; //ms - Thời gian để dot-1 di chuyển
        this.TRANSITION_DOT_2 = 700; //ms
        this.TRANSITION_DOT_3 = 900; //ms
        this.TRANSITION_DOT_4 = 1200; //ms
        this.TRANSITION_DOT_5 = 1300; //ms

        //time an dot -> ban sub dot
        this.TIME_HIDDEN_DOT = 700; //ms

        this.TIME_HIDDEN_FIRE2 = 1000; //ms Thoi gian an fire 2

        // Remove
        this.REMOVE = 5000; //ms

        // Màu sắc của pháo hoa
        this.color = 'rgb(255,255,255)';
    }
    // FIREWORK sẽ gọi
    updateColor(color){
        this.color = color;
    }

    create(){
        // Tao fire 2 double
        this.fire_2 = $('<div>',{class: 'fire-2'});  
        
        this.group = [];

        this.dot_2_double = [];
        this.sub_double = [];


        for(var i = 0; i<20; i++){

            // Tao mang group
            this.group[i] = $('<div>',{class: 'group'});

            // Tao mang dot va set css transition
            this.dot_2_double[i*5] = $('<div>',{class: 'dot2 dot-double-1',style: `transition: top ${this.TRANSITION_DOT_1}ms`});

            // Tao sub dot double va append vao dot double 1 - set màu sắc luôn
            this.sub_double[i*4] = $('<div>',{class: 'sub-dot sub-double-1',style: `background: ${this.color};`});
            this.sub_double[i*4+1] = $('<div>',{class: 'sub-dot sub-double-2',style: `background: ${this.color};`});
            this.sub_double[i*4+2] = $('<div>',{class: 'sub-dot sub-double-3',style: `background: ${this.color};`});
            this.sub_double[i*4+3] = $('<div>',{class: 'sub-dot sub-double-4',style: `background: ${this.color};`});

            // append vao dot double 1
            this.dot_2_double[i*5].append(this.sub_double[i*4],this.sub_double[i*4+1],this.sub_double[i*4+2],this.sub_double[i*4+3]);

            // Tiep tuc tao cac double dot tiep theo
            this.dot_2_double[i*5+1] = $('<div>',{class: 'dot2 dot-double-2',style: `transition: top ${this.TRANSITION_DOT_2}ms`});
            this.dot_2_double[i*5+2] = $('<div>',{class: 'dot2 dot-double-3',style: `transition: top ${this.TRANSITION_DOT_3}ms`});
            this.dot_2_double[i*5+3] = $('<div>',{class: 'dot2 dot-double-4',style: `transition: top ${this.TRANSITION_DOT_4}ms`});
            this.dot_2_double[i*5+4] = $('<div>',{class: 'dot2 dot-double-5',style: `transition: top ${this.TRANSITION_DOT_5}ms`});

            // append dot vao group
            this.group[i].append(this.dot_2_double[i*5],this.dot_2_double[i*5+1],this.dot_2_double[i*5+2],this.dot_2_double[i*5+3],this.dot_2_double[i*5+4]);

            // append group vao fire_2
            this.fire_2.append(this.group[i]);
        }

        // Tao doi tượng am thanh
        // 1. Am thanh dot
        this.audio = new Audio('asset/audio/double-2-1.mp3');

        // 2. Am thanh subdot
        this.subaudio = new Audio('asset/audio/sub-double-1.mp3');
    }

    effect(){
        // Set opacity de hien thi fire_2
        this.fire_2.css('opacity',1);

            //Lấy giá trị random để kích nổ loại pháo thích hợp
        let ran = Math.floor(Math.random() * 10);

        let scope; // Phạm vi bắn của mỗi group

        // Set goc ban cho cac group
        for(var i = 0; i<this.group.length; i++){
            let corner = i==0 ? 0 : i==1 ? 18 : i==2 ? 36 : i==3 ? 54 : i==4 ? 72 : i==5 ? 90 :
            i==6 ? 108 : i==7 ? 126 :  i==8 ? 144 : i==9 ? 162 : i==10 ? 180 : i==11 ? 198 : i==12 ? 216 :
            i==13 ? 234 : i==14 ? 252 : i==15 ? 270 : i==16 ? 288 : i==17 ? 306 : i==18 ? 324 : 342;

            // Set goc ban
            this.group[i].css('transform',`rotate(${corner}deg)`);

            // Set pham vi ban (100 - 200)

            // XÁC SUẤT TỎA THƯỜNG là 50%
            if(ran<=5)
                scope = Math.floor(Math.random() * (201 - 100) + 100);
            else if(ran>5 && ran <=7) // XÁC SUÁT TỎA TRÁI TIM là 20%
                scope = i==0 ? 190 : i==1 ? 160 : i==2 ? 150 : i==3 ? 150 : i==4 ? 160 : i==5 ? 180 :
                    i==6 ? 190 : i==7 ? 190 :  i==8 ? 180 : i==9 ? 150 : i==10 ? 100 : i==11 ? 150 : i==12 ? 180 :
                    i==13 ? 190 : i==14 ? 190 : i==15 ? 180 : i==16 ? 160 : i==17 ? 150 : i==18 ? 150 : 160;
            else{ // XÁC SUẤT TỎA TRÒN là 30%
                scope = 200;
                // Set transition de hieu ung cham hon khi toa tron
                this.dot_2_double[i*5].css('transition',`top ${this.TRANSITION_DOT_1+200}ms`);
                this.dot_2_double[i*5+1].css('transition',`top ${this.TRANSITION_DOT_2+300}ms`);
                this.dot_2_double[i*5+2].css('transition',`top ${this.TRANSITION_DOT_3+350}ms`);
                this.dot_2_double[i*5+3].css('transition',`top ${this.TRANSITION_DOT_4+400}ms`);
                this.dot_2_double[i*5+4].css('transition',`top ${this.TRANSITION_DOT_5+450}ms`);
            }

            this.dot_2_double[i*5].css('top',`${scope}px`);
            this.dot_2_double[i*5+1].css('top',`${scope}px`);
            this.dot_2_double[i*5+2].css('top',`${scope}px`);
            this.dot_2_double[i*5+3].css('top',`${scope}px`);
            this.dot_2_double[i*5+4].css('top',`${scope}px`);
        }

        // Kich hoat am thanh 1
        this.audio.play();

        // Thay doi background cho dot ve trong suot de ban sub dot
        setTimeout(()=>{

            // ẨN DOT 1
            this.fire_2.css({transition: `background ${this.TIME_HIDDEN_DOT}ms linear, top .7s`, 'background': 'rgba(0,0,0,0)',top: '0%'});

            // TỎA SUB DOT
            setTimeout(() => {
                for(var i = 0; i<this.group.length; i++){
                    this.sub_double[i*4].css({opacity: 1, top: '90px', left: `-40px`});
                    this.sub_double[i*4+1].css({opacity: 1, top: '90px', left: `40px`});
                    this.sub_double[i*4+2].css({opacity: 1, top: '110px', left: `-20px`});
                    this.sub_double[i*4+3].css({opacity: 1, top: '110px', left: `20px`});
                }
                
                // Kich hoat am thanh 2
                this.subaudio.play();

                // RƠI XUỐNG VÀ ẨN ĐI
                setTimeout(() => {
                    this.fire_2.css({transition: 'opacity 2s linear, top 2s',top: '25%',opacity: 0});
                }, 500);
            }, 500);
        },scope==200 ? this.TIME_HIDDEN_FIRE2+50 : this.TIME_HIDDEN_FIRE2-234);
    }

}

class FIREWORKS{
    constructor(){
        //ranrom mau sac cho Firework
        this.fireworkColor = 'rgb(' + Math.floor(Math.random() * 255) + ','+ Math.floor(Math.random() * (256-200) + 200) + ',' + Math.floor(Math.random() * 255) + ')';
        //fireworkColor = 'yellow';

        // Khoi tao fire-1
        this.FIRE_1 = new FIRE_1();
        // Khoi tao cac thuoc tinh cho fire_1
        this.FIRE_1.create();

        // Lay random 50-50% de lay loai phao phu hop
        this.ran = Math.floor(Math.random() * 10);

        // Pháo thường 60% - Pháo double 40%
        if(this.ran <=6)
            // Khởi tạo fire_2 thường
            this.FIRE_2 = new FIRE_2();
        else 
            // Khởi tạo fire_2 double
            this.FIRE_2 = new FIRE_2_DOUBLE();

        // ========= TẠO ÂM THANH BẮN LÊN PHÙ HỢP ==========
        if(this.FIRE_2.NAME == 'double'){
            this.audio = new Audio('asset/audio/double-1-1.mp3');
            this.FIRE_2.updateColor(this.fireworkColor);
        }
        else{
            this.audio = new Audio('asset/audio/normal-1-1.mp3');
        }

        // ========= TẠO ÂM THANH PHÙ HỢP ==========

        // Khoi tao thuoc tinh cho fire_2
        this.FIRE_2.create();
    }
    create(){
        // Tao FireWorks và gán màu sắc
        this.fireWork = $('<div>',{class: 'firework', style: `background: ${this.fireworkColor}; transition: top ${TIME_FIRE}ms linear`});

        // append fire-1 vao FireWork
        this.fireWork.append(this.FIRE_1.fire);

        // append fire-2 vao FireWork
        this.fireWork.append(this.FIRE_2.fire_2);
        
        // tao left ngau nhien (0 - 95)
        let leftFirework = Math.floor(Math.random() * 96);

        // Thiet lap vi tri cho fireworks vua tao
        this.fireWork.css({top: `100%`,left: `${leftFirework}%`});

        // Append FireWork vao #all

        $('body').append(this.fireWork);
        
    }

    run(){
        // Tao va gan thuoc tinh cho fireWork
        this.create();
        
        // tao top ngau nhien (10 - 50)
        let topFirework = Math.floor(Math.random() * (51-10) + 10 );

        // Hieu ung ban len
        setTimeout(()=>{this.fireWork.css('top',`${topFirework}%`)},20);

        // ÂM THANH BẮN LÊN
        this.audio.play();

        // Thuc hien hieu ung fire 1
        setTimeout(()=>{
            this.FIRE_1.effect();
        },TIME_FIRE-50);

        // Thuc hien hieu ung fire 2
        setTimeout(()=>{
            this.FIRE_2.effect();
        },TIME_FIRE+400);

        // Goi Remove Firework de xoa phao hoa sau khi ban xong
        setTimeout(()=>{
            this.remove();
        },this.FIRE_2.REMOVE);

    }
    // Xoa FireWork sau khi ban xong
    remove(){
        this.fireWork.remove();
    }
    
}

// HÀM CHẠY BẮN PHÁO HOA
var fireworkNum = 0;
var fireworkArray = [];
var inter;

function RUNFIREWORKS(){
    inter = setInterval(()=>{
        let fireworkIndex = fireworkNum;
        fireworkArray[fireworkIndex] = new FIREWORKS();
        fireworkArray[fireworkIndex].run();
        console.log('Tong so phao hoa da ban');
        fireworkNum++;

        // Kiem tra neu so phan tu trong mang fireArray lon hon 20 thi chuyen index ve 0
        if(fireworkNum >= MAX_ARRAY_FIREWORK)
            fireworkNum = 0;

    },Math.floor(Math.random() * (16-10) + 10) * 100);
}