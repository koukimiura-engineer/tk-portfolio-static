const projects = [
  {
    title: '野球選手向けトレーニング器具',
    category: 'Sports Platform',
    stack: ['Vue.js', 'SCSS', 'JavaScript'],
    url: 'https://kineticball.nextbase.co.jp/',
    image: 'https://kineticball.nextbase.co.jp/ogp.png'
  },
  {
    title: 'ジュニア向け野球トレーニングアプリ',
    category: 'Sports Platform',
    stack: ['Vue.js', 'SCSS', 'JavaScript'],
    url: 'https://spo-plus.com/lp/academy/',
    image: 'https://spo-plus.com/lp/academy/assets/ogp.png'
  },
  {
    title: 'ペット向け保険・付帯サービス',
    category: 'Pet Service',
    stack: ['React', 'SCSS', 'TypeScript'],
    url: 'https://pet.life-kurashi.au.com/',
    image: 'https://pet.life-kurashi.au.com/og_image.png'
  },
]

document.querySelector('#project-grid').innerHTML = projects.map((p, i) => `
  <article class="project-card">
    <div class="project-visual"><span class="project-index">0${i + 1}</span><img class="project-thumb" src="${p.image}" alt="${p.title}" loading="lazy" width="1200" height="630"></div>
    <div class="project-body"><p class="project-category">${p.category}</p><h3>${p.title}</h3><div class="tag-list">${p.stack.map(s => `<span>${s}</span>`).join('')}</div><a class="project-link" href="${p.url}" target="_blank" rel="noopener noreferrer">View Site ↗</a></div>
  </article>`).join('')

document.querySelector('#year').textContent = new Date().getFullYear()
const btn = document.querySelector('.menu-button')
const menu = document.querySelector('.mobile-nav')
btn.addEventListener('click', () => { const open = menu.hasAttribute('hidden'); menu.toggleAttribute('hidden'); btn.setAttribute('aria-expanded', String(open)); btn.textContent = open ? '×' : '☰' })
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.setAttribute('hidden', ''); btn.setAttribute('aria-expanded', 'false'); btn.textContent = '☰' }))
