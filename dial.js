function setBack() {
    var value = document.forms.output.value;
    document.forms.output.value = value.substr(0, value.length - 1);
}

function goSite() {
    var page = document.forms.output.value;
    var number = ['001','002','003','004','005','006','007','008','009','010','011','012','333','444','666','888'];
    var i = 0;
    var G = 'https://jinwgcompany.github.io/Gcompany/'
    while(i<number.length){
        if(page=='number[i]'){
            //console.log(111)
            G = G + page +'.html'
            window.location.href=G;
        }
        else {
            //console.log('anot')
            document.forms.output.value =''
            window.location.href="https://jinwgcompany.github.io/Gcompany/";
        }
        i = i+1;
 }
}

// if(page=='111'){
//     //console.log(111)
//     G = G + page
//     window.location.href="G";
//     document.forms.output.value =''
// }
// if(page=='5'){
//     //console.log(5)
//     G = G + 'Glive'
//     window.location.href=G;
//     document.forms.output.value =''
