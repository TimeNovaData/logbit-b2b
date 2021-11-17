export default function infinitoScroll(container, items) {
	document.addEventListener("DOMContentLoaded", () => {
		setTimeout(() => {
			const postsContainer = document.querySelector(container)
			const loaderContainer = postsContainer.parentElement.querySelector('.loader')
			const noticiasClones = Array.from(postsContainer.querySelectorAll(items))
			const footer = document.querySelector('.footer')
			const footerHeight = footer.getBoundingClientRect().height

			const timeDelay = 700
			let ativo = false

			console.log(postsContainer, noticiasClones)

			const removeLoader = () => {
				setTimeout(() => {
					loaderContainer.classList.remove('show')
					ativo = false
				}, timeDelay)
			}

			const showLoader = () => {
				ativo = true
				if (postsContainer.children.length < 16) {
					loaderContainer.classList.add('show')
					setTimeout(() => {
						addPostsIntoDom()
					}, timeDelay)
					removeLoader()
				} else {
					loaderContainer.parentElement.innerHTML =
						`<p>Não há mais notícias para serem exibidas...</p>`
				}

			}


			const addPostsIntoDom = () => {
				postsContainer.innerHTML +=
					noticiasClones
						.map(clone => clone.outerHTML)
						.join('')

			}

			const handleScrollToPageBottom = () => {
				const {
					clientHeight,
					scrollHeight,
					scrollTop
				} = document.documentElement

				const ispageBottom = scrollTop + clientHeight >= scrollHeight - 10 - footerHeight

				if (ispageBottom && !ativo) {
					showLoader()
				}

			}

			window.addEventListener('scroll', handleScrollToPageBottom)
		}, 1000);
	})
}