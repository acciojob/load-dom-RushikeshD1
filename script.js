//your JS code here. If required.
const body = document.getElementsByTagName("body")[0]

window.addEventListener('load', () => {
	const h1 = document.createElement("h1")

	h1.innerText = "DOM load success"

	body.append(h1)
})