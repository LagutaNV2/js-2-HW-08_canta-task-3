import Settings from '../app';

let settings;

beforeEach(() => {
  settings = new Settings();
});

test('Метод setSetting: установка допустимых значений', () => {
  settings.setSetting('theme', 'light');
  settings.setSetting('music', 'pop');
  settings.setSetting('difficulty', 'hard');

  // преобразование объекта типа Map (в данном случае, settings.settings) в обычный объект JS.
  const result = Object.fromEntries(settings.settings);

  expect(result).toEqual({
    theme: 'light',
    music: 'pop',
    difficulty: 'hard',
  });
});

test('Метод setSetting: выбрасывает ошибку при попытке установить неизвестную настройку', () => {
  expect(() => settings.setSetting('color', 'blue')).toThrow('Unknown setting: color');
});

test('Метод setSetting: выбрасывает ошибку при попытке установить недопустимое значение', () => {
  expect(() => settings.setSetting('theme', 'blue')).toThrow('Invalid value "blue" for setting "theme". Allowed values: dark, light, gray');
});

test('Геттер settings: корректно возвращает объединённые настройки', () => {
  settings.setSetting('theme', 'gray');
  settings.setSetting('music', 'rock');

  const result = Object.fromEntries(settings.settings);

  expect(result).toEqual({
    theme: 'gray',
    music: 'rock',
    difficulty: 'easy', // остаётся дефолтным
  });
});
