let balanceBtn = document.querySelector(".balance-btn");
let mainWrapper = document.querySelector(".main");
let balancePage = document.querySelector(".balance-page");
let backBtn = document.querySelector(".back-btn");
let loader = document.querySelector(".loader");
let nextBalancePage = document.querySelector(".next-balance-page");
let backBackBtn = document.querySelector(".back-back-btn");
let mainBalanceBtn = document.querySelector(".balance-container");
let liveRevardBtn = document.querySelector(".bc-bc-wrap");
let liveRewardsWrapper = document.querySelector(".live-rewards-wrapper");
let liveRewardsBackBtn = document.querySelector(".bck-bck-btn");
let transferBtn = document.querySelector(".transfer-btn");
let transferBtnSpan = document.querySelector(".btn-btn-trns-txt");
let transferBtnLoader = document.querySelector(".loadermini");
let finishBtnBack = document.querySelector(".finish-back-btn");
let transferFinishWrapper = document.querySelector(".transfer-finish-wrapper");
let homePageBtn = document.querySelector(".homepagebtn");
let successWrapper = document.querySelector(".succesful-wrapper");
let userNameInput = document.querySelector(".username");
let usdInput = document.querySelector(".usdinput");
let transferBtnFinish = document.querySelector(".transfer-btn-finish");
let transferAmount = document.querySelector(".amount");
let paymantUser = document.querySelector(".paymant-to-user");
let mainBalance = document.querySelector(".balance-txt");
let secondBalance = document.querySelector(".balance-amount");
let firstBalance = document.querySelector(".balance-balance-balance-wrapper");
let primaryBalance = document.querySelector(".bc-bc-bt");
let liveRewardsBalance = document.querySelector(".usdtxt-wrapper");
let balance = 58944220;
let rawValue = "";
const todayElem = document.querySelector(".data");
const nextElem = document.querySelector(".second-data");

function pad(n) {
  return n.toString().padStart(2, "0");
}

mainBalance.textContent = formatBalance(balance) + " US$";
function formatBalance(num) {
  return num.toLocaleString("en-US"); // დაამატებს მძიმეებს
}

transferBtnFinish.addEventListener("click", () => {
  if (userNameInput.value === "" || usdInput.value === "") {
    return;
  } else {
    const now = new Date();
    const todayStr = formatDateTime(now);

    // ერთი დღით მეტი
    const nextDay = new Date(now);
    nextDay.setDate(now.getDate() + 1);
    const nextStr = formatDateTime(nextDay);

    // ჩანაწერი <p> ელემენტებში

    function formatDateTime(date) {
      const year = date.getFullYear();
      const month = pad(date.getMonth() + 1);
      const day = pad(date.getDate());
      const hours = pad(date.getHours());
      const minutes = pad(date.getMinutes());
      const seconds = pad(date.getSeconds());

      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }

    transferFinishWrapper.classList.add("leftanimation");
    rawValue = usdInput.value.replace(/[^0-9]/g, "");
    const formatted = Number(rawValue).toLocaleString("en-US");
    paymantUser.innerHTML = userNameInput.value;
    transferAmount.innerHTML = formatted;
    todayElem.textContent = todayStr;
    nextElem.textContent = nextStr;
    setTimeout(() => {
      transferFinishWrapper.classList.add("hidden");
      transferFinishWrapper.classList.remove("leftanimation");
      transferFinishWrapper.classList.remove("rightanimation");
      loader.classList.remove("hidden");
    }, 300);
    setTimeout(() => {
      successWrapper.classList.remove("hidden");
      loader.classList.add("hidden");
    }, 1600);

    const value = parseInt(usdInput.value);

    if (!isNaN(value) && value > 0) {
      const newBalance = balance - value;

      if (newBalance >= 0) {
        balance = newBalance; // განახლებული ბალანსი
        mainBalance.textContent = formatBalance(balance) + " US$";
        secondBalance.textContent = formatBalance(balance);
        firstBalance.innerHTML = ` <p class="blnc-blnc-blnc">
            <span class="usdtxt">USD</span>${formatBalance(balance)}
          </p>`;
        primaryBalance.textContent = "USD" + formatBalance(balance);
        liveRewardsBalance.innerHTML = `<p class="liverevardsusdtxt">
          <span class="usdtxt">USD</span>${formatBalance(balance)}
        </p>`;
        usdInput.placeholder = "Available today: " + formatBalance(balance);
        usdInput.value = ""; // გავასუფთავოთ ინპუტი
        userNameInput.value = "";
      } else {
        console.log("error");
      }
    } else {
      console.log("error");
    }

    console.log(userNameInput.value, usdInput.value);
  }
});

