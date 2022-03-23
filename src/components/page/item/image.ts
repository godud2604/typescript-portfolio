export class ImageComponent {
  // 내부적으로 어떤 요소를 만들고, attchto
  private element: HTMLElement
  constructor(title: string, url: string) {
    const template = document.createElement('template')
    template.innerHTML = `
      <section class="image">
        <div class="image-holder">
          <div>
            <img class="image-thumbnail" />
          </div>
          <p class="image-title"></p>
        </div>
      </section>`

    this.element = template.content.firstElementChild! as HTMLElement
    const imageElement = this.element.querySelector(
      '.image-thumbnail'
    )! as HTMLImageElement
    imageElement.src = url
    imageElement.alt = title

    const titleElement = this.element.querySelector(
      '.image-title'
    )! as HTMLParagraphElement
    titleElement.textContent = title
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element)
  }
}
