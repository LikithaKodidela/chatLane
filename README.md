# Chatlane - Messaging Made Simple💬

A lightweight chat management web application built using Node.js, Express, MongoDB, and EJS templates. Users can create, edit, and delete messages, with timestamps showing creation and updates.

---

## Features ✨

* Create new chats with sender and receiver names.
* Edit existing chat messages.
* Delete chat messages with a confirmation popup.
* Track message creation and last updated timestamps.
* Minimal and responsive UI for ease of use.

---

## Tech Stack 🛠

* **Node.js** - Backend runtime
* **Express.js** - Web framework
* **MongoDB** - Database for storing chats
* **Mongoose** - ODM for MongoDB
* **EJS** - Templating engine
* **HTML, CSS, JS** - Frontend UI
* **Method-Override** - Enable PUT & DELETE methods in forms

---

## Installation & Setup ⚙️

1. Clone the repository:

```bash
git clone https://github.com/LikithaKodidela/chatLane.git
cd chatLane
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

* Create a `.env` file in the root directory (you can use `.env.example` as a template):

```env
MONGODB_URI=your_mongodb_connection_string
PORT=8080
```

> **Tip:** Make sure `.env` is listed in `.gitignore` to keep your database credentials private.

4. Start the application:

```bash
npm start
```

5. Open your browser and go to:

```
http://localhost:8080
```

---

## Usage 🚀

* Navigate to the home page to see all chats.
* Click "New Chat" to create a message.
* Click "Edit" to modify a chat.
* Click "Delete" to remove a chat (confirmation required).

---

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

## Contact 📬

* GitHub: [LikithaKodidela](https://github.com/LikithaKodidela)
* Email: [likithakodidela14@gmail.com](mailto:likithakodidela14@gmail.com)

---

## Notes

* Ensure MongoDB is running or accessible via your connection string.
* Port `8080` is used by default, you can change it in `.env` if needed.