homePageBtn.addEventListener("click", () => {
  successWrapper.classList.add("rightanimation");
  // successWrapper.classList.add("hidden");
  setTimeout(() => {
    mainWrapper.classList.remove("hidden");
    successWrapper.classList.add("hidden");
    successWrapper.classList.remove("rightanimation");
  }, 300);
});

finishBtnBack.addEventListener("click", () => {
  transferFinishWrapper.classList.add("rightanimation");
  setTimeout(() => {
    transferFinishWrapper.classList.add("hidden");
    liveRewardsWrapper.classList.remove("hidden");
    transferFinishWrapper.classList.remove("rightanimation");
  }, 300);
});

transferBtn.addEventListener("click", () => {
  transferBtnSpan.classList.add("hidden");
  transferBtnLoader.classList.remove("hidden");
  setTimeout(() => {
    liveRewardsWrapper.classList.add("leftanimation");
  }, 2000);
  setTimeout(() => {
    transferFinishWrapper.classList.remove("hidden");
    liveRewardsWrapper.classList.add("hidden");
    transferBtnSpan.classList.remove("hidden");
    transferBtnLoader.classList.add("hidden");
    liveRewardsWrapper.classList.remove("leftanimation");
  }, 2300);
});

liveRewardsBackBtn.addEventListener("click", () => {
  liveRewardsWrapper.classList.add("rightanimation");
  setTimeout(() => {
    liveRewardsWrapper.classList.add("hidden");
    nextBalancePage.classList.remove("hidden");
    liveRewardsWrapper.classList.remove("rightanimation");
  }, 300);
});

liveRevardBtn.addEventListener("click", () => {
  nextBalancePage.classList.add("leftanimation");
  loader.classList.remove("hidden");
  setTimeout(() => {
    nextBalancePage.classList.add("hidden");
    nextBalancePage.classList.remove("leftanimation");
  }, 300);
  setTimeout(() => {
    liveRewardsWrapper.classList.remove("hidden");
    loader.classList.add("hidden");
  }, 2500);
});

mainBalanceBtn.addEventListener("click", () => {
  balancePage.classList.add("leftanimation");
  loader.classList.remove("hidden");
  setTimeout(() => {
    balancePage.classList.add("hidden");
    balancePage.classList.remove("leftanimation");
  }, 300);
  setTimeout(() => {
    nextBalancePage.classList.remove("hidden");
    loader.classList.add("hidden");
  }, 1700);
});
backBackBtn.addEventListener("click", () => {
  nextBalancePage.classList.add("rightanimation");
  setTimeout(() => {
    nextBalancePage.classList.add("hidden");
    balancePage.classList.remove("hidden");
    nextBalancePage.classList.remove("rightanimation");
  }, 300);
});

backBtn.addEventListener("click", () => {
  balancePage.classList.add("rightanimation");
  setTimeout(() => {
    balancePage.classList.add("hidden");
    mainWrapper.classList.remove("hidden");
    balancePage.classList.remove("rightanimation");
  }, 300);
});

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const bottomMenu = document.querySelector(".bottom-menu-wrapper");
  const overlay = document.querySelector(".bottombg");

  balanceBtn.addEventListener("click", () => {
    mainWrapper.classList.add("leftanimation");
    bottomMenu.style.display = "none";
    overlay.style.display = "none";
    loader.classList.remove("hidden");
    setTimeout(() => {
      mainWrapper.classList.add("hidden");
      mainWrapper.classList.remove("leftanimation");
    }, 300);
    setTimeout(() => {
      balancePage.classList.remove("hidden");
      loader.classList.add("hidden");
    }, 1700);
  });

  bottomMenu.style.display = "none";
  overlay.style.display = "none";
  menuButton.addEventListener("click", () => {
    bottomMenu.style.display = "block";
    overlay.style.display = "block";
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    bottomMenu.classList.add("bottom-menu-wrapper-anim");
    setTimeout(() => {
      bottomMenu.style.display = "none";
      bottomMenu.classList.remove("bottom-menu-wrapper-anim");
    }, 300);
  });

  bottomMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});
