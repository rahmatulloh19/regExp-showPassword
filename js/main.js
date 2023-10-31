const elForm = document.querySelector(".hero__form");
const elInput = elForm.querySelector(".hero__password");
const elStatus = elForm.querySelector(".status");

elInput.addEventListener("keyup", () => {
	const elInputValue = elInput.value.trim();

	const checkNumber = /\d/gi;
	const checkSymbol = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/gi;
	const checkWord = /\w/gi;
	if (
		checkNumber.test(elInputValue) &&
		elInputValue.match(checkNumber).length >= 5 &&
		checkSymbol.test(elInputValue) &&
		elInputValue.match(checkSymbol).length >= 2 &&
		checkWord.test(elInputValue) &&
		elInputValue.match(checkWord).length >= 7
	) {
		elStatus.classList = "status";
		elStatus.classList.add("status__excellent");
		elForm.children[2].removeAttribute("disabled");
	} else if (
		((checkSymbol.test(elInputValue) && elInputValue.match(checkSymbol).length >= 2) ||
			(checkNumber.test(elInputValue) && elInputValue.match(checkNumber).length >= 5)) &&
		checkWord.test(elInputValue) &&
		elInputValue.match(checkWord).length >= 7
	) {
		elStatus.classList = "status";
		elStatus.classList.add("status__better");
		elForm.children[2].removeAttribute("disabled");
	} else if (checkWord.test(elInputValue) && elInputValue.match(checkWord).length >= 7) {
		elStatus.classList = "status";
		elStatus.classList.add("status__badly");
		elForm.children[2].removeAttribute("disabled");
	} else {
		elStatus.classList = "status";
		elForm.children[2].setAttribute("disabled", "");
	}
});

elForm.addEventListener("submit", (evt) => {
	evt.preventDefault();
	if (elStatus.classList.contains("status__excellent")) {
		console.log("Form submitted");
	} else {
		console.log("Please correct fill the input");
	}
});

const elEyeBtn = document.querySelector(".hero__eye-btn");

elEyeBtn.addEventListener("click", function () {
	this.previousElementSibling.type == "text";

	if (this.previousElementSibling.type == "password") {
		this.previousElementSibling.type = "text";
	} else {
		this.previousElementSibling.type = "password";
	}
	// console.log(this.previousElementSibling.type == "password");
});
