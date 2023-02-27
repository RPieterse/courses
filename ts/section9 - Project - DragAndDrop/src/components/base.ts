export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  template: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    private templateId: string,
    private hostElementId: string,
    private insertAtStart: boolean,
    private newElementId?: string
  ) {
    this.template = document.getElementById(
      this.templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(this.hostElementId)! as T;
    const importedNode = document.importNode(this.template.content, true);
    this.element = importedNode.firstElementChild as U;
    if (this.newElementId) {
      this.element.id = this.newElementId;
    }
    this.attach(this.insertAtStart);
  }

  private attach(insertAtStart: boolean) {
    if (insertAtStart) {
      this.hostElement.insertAdjacentElement("afterbegin", this.element);
    } else {
      this.hostElement.insertAdjacentElement("beforeend", this.element);
    }
  }

  abstract configure(): void;
  abstract renderContent(): void;
}
