// collapseFunction
let collapses = document.getElementsByClassName("collapse");
for (let i = 0; i < collapses.length; i++) {
	collapses[i].addEventListener("click", function () {
		let collapse = this;

		collapse.classList.toggle("active");

		let content = collapse.nextElementSibling;

		let expandIcon = collapse.querySelector(
				".Collapse--preflop__icon-expand"
			),
			contractIcon = collapse.querySelector(
				".Collapse--preflop__icon-contract"
			);
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
			expandIcon.classList.toggle("active");
			contractIcon.classList.toggle("active");
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
			expandIcon.classList.toggle("active");
			contractIcon.classList.toggle("active");
		}
	});
}

// AdvanceUIMenu

let AdvanceUIToggle = document.querySelector("#AdvanceUI--toggle"),
	AdvanceUIExpandToggle = document.querySelector("#AdvanceUI--expand"),
	AdvanceUIContractToggle = document.querySelector("#AdvanceUI--contract"),
	AdvanceUIConfig = document.querySelector("#AdvanceUI--config");

AdvanceUIToggle.addEventListener("click", () => {
	if (AdvanceUIConfig.style.maxHeight) {
		AdvanceUIConfig.style.maxHeight = null;

		AdvanceUIExpandToggle.classList.toggle("active");
		AdvanceUIContractToggle.classList.toggle("active");

		AdvanceUIConfig.classList.toggle("desactive");
	} else {
		AdvanceUIExpandToggle.classList.toggle("active");
		AdvanceUIContractToggle.classList.toggle("active");

		AdvanceUIConfig.classList.toggle("desactive");

		AdvanceUIConfig.style.maxHeight = AdvanceUIConfig.scrollHeight + "px";
	}
});

// DropdownsMenu

let dropdowns = document.getElementsByClassName("HeaderMobile--container-icon");
for (let i = 0; i < dropdowns.length; i++) {
	let dropdown = dropdowns[i],
		content = dropdown.nextElementSibling;
	dropdowns[i].addEventListener("click", (e) => {
		e.stopPropagation();
		content.addEventListener("click", (e) => {
			e.stopPropagation();
		});
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
	document.addEventListener("click", () => {
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		}
	});
}
// toggleHandHistoryFunction

let toggleHandHistory = document.querySelectorAll(".toggleHandHistory"),
	HandHistory = document.getElementById("HandHistory");
for (let i = 0; i < toggleHandHistory.length; i++) {
	toggleHandHistory[i].addEventListener("click", () => {
		HandHistory.classList.toggle("show");
	});
}

// AdvanceUIMobileFunction

let AdvanceUIMobile = document.getElementById("AdvanceUI-mobile"),
	closeIconAdvanceUIMobile = document.getElementById(
		"closeIconAdvanceUIMobile"
	),
	handleAdvanceUIMobile = document.getElementById("handleAdvanceUIMobile");

if (AdvanceUIMobile.classList.contains("hidden")) {
	AdvanceUIMobile.style.display = "none";
}

handleAdvanceUIMobile.addEventListener("click", () => {
	AdvanceUIMobile.style.display = "flex";
	setTimeout(() => {
		AdvanceUIMobile.classList.remove("hidden");
	}, 1);
});

closeIconAdvanceUIMobile.addEventListener("click", () => {
	AdvanceUIMobile.classList.add("hidden");
	setTimeout(() => {
		AdvanceUIMobile.style.display = "none";
	}, 300);
});

// statisticsModal

let StatisticsModal = document.getElementById("StatisticsModal"),
	closeIconStatisticsModal = document.getElementById(
		"closeIconStatisticsModal"
	),
	handleStatisticsModal = document.querySelectorAll(".handleStatisticsModal");

if (StatisticsModal.classList.contains("hidden")) {
	StatisticsModal.style.display = "none";
}
handleStatisticsModal.forEach((handleStatistics) => {
	handleStatistics.addEventListener("click", () => {
		StatisticsModal.style.display = "flex";
		setTimeout(() => {
			StatisticsModal.classList.remove("hidden");
		}, 1);
	});
});

closeIconStatisticsModal.addEventListener("click", () => {
	StatisticsModal.classList.add("hidden");
	setTimeout(() => {
		StatisticsModal.style.display = "none";
	}, 300);
});

// cardsSizePrincipals

let cardsPlayerActive = document.getElementsByClassName("cardsPlayerActive"),
	fiveCardsDocument = document.getElementById("five-cards"),
	fourCardsDocument = document.getElementById("four-cards");

const changeCardsSize = () => {
	let widthCardPlayer =
		document.getElementsByClassName("Player--cards")[1].children[0]
			.offsetWidth;
	setTimeout(() => {
		Array.from(cardsPlayerActive).forEach((card) => {
			card.style.width = `${widthCardPlayer * 1.2}px`;
		});
	}, 100);
};
changeCardsSize();
window.onresize = changeCardsSize;

// Title Desktop Score

let titleDesktopScore = document.querySelector("#titleDesktopScore");
setTimeout(() => {
	let lengthTitleDesktopScore = titleDesktopScore.innerText.length;
	if (lengthTitleDesktopScore > 20) {
		titleDesktopScore.style.fontSize = "13px";
	}
}, 1);

// Size Elements HeaderMobile

let tableContainerScore = document.querySelector(".TableContainer--score"),
	tableContainerStreak = document.querySelector(".TableContainer--streak");
setTimeout(() => {
	tableContainerStreak.style.width = tableContainerScore.offsetWidth + "px";
	window.onresize = () =>
		(tableContainerStreak.style.width =
			tableContainerScore.offsetWidth + "px");
}, 1);

// toggle Lock

let playersLockIcon = document.querySelectorAll(".Player--lock__icon");

setTimeout(() => {
	// Initializing the variable for can do the change when we give click to another lock
	let playersLockOld;
	// Doing a forEach
	Array.from(playersLockIcon).forEach((playerLockIcon) => {
		// Calling to the event
		playerLockIcon.addEventListener("click", (e) => {
			// Declaration the variables
			let playerLockIconActive = e.target,
				// Reading the attribute "src" of the element
				playerLockIconActiveSrc =
					playerLockIconActive.getAttribute("src");
			// Doing the validation of the lock for change his "src" for the Open or Close
			if (playerLockIconActiveSrc === "/img/lockOpen.svg") {
				// Reading the old Player lock for to do the change and Open his lock
				if (playersLockOld) {
					playersLockOld.setAttribute("src", "/img/lockOpen.svg");
				}
				playerLockIconActive.setAttribute("src", "/img/lockClose.svg");
			} else {
				playerLockIconActive.setAttribute("src", "/img/lockOpen.svg");
			}
			// Declaration this lock like the old for to can change when we want click another lock
			playersLockOld = playerLockIconActive;
		});
	});
}, 1);
