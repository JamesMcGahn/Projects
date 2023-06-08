const express = require('express');
const pg = require('pg');

const pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  database: 'socialnetwork',
  user: 'jamesmcgahn',
  password: '',
});

// trunk-ignore(semgrep/javascript.express.security.audit.express-check-csurf-middleware-usage.express-check-csurf-middleware-usage)
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/posts', async (req, res) => {
  const { rows } = await pool.query(`
    SELECT * FROM posts;
    `);

  res.send(`
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>lng</th>
          <th>lat</th>
        </tr>
      </thead>
      <tbody>
      
        ${rows
          .map((row) => {
            return `
                    <tr>
                    <td>${row.id}</td>
                    <td>${row.loc.x}</td>
                    <td>${row.loc.y}</td>
                    </tr>
                    `;
          })
          .join('')}
      </tbody>
    </table>
    <form method="POST" >
        <h3>Create Post</h3>
        <div>
            <label>lng</label>
            <input name="lng" />
        </div>
        <div>
            <label>lat</label>
            <input name="lat" />
        </div>
        <button type="submit">Create</button>
    </form>
  `);
});

app.post('/posts', async (req, res) => {
  const { lat, lng } = req.body;
  // original example
  //   await pool.query('INSERT INTO posts (lat,lng) VALUES ($1, $2);', [lat, lng]);

  //   change before data migration
  //   await pool.query('INSERT INTO posts (lat,lng,loc) VALUES ($1, $2, $3);', [
  //     lat,
  //     lng,
  //     `(${lng}, ${lat})`,
  //   ]);

  // final
  await pool.query('INSERT INTO posts (loc) VALUES ($1);', [
    `(${lng}, ${lat})`,
  ]);

  res.redirect('/posts');
});

app.listen(3005, () => {
  console.log('Listening on 3005');
});
