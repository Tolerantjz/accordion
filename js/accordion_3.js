window.onload = function() {
	const outThings = document.getElementsByClassName("far");
	const tits = document.getElementsByClassName("switch");
	const contents = document.getElementsByClassName("baseContent");
	const texts = new Array();
	let choose = true;
	let num = 0;
	for(let i = 0; i < outThings.length; i++) {
		texts[i] = outThings[i].clientHeight;
		contents[i].style.height = 0 + "px";
	}
	for(let i = 0; i < tits.length; i++) {
		tits[i].index = i;
		tits[i].addEventListener("click", function(e) {
			const tits = document.getElementsByClassName("switch");
			const contents = document.getElementsByClassName("baseContent");
			const triangles = document.getElementsByClassName("triangle");
			const outThings = document.getElementsByClassName("far");
			e.stopPropagation();
			for(let i = 0; i < contents.length; i++) {
				contents[i].classList.add("hide");
			}
			for(let i = 0; i < triangles.length; i++) {
				triangles[i].classList.remove("down");
			}
			if(choose) {
				contents[this.index].classList.remove("hide");
				triangles[this.index].classList.add("down");
				num = this.index;
				choose = false;
				contents[this.index].style.height = texts[this.index] + "px";
				contents[this.index].innerText = outThings[this.index].innerText;
			} else {
				if(num == this.index) {
					contents[this.index].classList.add("hide");
					triangles[this.index].classList.remove("down");
					choose = true;
					contents[this.index].innerText = outThings[this.index].innerText;
					contents[this.index].style.height = 0 + 'px';
				} else {
					for(let i = 0; i < contents.length; i++) {
						contents[i].classList.add("hide");
						contents[i].style.height = 0 + "px";
					}
					for(let i = 0; i < triangles.length; i++) {
						triangles[i].classList.remove("down");
					}
					contents[this.index].classList.remove("hide");
					triangles[this.index].classList.add("down");
					num = this.index;
					choose = false;
					contents[this.index].innerText = outThings[this.index].innerText;
					contents[this.index].style.height = texts[this.index] + 'px';
				}
			}
		})
	}
}