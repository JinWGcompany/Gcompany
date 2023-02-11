function setBack() {
    var value = document.forms.output.value;
    document.forms.output.value = value.substr(0, value.length - 1);
}

function goSite() {
    var page = document.forms.output.value;
    var G = 'https://jinwgcompany.github.io/Gcompany/'
    if(page=='111'){
        //console.log(111)
        G = G + page
        window.location.href="G";
        document.forms.output.value =''
    }
    if(page=='5'){
        //console.log(5)
        G = G + 'Glive'
        window.location.href="G";
        document.forms.output.value =''
    }
    else {
        //console.log('anot')
        document.forms.output.value =''
        window.location.href="https://jinwgcompany.github.io/Gcompany/";
    }
}