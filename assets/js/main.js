// Renders content.js into index.html and wires up the page's small interactions.
// Adding or changing content never requires editing this file.

;(() => {
  const { header = {}, about = {}, projects = [], skills = [], contact = {} } = window.portfolio || {}

  const $ = (selector, root = document) => root.querySelector(selector)
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches

  const ICONS = {
    github:
      '<svg class="icon icon--fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/></svg>',
    linkedin:
      '<svg class="icon icon--fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>',
    launch:
      '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  }

  const escapeHtml = (value) =>
    String(value ?? '').replace(
      /[&<>"']/g,
      (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]
    )

  const iconLink = (href, label, icon) =>
    `<a class="icon-btn" href="${escapeHtml(href)}" aria-label="${label}" target="_blank" rel="noopener noreferrer">${icon}</a>`

  // ---------- Content ----------

  function renderHeader() {
    const brand = $('#brand')
    brand.textContent = header.title || ''
    if (header.homepage) brand.href = header.homepage
  }

  function renderAbout() {
    const { name, role, description, resume, social = {} } = about

    $('#about').innerHTML = `
      ${name ? `<h1 class="hero__title">Hi, I&rsquo;m <span class="hero__name">${escapeHtml(name)}.</span></h1>` : ''}
      ${role ? `<p class="hero__role">A ${escapeHtml(role)}.</p>` : ''}
      ${description ? `<p class="hero__desc">${escapeHtml(description)}</p>` : ''}
      <div class="hero__actions">
        ${resume ? `<a class="btn btn--primary" href="${escapeHtml(resume)}" target="_blank" rel="noopener">Resume</a>` : ''}
        ${social.github ? iconLink(social.github, 'github', ICONS.github) : ''}
        ${social.linkedin ? iconLink(social.linkedin, 'linkedin', ICONS.linkedin) : ''}
      </div>`
  }

  function renderProjects() {
    $('#project-list').innerHTML = projects.map(renderProject).join('')
  }

  function renderProject({ name, description, stack = [], sourceCode, livePreview, media }) {
    const mediaHtml = renderMedia(media)

    return `
      <article class="project${mediaHtml ? ' project--has-media' : ''} reveal">
        ${mediaHtml}
        <div class="project__body">
          <div class="project__head">
            <h3 class="project__title">${escapeHtml(name)}</h3>
            <div class="project__links">
              ${sourceCode ? iconLink(sourceCode, 'source code', ICONS.github) : ''}
              ${livePreview ? iconLink(livePreview, 'live preview', ICONS.launch) : ''}
            </div>
          </div>
          ${description ? `<p class="project__desc">${escapeHtml(description)}</p>` : ''}
          ${stack.length ? `<ul class="tags">${stack.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : ''}
        </div>
      </article>`
  }

  // media accepts a path/URL string or { src, alt, caption, poster, autoplay, fit } (see content.js).
  function renderMedia(media) {
    if (!media) return ''

    const { src, alt = '', caption, poster, autoplay = false, fit } =
      typeof media === 'string' ? { src: media } : media
    if (!src) return ''

    const embedUrl = toEmbedUrl(src)
    const isVideo = /\.(mp4|webm|ogv|mov|m4v)$/i.test(src.split(/[?#]/)[0])
    let element

    if (embedUrl) {
      element = `<iframe src="${escapeHtml(embedUrl)}" title="${escapeHtml(alt)}" loading="lazy"
        allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`
    } else if (isVideo) {
      const playback = autoplay && !reduceMotion ? 'autoplay muted loop' : 'controls'
      element = `<video src="${escapeHtml(src)}" ${playback} playsinline preload="metadata"
        ${poster ? `poster="${escapeHtml(poster)}"` : ''} aria-label="${escapeHtml(alt)}"></video>`
    } else {
      element = `<button class="media__zoom" type="button" aria-label="Enlarge image">
        <img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" />
      </button>`
    }

    return `
      <figure class="project__media${fit === 'contain' ? ' project__media--contain' : ''}">
        <div class="media">${element}</div>
        ${caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ''}
      </figure>`
  }

  function toEmbedUrl(src) {
    const youtube = src.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/)
    if (youtube) return `https://www.youtube-nocookie.com/embed/${youtube[1]}`

    const vimeo = src.match(/vimeo\.com\/(?:video\/)?(\d+)/)
    if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`

    return null
  }

  function renderSkills() {
    $('#skill-list').innerHTML = skills.map((skill) => `<li class="chip">${escapeHtml(skill)}</li>`).join('')
  }

  function renderContact() {
    $('#contact-email').href = `mailto:${contact.email}`
  }

  // Sections with no content are removed along with their nav link.
  function removeSection(id) {
    $(`#${id}`)?.remove()
    $(`.nav__link[href="#${id}"]`)?.parentElement.remove()
  }

  // ---------- Interactions ----------

  function setupTheme() {
    const root = document.documentElement
    const savedTheme = () => {
      try {
        return localStorage.getItem('theme')
      } catch {
        return null
      }
    }

    $('#theme-toggle').addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark'
      root.dataset.theme = next
      try {
        localStorage.setItem('theme', next)
      } catch {
        // Storage unavailable (private mode): the choice lasts for this visit only.
      }
    })

    // Follow the OS setting until the visitor picks a theme themselves.
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      if (!savedTheme()) root.dataset.theme = event.matches ? 'dark' : 'light'
    })
  }

  function setupMenu() {
    const siteHeader = $('.site-header')
    const toggle = $('#menu-toggle')

    const setOpen = (open) => {
      siteHeader.classList.toggle('is-open', open)
      toggle.setAttribute('aria-expanded', String(open))
    }

    toggle.addEventListener('click', () => setOpen(!siteHeader.classList.contains('is-open')))
    $('#nav-list').addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false)
    })
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setOpen(false)
    })
  }

  function setupScrollState() {
    const siteHeader = $('.site-header')
    const scrollTop = $('#scroll-top')

    const update = () => {
      siteHeader.classList.toggle('is-scrolled', window.scrollY > 8)
      scrollTop.classList.toggle('is-visible', window.scrollY > 500)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
  }

  // Highlights the nav link of the section currently in view.
  function setupScrollSpy() {
    const links = [...document.querySelectorAll('.nav__link')]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          links.forEach((link) =>
            link.toggleAttribute('aria-current', link.hash === `#${entry.target.id}`)
          )
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )

    document.querySelectorAll('main > section').forEach((section) => observer.observe(section))
  }

  // Fades content in as it scrolls into view.
  function setupReveal() {
    const items = document.querySelectorAll('.reveal')
    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px' }
    )

    items.forEach((item) => observer.observe(item))
  }

  function setupLightbox() {
    const dialog = $('#lightbox')
    const image = $('img', dialog)

    document.addEventListener('click', (event) => {
      const trigger = event.target.closest('.media__zoom')
      if (!trigger) return
      const source = $('img', trigger)
      image.src = source.currentSrc || source.src
      image.alt = source.alt
      dialog.showModal()
    })

    // Any click inside the open lightbox (image, backdrop or close button) dismisses it.
    dialog.addEventListener('click', () => dialog.close())
  }

  // ---------- Init ----------

  renderHeader()

  const sections = [
    ['about', about.name || about.description, renderAbout],
    ['projects', projects.length, renderProjects],
    ['skills', skills.length, renderSkills],
    ['contact', contact.email, renderContact],
  ]
  sections.forEach(([id, hasContent, render]) => (hasContent ? render() : removeSection(id)))

  setupTheme()
  setupMenu()
  setupScrollState()
  setupScrollSpy()
  setupReveal()
  setupLightbox()
})()
