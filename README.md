# budget-app

## Project setup

### To setup the Vue frontend:

```
npm install
```

### To setup the Python backend:

Create a Python virtual environment, if desired:

```
python -m venv venv
```

Install the python dependencies

```
pip install -r requirements.txt
```

Set up the local database

```
cd finances
python manage.py migrate
# If you want to initialize the database with some data
python manage.py loaddata simple_init.json  
```


## Running the frontend

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Running the backend

```
python manage.py runserver
```
