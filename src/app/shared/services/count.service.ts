export class CountService {
  settingToActiveCounter: number;
  settingToInactiveCounter: number;

  countSettingToActive(name: string): void {
    this.settingToActiveCounter++;
    console.log(`Set user ${name} to active users.`);
  }

  countSettingToInactive(name: string): void {
    this.settingToInactiveCounter++;
    console.log(`Set user ${name} to inactive users.`);
  }
}
