import { BaseComponent } from '../../component.js'

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video-player"><iframe class="video-iframe"></iframe></div>
            <h3 class="video-title"></h3>
          </section>`)

    const iframe = this.element.querySelector(
      '.video-iframe'
    )! as HTMLIFrameElement
    console.log(url)
    iframe.src = 'https://www.youtube.com/embed/flSTjmpZr6w' // url -> videoId -> embed

    const titleElement = this.element.querySelector(
      '.video-title'
    )! as HTMLHeadingElement
    titleElement.textContent = title
  }
}

// input
// https://www.youtube.com/watch?v=flSTjmpZr6w&t=391s
// https://www.youtube.com/flSTjmpZr6w
// output
// https://www.youtube.com/embed/flSTjmpZr6w

// <iframe width="944" height="540" src="https://www.youtube.com/embed/flSTjmpZr6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
