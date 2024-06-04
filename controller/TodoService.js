const db = require('../model/database');

class TodoService {
    async getAllTasks() {
        return new Promise((resolve, reject) => {
            db.selectAll((error, data) => {
                if (error) return reject(error);
                resolve(data.rows);
            });
        });
    }

    async getUndoneTasks() {
        return new Promise((resolve, reject) => {
            db.selectUndone((error, data) => {
                if (error) return reject(error);
                resolve(data.rows);
            });
        });
    }

    async getDoneTasks() {
        return new Promise((resolve, reject) => {
            db.selectDone((error, data) => {
                if (error) return reject(error);
                resolve(data.rows);
            });
        });
    }

    async addTask(title, assignee) {
        return new Promise((resolve, reject) => {
            db.addTask(title, assignee, (error, data) => {
                if (error) return reject(error);
                resolve(data);
            });
        });
    }

    async deleteTask(id) {
        return new Promise((resolve, reject) => {
            db.deleteTask(id, (error, data) => {
                if (error) return reject(error);
                resolve(data);
            });
        });
    }

    async updateTask(id, title) {
        return new Promise((resolve, reject) => {
            db.updateTask(id, title, (error, data) => {
                if (error) return reject(error);
                resolve(data);
            });
        });
    }

    async markTaskDone(id) {
        return new Promise((resolve, reject) => {
            db.markDone(id, (error, data) => {
                if (error) return reject(error);
                resolve(data);
            });
        });
    }

    async markTaskUndone(id) {
        return new Promise((resolve, reject) => {
            db.markUndone(id, (error, data) => {
                if (error) return reject(error);
                resolve(data);
            });
        });
    }
}

module.exports = new TodoService();
