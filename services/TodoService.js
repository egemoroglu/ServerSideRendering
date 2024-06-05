const db = require('../model/database');

class TodoService {
    async getAllTasks() {
        try {
            const result = await db.selectAll();
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    async getUndoneTasks() {
        try {
            const result = await db.selectUndone();
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    async getDoneTasks() {
        try {
            const result = await db.selectDone();
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    async addTask(title, assignee) {
        try {
            const result = await db.addTask(title, assignee);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async deleteTask(id) {
        try {
            const result = await db.deleteTask(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async updateTask(id, title) {
        try {
            const result = await db.updateTask(id, title);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async markTaskDone(id) {
        try {
            const result = await db.markDone(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async markTaskUndone(id) {
        try {
            const result = await db.markUndone(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new TodoService();
