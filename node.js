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

     function makeCall(serviceName, number) {
    const history = document.getElementById("callHistory");
    const entry = document.createElement("div");
    entry.className = "p-2 bg-gray-100 rounded-xl";

    const now = new Date();
    const time = now.toLocaleTimeString();

    entry.innerHTML = `
      <div class="flex justify-between items-center">
        <div>
          <div class="font-bold">${serviceName}</div>
          <div class="font-500 text-gray-600">${number}</div>
        </div>
        <div class="text-sm text-gray-500">${time}</div>
      </div>
    `;

    history.appendChild(entry);
  }

  function clearHistory() {
    document.getElementById("callHistory").innerHTML = "";
  }