import { collatedTasks } from '../constants';

// Function to get the title of a project by its ID
export const getTitle = (projects, projectId) =>
  projects.find((project) => project.projectId === projectId);

// Function to get the collated title by key
export const getCollatedTitle = (projects, key) =>
  projects.find((project) => project.key === key);

// Check if collated tasks exist
export const collatedTasksExist = (selectedProject) =>
  collatedTasks.find((task) => task.key === selectedProject);

// Generate a unique push ID
export const generatePushId = (() => {
  const PUSH_CHARS =
    '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
  const lastRandChars = new Array(12).fill(0);

  return function () {
    let now = new Date().getTime();
    const timeStampChars = new Array(8);

    for (let i = 7; i >= 0; i--) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
      now = Math.floor(now / 64);
    }

    let id = timeStampChars.join('');

    for (let i = 0; i < 12; i++) {
      // Instead of using lastRandChars[i]++, we can manage it differently
      lastRandChars[i] = Math.floor(Math.random() * 64); // Example of random character
      id += PUSH_CHARS.charAt(lastRandChars[i]);
    }

    return id;
  };
})();
