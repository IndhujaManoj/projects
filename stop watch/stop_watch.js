const btnStart=document.querySelector('.start')
const btnStop=document.querySelector('.stop')
const btnReset=document.querySelector('.reset')
const clock=document.querySelector('.clock')

let hrs=min=sec=ms=0,startTime;//global

btnStart.addEventListener('click',()=>{
    btnStart.classList.add('start-active');
    btnStop.classList.remove('stop-active');
    clock.classList.add('start-animation');

    startTime=setInterval(()=>{
        ms++;
        if(ms==100){
            sec++;
            ms=0
        }
        if(sec==60){
            min++;
            sec=0
        }
        if(min==60){
            hrs++;
            min=0
        }
        
        updateDisplay()
    },10)

})
btnStop.addEventListener('click',()=>{
    btnStart.classList.remove('start-active');
    btnStop.classList.add('stop-active');
    clock.classList.remove('start-animation');
    clearInterval(startTime)

})
btnReset.addEventListener('click',()=>{
    hrs=min=sec=ms=0;
    btnStart.classList.remove('start-active');
    btnStop.classList.remove('stop-active');
    clock.classList.remove('start-animation');
    clearInterval(startTime)
    updateDisplay()

})
function updateDisplay(){
    //formated Display
    phrs=hrs<10?'0'+hrs:hrs;
   // console.log(phrs,"hu")
    pmin=min<10?'0'+min:min;
    //console.log(pmin,"m")

    psec=sec<10?'0'+sec:sec;
   // console.log(psec,"s")

    pms=ms<10?'0'+ms:ms;//25

    //convert into string

    phrs=phrs.toString();
    pmin=pmin.toString()
    psec=psec.toString()
    pms=pms.toString()//'25' pms[0]=2 pms[1]=5

    document.querySelectorAll('.hrs')[0].innerText=phrs[0];
    document.querySelectorAll('.hrs')[1].innerText=phrs[1];
    document.querySelectorAll('.min')[0].innerText=pmin[0];
    document.querySelectorAll('.min')[1].innerText=pmin[1];
    document.querySelectorAll('.sec')[0].innerText=psec[0];
    document.querySelectorAll('.sec')[1].innerText=psec[1];
    document.querySelectorAll('.ms')[0].innerText=pms[0];
    document.querySelectorAll('.ms')[1].innerText=pms[1];

}