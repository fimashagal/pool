# Pool
Get random object of object-pool 🌟

```javascript

const pool = new Pool(
        { x: 0, y: 21 },
        { x: 10, y: 2 },
        { x: 1, y: 3 },
        { x: 4, y: 4 },
        { x: 3, y: 2 },
        { x: 14, y: 24 }
    );

```

or

```javascript
    const pool = new Pool();

    pool.useSet(
        { x: 0, y: 21 },
        { x: 10, y: 2 },
        { x: 1, y: 3 },
        { x: 4, y: 4 },
        { x: 3, y: 2 },
        { x: 14, y: 24 }
    );
```

and 

```javascript
    console.log(pool.getOne());
```