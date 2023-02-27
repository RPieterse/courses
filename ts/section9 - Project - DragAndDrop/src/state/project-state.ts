import { State } from "./index";
import { Project, ProjectStatus } from "../models/project";

// Project State Management

class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance(): ProjectState {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, people: number) {
    this.projects.push(
      new Project(
        Math.random().toString(),
        title,
        description,
        people,
        ProjectStatus.ACTIVE
      )
    );
    for (const listenerFunc of this.listeners) {
      listenerFunc(this.projects.slice());
    }
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id == projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenerFunc of this.listeners) {
      listenerFunc(this.projects.slice());
    }
  }
}

export const projectState = ProjectState.getInstance();
