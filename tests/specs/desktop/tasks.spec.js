import { test } from '@playwright/test';
import { TASK_CASES } from '../../data/tasks.data.js';
import { TasksPage } from '../../pages/tasks.page.js';

test.describe('TASKS - DESKTOP', () => {
  test.beforeEach(async ({ page }) => {
    const tasks = new TasksPage(page);
    await tasks.navigateToTasks();
  });

  test('add task', async ({ page }) => {
    const tasks = new TasksPage(page);
    const { text } = TASK_CASES.ADD;
    await tasks.addTask(text);
    await tasks.expectTaskVisibleDesktop(1, text);
    await tasks.expectPriorityDesktop(1, 1);
  });

  test('add empty task', async ({ page }) => {
    const tasks = new TasksPage(page);
    const { empty, spaces } = TASK_CASES.EMPTY;
    await tasks.clickSubmit();
    await tasks.fillTaskInput(spaces);
    await tasks.clickSubmit();
    await tasks.expectNoTasks();

    await tasks.todaysDate();
  });

  test('edit task', async ({ page }) => {
    const tasks = new TasksPage(page);
    const { original, edited } = TASK_CASES.EDIT;
    await tasks.addTask(original);
    await tasks.editTaskDesktop(1, edited);
    await tasks.expectTaskVisibleDesktop(1, edited);
  });

  test('cancel edit', async ({ page }) => {
    const tasks = new TasksPage(page);
    const { original, tempCancel } = TASK_CASES.EDIT;
    await tasks.addTask(original);
    await tasks.cancelEditDesktop(1, tempCancel);
    await tasks.expectTaskVisibleDesktop(1, original);
  });

  test('complete task', async ({ page }) => {
    const tasks = new TasksPage(page);
    const { text } = TASK_CASES.COMPLETE;

    await tasks.addTask(text);
    await tasks.completeTaskDesktop(1);
    await tasks.expectTaskNotVisible(1);
    await tasks.expectTaskInCompleted(1, text);
  });

  test('sequence ids', async ({ page }) => {
    const tasks = new TasksPage(page);
    const { first, second, third } = TASK_CASES.SEQUENCE;
    await tasks.addTask(first);
    await tasks.addTask(second);
    await tasks.completeTaskDesktop(2);
    await tasks.addTask(third);
    await tasks.expectTaskVisibleDesktop(3, third);
  });

  test('reorder drag & drop', async ({ page }) => {
    const tasks = new TasksPage(page);
    const { tasks: reorderTasks, expectedFirst } = TASK_CASES.REORDER;
    for (const text of reorderTasks) {
      await tasks.addTask(text);
    }
    await tasks.dragTaskDesktop(3, 1);
    await tasks.expectFirstDesktopTaskText(expectedFirst);
  });
});
