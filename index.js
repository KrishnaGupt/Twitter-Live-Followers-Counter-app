const input = document.getElementById("username");
const result = document.querySelector(".result");
const number = document.querySelector('#followers');
const pic = document.querySelector('#pfp');
const username = document.querySelector('#name');
const btn = document.getElementById("btn");
const twtHandle = document.querySelector('#handle');
btn.addEventListener("click", valueTransfer);
// console.log(box);
function valueTransfer() {
    let box = document.querySelector(".box");
    box.style.display = 'none';
    const inputVal = input.value;
    const data = JSON.stringify([inputVal]);

  const xhr = new XMLHttpRequest();
  // xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      let json = JSON.parse(this.responseText);
      let followers_count = json.data[0].followers_count;
      let profile_image = json.data[0].profile_image_url;
      let name = json.data[0].name;
    //   console.log(json);
    number.innerHTML = followers_count;
    pic.src = profile_image;
    username.innerHTML = name;
    twtHandle.innerHTML = inputVal;
    let board = result;
    let count = number.innerText.length;
    console.log(count);
    if (count > 4 && count <= 6) {
        number.style.fontSize = '14em';
        number.style.margin = '130px 20px';
        result.style.height = '400px;'
    }
    else if( count > 6){
        number.style.fontSize = '10em';
        number.style.margin = '130px 20px';
        result.style.height = '330px';
        console.log(result);
    }
    setTimeout(() => {
        result.style.display = 'block';
    }, 3000);
    }
  });

  xhr.open(
    "POST",
    "https://twitter-user-profile-data.p.rapidapi.com/v1/api/twitter"
  );
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader(
    "x-rapidapi-host",
    "twitter-user-profile-data.p.rapidapi.com"
  );
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "08c437c219mshf0a82642cb67f8dp1e874bjsn467aaa79bd8c"
  );

  xhr.send(data);
}
