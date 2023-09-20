import Character from '../Character';
import Team from '../Team';

test('person added', () => {
  const user = new Character('Noname');
  const userSet = new Team();
  userSet.add(user);
  expect(userSet.members).toEqual(new Set([{ name: 'Noname' }]));
});

test('person added', () => {
  const user = new Character('Noname');
  const userSet = new Team();
  userSet.add(user);
  expect(() => userSet.add(user)).toThrow(`Member ${user.name} has already been added to the team!`);
});

test('persons added in ieam', () => {
  const user = new Character('Noname');
  const userFirst = new Character('NonameFirst');
  const userSecond = new Character('NonameSecond');
  const userSet = new Team();
  userSet.addAll(user, userFirst, userSecond);
  expect(userSet.members).toEqual(new Set([
    { name: 'Noname' },
    { name: 'NonameFirst' },
    { name: 'NonameSecond' },
  ]));
});

test('convert array', () => {
  const user = new Character('Noname');
  const userFirst = new Character('NonameFirst');
  const userSecond = new Character('NonameSecond');
  const userSet = new Team();
  userSet.addAll(user, userFirst, userSecond);
  expect(userSet.toArray()).toEqual([
    { name: 'Noname' },
    { name: 'NonameFirst' },
    { name: 'NonameSecond' },
  ]);
});
