# Intern test

## How to Run the Project

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [XAMPP](https://www.apachefriends.org/index.html) installed for serving the backend.

### Clone the Project

```bash
git clone https://github.com/ngaymai/GO-intern-test.git
cd GO-intern-test
```

### Setting up the Backend

1. Open XAMPP and start the Apache server.

2. Copy the project folder (`be`) to the `htdocs` directory of your XAMPP installation.
   
3. uncomment the line Extension= pgsql in the php.ini file

### Running the Frontend

Navigate to the frontend directory:

```bash
cd GO-intern-test/fe
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The frontend should now be running at `http://localhost:3000`. Open your web browser and navigate to this address to view the project.

### Note

- Make sure that your backend services, such as APIs or databases, are configured correctly according to your project requirements.

---
