function videoSearch() {
	let metaTag = document.getElementsByTagName("meta");
	let titleTag = document.getElementsByTagName("title")[0].innerText;

	if (titleTag.includes("videos")) {
		redirect();
	}

	for (let i = 0; i < metaTag.length; i++) {
		// Looking in more than one meta tags
		if (metaTag[i].getAttribute("content").includes("videos") === true) {
			redirect();
		}
	}
}
videoSearch();

function redirect() {
	var url = "https://www.google.com/";
	window.location = url;
}
