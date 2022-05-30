import { BaseComponent, Component } from '../component.js'
import { Composable } from '../page/page.js'

type OnCloseListener = () => void
type OnSubmitListener = () => void

export interface MediaData {
  readonly title: string
  readonly url: string
}

export interface TextData {
  readonly title: string
  readonly body: string
}

export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable
{
  private closeListener?: OnCloseListener
  private submitListener?: OnSubmitListener
  constructor() {
    super(`<section class="dialog">
            <div class="dialog-container">
              <div class="close-btn-wrap">
                <button class="close">&times;</button>
              </div>
              <div id="dialog-body"></div>
              <button class="dialog-submit">ADD</button>
            </div>
          </section>`)
    const closeBtn = this.element.querySelector('.close')! as HTMLElement
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener()
    }
    const submitBtn = this.element.querySelector(
      '.dialog-submit'
    )! as HTMLElement
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener()
    }
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener
  }

  setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener
  }

  addChild(child: Component) {
    const body = this.element.querySelector('#dialog-body')! as HTMLElement
    child.attachTo(body)
  }
}
