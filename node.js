   let heartCount = 0;
    let coinCount = 100;
    let copyCount = 0;

    function increaseHeart() {
      heartCount++;
      document.getElementById("heartCount").innerText = heartCount;
    }

     function copyNumber(num) {
      navigator.clipboard.writeText(num);
      alert("Copied: " + num);
      copyCount++;
      document.getElementById("copyCount").innerText = copyCount;
    }

    function makeCall(name, num) {
      if (coinCount < 20) {
        alert("Not enough coins to make a call!");
        return;
      }
      alert("Calling " + name + " at " + num);
      coinCount -= 20;
      document.getElementById("coinCount").innerText = coinCount;

      let now = new Date().toLocaleTimeString();
      let li = document.createElement("li");
      li.textContent = `${name} (${num}) - ${now}`;
      document.getElementById("historyList").appendChild(li);
    }
