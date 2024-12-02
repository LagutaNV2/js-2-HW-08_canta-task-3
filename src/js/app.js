// TODO: write your code here

//  default'ные настройки, хранящиеся в Map'е:
//    'theme': 'dark' (другие возможные значения - 'light', 'gray');
//    'music': 'trance' (другие возможные значения - 'pop', 'rock', 'chillout', 'off');
//    'difficulty': 'easy' (другие возможные значения - 'normal', 'hard', 'nightmare').
//  Напишите класс Settings, который содержит:
//    Набор настроек по умолчанию - хранить в Map'е;
//    Набор польз-х настроек (пользователь может установить конкретную настройку по имени и значению)
//     - хранить в Map'е нужно только те настройки, которые пользователь установил;
//    Get'тер settings, кот. возвращает Map, полученный путём наложения пользовательских настроек
//     на default'ные.

export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.allowedSettings = new Map([
      ['theme', ['dark', 'light', 'gray']],
      ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
      ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
    ]);

    this.customSettings = new Map();
  }

  setSetting(key, value) {
    if (!this.allowedSettings.has(key)) {
      throw new Error(`Unknown setting: ${key}`);
    }

    // извлекает значение по ключу, в данном случае - массив возможных настроек
    const allowedValues = this.allowedSettings.get(key);

    if (!allowedValues.includes(value)) {
      throw new Error(`Invalid value "${value}" for setting "${key}". Allowed values: ${allowedValues.join(', ')}`);
    }

    this.customSettings.set(key, value);
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.customSettings]);
  }
}
