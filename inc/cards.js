var conn = require('./db');

module.exports = {

    show(id) {
        return new Promise((resolve, reject) => {

            conn.query(`
            
                SELECT * tb_containers WHERE id = ${id}
            `,
            [
                id
            ], (err, results) => {

                if (err) {

                    reject(err);
                } else {
                    resolve(results);
                }

            });
        });
    }

}