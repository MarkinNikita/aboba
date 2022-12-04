const test={

    'ебаба':[
        ['ебал','рот'],
        ['да','бля']
    ]
}



    document.querySelector(".content").innerHTML=`<table class="ebab"></table>`

    for(key in test){
        let row = document.createElement('tr')
        row.innerHTML=`<td colspan="3">${key}</td>`
        document.querySelector('.ebab').appendChild(row)
    }
    for(let i=0 ; i<test[key].length;i++){
        let row =document.createElement('tr')
        row.innerHTML=`
        <td>${test[key][i][0]}</td>
        <td>${test[key][i][1]}</td>
        
        `
        document.querySelector('.ebab').appendChild(row)

    }