# ROT13 Encoder

A basic node.js/Express REST API implementation example for ROT13 encoder

## Usage
- Run `npm install` to install dependencies
- Run `npm run start` to start the local server
- Load `http://localhost:3000` to test the endpoint. It will display the msg `Hello World! => Uryyb Jbeyq!`

## API Endpoints

### GET /
Get a sample ROT13 string for 'Hello World!'

`Hello World! => Uryyb Jbeyq!
`

### POST /
To create a new ROT13 string based on POST data(x-www-form-url-encoded)

- `str`: Origin string

```
{
    str: "Hi Joe!"
}
```

You can use Postman to test the endpoint. It will save the origin and ROT13 string into `db.sqlite` file. After success, it returns `origin` and `encoded` value like followings.

```
{
    "origin": "Hi Joe!",
    "encoded": "Uv Wbr!"
}
```

### GET /history
It will return all the histories about ROT13 like followings.

```
{
    "data": [
        {
            "id": 1,
            "origin": "Hello World!",
            "encoded": "Uryyb Jbeyq!"
        },
        {
            "id": 2,
            "origin": "Hi Joe!",
            "encoded": "Uv Wbr!"
        }
    ]
}
```
