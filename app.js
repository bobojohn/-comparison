var rootEl = document.getElementById('root');
var aInputEl = rootEl.querySelector('#a_input');
var bInputEl = rootEl.querySelector('#b_input');
var btnAddA = rootEl.querySelector('#add_a');
var btnAddB = rootEl.querySelector('#add_b');
var bigZeroEl = rootEl.querySelector('#bigZero')
var smalTeenEl = rootEl.querySelector('#smalTeen');
var ravnoEl = rootEl.querySelector('#ravno')
var ulAEl = rootEl.querySelector('#ul_a');
var ulBEl = rootEl.querySelector('#ul_b');
var cEl = rootEl.querySelector('.c');
var arr_a= [];
var arr_b= [];
btnAddA.onclick = evt => {
    var value = aInputEl.value;
    aInputEl.focus()
    if(value ==''){return}
    var addEl = document.createElement('li');
    addEl.innerHTML = value
    ulAEl.appendChild(addEl)
    arr_a.push(value)
};
btnAddB.onclick = evt => {
    bInputEl.focus()
    var value = bInputEl.value;
    if(value ==''){return}  
    var addEl = document.createElement('li');
    addEl.innerHTML = value
    ulBEl.appendChild(addEl)
    arr_b.push(value)
}
    smalTeenEl.addEventListener('click', ()=> {
    var mass= arr_a.concat(arr_b).filter(o => o > 1 && o < 10);
    cEl.innerHTML=`<h1>Число >1<10</h1> ${[...new Set(mass)].join("<br/> ") } `
}) 
    bigZeroEl.addEventListener('click',  () =>{
    var mass= arr_a.concat(arr_b).filter(o => o>0);
    cEl.innerHTML=` <h1>Число >0</h1> ${[...new Set(mass)].join("<br/> ")}`
})
    ravnoEl.addEventListener('click', () => {
 var arrAll = [];
        ( ()=> {
            for (var i=0; i<arr_a.length;i++){ arrAll.push(arr_b.find(o => o ==arr_a[i]))};
            return arrAll;
   })()
         cEl.innerHTML=` <h1>Число == Число</h1>   ${[...new Set(arrAll)].join("<br/> ")}`
    })