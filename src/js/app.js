/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
} from './Characters';
import Team from './Team';
import ErrorRepository from './ErrorRepository';

const errorRepo = new ErrorRepository();
console.log(errorRepo.translate(404));

// const bowman = new Bowman('Игорь', 'Bowman'),
//   swordsman = new Swordsman('Федот', 'Swordsman'),
//   magician = new Magician('Тарас', 'Magician'),
//   daemon = new Daemon('Дима', 'Daemon'),
//   undead = new Undead('Константин', 'Undead'),
//   zombie = new Zombie('Кристинка', 'Zombie');

// const team = new Team();
// team.add(bowman);
// team.add(swordsman);
// team.addAll(bowman, swordsman, magician, daemon, daemon);
// console.log(team.members);
// console.log(team.toArray());
