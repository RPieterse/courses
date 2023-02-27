import { Component } from "./base";
import { validate } from "../utils/validator";
import { Autobind } from "../decorators/autobind";
import { projectState } from "../state/project-state";

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;
    this.configure();
  }

  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  renderContent() {
    return;
  }

  private gatherUserInput(): [string, string, number] | void {
    const title: string = this.titleInputElement.value;
    const description: string = this.descriptionInputElement.value;
    const people: number = +this.peopleInputElement.value;
    if (
      validate({ value: title, isRequired: true }) &&
      validate({ value: description, isRequired: true }) &&
      validate({ value: people, isRequired: true, min: 2 })
    ) {
      return [title, description, people];
    }
    alert("Invalid Input");
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      projectState.addProject(title, description, people);
      this.clearInputs();
    }
  }
}
