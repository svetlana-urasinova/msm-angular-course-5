import { Injectable } from "@angular/core";
import { CountService } from "./count.service";

@Injectable()
export class UsersService {
  public activeUsers: string[] = ["Max", "Anna"];
  public inactiveUsers: string[] = ["Chris", "Manu"];

  constructor(private countService: CountService) {}

  onSetToActive(id: number): void {
    const currentUser = this.inactiveUsers[id];
    this.activeUsers.push(currentUser);
    this.inactiveUsers.splice(id, 1);
    this.countService.countSettingToActive(currentUser);
  }

  onSetToInactive(id: number): void {
    const currentUser = this.activeUsers[id];
    this.inactiveUsers.push(currentUser);
    this.activeUsers.splice(id, 1);
    this.countService.countSettingToInactive(currentUser);
  }
}
