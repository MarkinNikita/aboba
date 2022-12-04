(function () {
    var app = "https://script.google.com/macros/s/AKfycbyf1fZSk45SAx23guPg6Yaj3I78TqI-NKO70NLqUNvVoZm9BFzKXsHyulAreJAaJXk6/exec",
   output = '',
   xhr = new XMLHttpRequest();
    xhr.open('GET', app);
    xhr.onreadystatechange = function() {
  if (xhr.readyState !== 4) return;

  if (xhr.status == 200) {
 try {
 var r = JSON.parse(xhr.responseText)
 } catch(e) {}
  } 

  document.querySelector(".center").innerHTML=`
  <table class="result" style="table">
  <thead class="thead_table"></thead>
  <tbody class="tbody_table"style="body"></tbody>
  </table>
  `   /*сюда потом впишешь стиль для таблицы как ссылку на файл */

  for(key in r){
      let row = document.createElement('tr')
      row.innerHTML=`
      <td>место</td>
      <td>проект</td>
      <td>Описание</td>
      <td>Команда</td>
      <td>Рейтинг</td>
      
      `
      document.querySelector('.thead_table').appendChild(row)
  }
  for(let i=0 ; i<r[key].length;i++)
  {
      let row =document.createElement('tr')
      row.innerHTML=`
      <td>${r[key][i][0]}</td>
      <td>${r[key][i][1]}</td>
      <td>${r[key][i][2]}</td>
      <td>${r[key][i][3]}</td>
      <td>${r[key][i][4]}</td>
      
      `
      document.querySelector('.tbody_table').appendChild(row)

  }

    }
    xhr.send()
    
 })()




   