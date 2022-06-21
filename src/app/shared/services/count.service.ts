export class CountService {
  settingToActiveCounter = 0;
  settingToInactiveCounter = 0;

  countSettingToActive(name: string): void {
    this.settingToActiveCounter++;
    console.log(
      `Set user ${name} to active users (total ${this.settingToActiveCounter} times)`
    );
  }

  countSettingToInactive(name: string): void {
    this.settingToInactiveCounter++;
    console.log(
      `Set user ${name} to inactive users (total ${this.settingToInactiveCounter} times)`
    );
  }
}
