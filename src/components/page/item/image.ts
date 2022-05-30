import { BaseComponent } from '../../component.js'

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="image wrap">
            <div class="first">
              <img class="image-thumbnail" />
            </div>
            <h2 class="image-title second"></h2>
          </section>`)

    const imageElement = this.element.querySelector(
      '.image-thumbnail'
    )! as HTMLImageElement
    imageElement.src = url
    imageElement.alt = title

    const titleElement = this.element.querySelector(
      '.image-title'
    )! as HTMLHeadingElement
    titleElement.textContent = title
  }
}
