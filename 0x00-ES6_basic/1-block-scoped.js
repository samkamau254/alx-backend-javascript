export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
	  // eslint-disable-line no-unused-vars
	   const task = false;
	  // eslint-disable-line no-unused-vars
	   const task2 = true;
  }

  return [task, task2];
}
